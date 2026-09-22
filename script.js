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






