// menubar:----
let one11 = document.getElementById("one11")

async function user() {

    let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data = await response.json()
    let result = data.categories.map((product) => {
        return `
            <div  class = "menu">
          <button class="btn" onclick="vegfun('${product.strCategory}')">
         <h6>${product.strCategory}</h6>
        </button>
                  </div>   `

    })
    one11.innerHTML += result.join("");

}
user()

/* cards */
let cart = document.getElementById("cart")
async function fn() {
    let resolve = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data = await resolve.json()
    let result = data.categories.map((value) => {
        return `
        <div class="items">
        <h6>${value.strCategory}</h6>
        <img src="${value.strCategoryThumb}" onclick="vegfun('${value.strCategory}')">
        </div>
        `
    })
    cart.innerHTML += result.join("");
}
fn()




/* filter */

async function fdata() {
    let func = document.getElementById("func")
    let search = document.getElementById('Search').value.toLowerCase().trim()
    // console.log(search)//pasta

    if (search === "") {
        func.innerHTML = ""
        return
    }

    let res = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    let d = await res.json()
    // console.log(d)//array of obj
    let result1 = d.meals.map((value) => {
        return `<div class = "filt">
          <h6>${value.strCategory}</h6>
          <img src = "${value.strMealThumb}" width = "240px">
          <p>${value.strArea}</p>
          <h5>${value.strMeal}</h5>
        </div> `

    })
    func.innerHTML = result1.join("")


}



// menu items while clicking
/* let veg = document.getElementById("veg")
async function vegfun(cate) {
    window.open(
        `second-page.html?category=${encodeURIComponent(cate)}`,
        "_self"
    );

    let resolve2 = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    // console.log(resolve2);
    let data1 = await resolve2.json()
    let result2 = data1.categories.find((value1) => {

        return value1.strCategory === category;


    });
    veg.innerHTML = result2

}
 */

function vegfun(cate) {

    window.open(
        `second-page.html?category=${encodeURIComponent(cate)}`,
        "_self"
    );

}

async function vegan() {

    let sec = document.getElementById("sec");

    // Get category from URL
    let params = new URLSearchParams(window.location.search);

    let category = params.get("category");

    console.log(category);

    // Get all categories
    let response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    let data = await response.json();

    // Find selected category
    let result = data.categories.find((items) => {
        return items.strCategory === category;
    });

    if (!result) {
        sec.innerHTML = "<h2>Category not found</h2>";
        return;
    }

    sec.innerHTML = `
        <div class="flex">

            <h2>${result.strCategory}</h2>

           

            <p>${result.strCategoryDescription}</p>

            <hr>

        </div>
    `;
}

vegan();






// async function vegan(){
//     let sec = document.getElementById("sec");
//     // let search1 = document.getElementById("section1")
//     let rej = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${}`);
//     let rem = await rej.json();
//     let date = rem.categories.map((items)=>{
//         return `
//         <div class = "flex">
//         <h2>${items.strCategory}</h2>
//         <p>${items.strCategoryDescription}</p> <hr>

     
//         </div> 
//         `
//     })
//     sec.innerHTML = date.join();
// }



