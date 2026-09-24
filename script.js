// menubar:----
let one11 = document.getElementById("one11")

async function user(){
    
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        let data = await response.json()
        let result = data.categories.map((product)=>{
            return `
            <div  class = "menu">
            <button class = "btn"> 
                  <h6>${product.strCategory}</h6>
                  </button>
                  </div>   `
                
        })
       one11.innerHTML += result.join("");
    
}
user()

/* cards */
let cart = document.getElementById("cart")
async function fn(){
    let resolve = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data = await resolve.json()
    let result = data.categories.map((value)=>{
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

async function fdata(){
    let func = document.getElementById("func")
    let search = document.getElementById('Search').value.toLowerCase().trim()
    // console.log(search)//pasta

    if(search ===""){
        func.innerHTML =""
        return
    }

    let res = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    let d = await res.json()
    // console.log(d)//array of obj
    let result1 = d.meals.map((value)=>{
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
 let veg = document.getElementById("veg")
async function vegfun(cate){
    let resolve2 = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    // console.log(resolve2);
    let data1 = await resolve2.json()
    let result2 = data1.categories.find((value1)=>{
        
         return value1.strCategory === category;

        
    });
    // veg.innerHTML = result2
    console.log(resolve2);
    


    
}




