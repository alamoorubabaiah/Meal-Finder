// menubar:----
let one11 = document.getElementById("one11")
async function user() {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data = await response.json()
    let result = data.categories.map((product) => {
        return `
            <div  class = "menu">
          <button class="btn" onclick="vegfun('${product.strCategory}')"> <h6>${product.strCategory}</h6> </button>
         </div> `
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
        </div> `
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

// secondpage:-
function vegfun(cate) {
    window.open(`second-page.html?category=${encodeURIComponent(cate)}`,"_self");
}

async function vegan() {

    let sec = document.getElementById("sec");
    let params = new URLSearchParams(window.location.search);
    let category = params.get("category");
    // console.log("Category:", category);
    if (!category) {
        sec.innerHTML = `<h2>No category selected</h2>`;
        return;
    }
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data = await response.json();
    // Find selected category
    let categoryData = data.categories.find((item) => {
        return item.strCategory.toLowerCase() === category.toLowerCase();
    });
    if (!categoryData) {
        sec.innerHTML = `<h2>Category not found</h2>`;
        return;
    }
//    for related meals
    let mealResponse = await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`);
    let mealData = await mealResponse.json();

    //    description
    let description = `
        <div class="category-description">
            <h2>${categoryData.strCategory}</h2>
            <h5>${categoryData.strCategoryDescription}</h5>
        </div>`;

    let mealsHeading = `
        <div class="meals-title">
            <h2>MEALS</h2>
            <div class="title-line"1></div>
        </div>
    `;

    if (!mealData.meals) {
        sec.innerHTML = description + mealsHeading + `<h3>No meals found</h3>`;
        return;
    }

    let meals = mealData.meals.map((meal) => {
        return `
            <div class="meal-card">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal} "onclick="note('${meal.strMeal}')">
                <h5> ${meal.strMeal}</h5>
         </div>`;
    });

    sec.innerHTML = ` ${description} ${mealsHeading}
        <div class="meal-grid">
            ${meals.join("")}
        </div>
    `;
}
vegan();

// thirdpage:-

function note(three) {
    window.open(`third-page.html?meal=${encodeURIComponent(three)}`, "_self");
}

async function getMeal(){
    let params = new URLSearchParams(window.location.search);
    let meal = params.get("meal");
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(meal)}`);
     let  data = await response.json();
      let mealData = data.meals.find((item) => {
        return item.strMeal.toLowerCase() === meal.toLowerCase();
    });
   
       let name = `
        <div class="meal-descrip">
          <h4> 🏡>>${mealData.strMeal} </h4>
        </div>`;

        let img =`
          <div class="image">
        <img src="${mealData.strMealThumb}">
         </div>
        `;

        let desc = `
         <div class = "dec">
         <h3>${mealData.strMeal}</h3>
         <h4>Category:${mealData.strCategory}</h4>
         <p>Source: ${mealData.strSource}</p>
         <h6>Tags:${mealData.strTags}</h6>

         <div class ="teja">
         <h5>ingridents</h5>
         <p>${mealData.strIngredient1}</p>
         <p>${mealData.strIngredient2}</p>
         <p>${mealData.strIngredient3}</p>
         <p>${mealData.strIngredient4}</p>
         <p>${mealData.strIngredient5}</p>
         <p>${mealData.strIngredient6}</p>
         <p>${mealData.strIngredient7}</p>
         <p>${mealData.strIngredient8}</p>
         <p>${mealData.strIngredient9}</p>
         <p>${mealData.strIngredient10}</p>
         <p>${mealData.strIngredient11}</p>
         <p>${mealData.strIngredient12}</p>
         <p>${mealData.strIngredient13}</p>
         <p>${mealData.strIngredient14}</p>
         <p>${mealData.strIngredient15}</p>
         <p>${mealData.strIngredient16}</p>
         <p>${mealData.strIngredient17}</p>
         <p>${mealData.strIngredient18}</p>
         <p>${mealData.strIngredient19}</p>
         <p>${mealData.strIngredient20}</p>
         </div>
         </div>
        `;

       






    ingrident.innerHTML = ` ${name} ${img} ${desc}`;
    

}
getMeal();








