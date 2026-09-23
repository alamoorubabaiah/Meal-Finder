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
        <img src ="${value.strCategoryThumb}">
        </div>
        `
    })
    cart.innerHTML += result.join("");
}
fn()



