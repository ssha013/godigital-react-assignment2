
let products = [];
let text = "";

async function fetchProducts() {    
    return await fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => renderProducts(json))
        .catch(error => console.log("Error!"));
}
async function fetchProduct(id) {
    return await fetch('https://fakestoreapi.com/products/' + id)
        .then(response => response.json())
        // .then(json => renderProduct(json))
        .then(json => {renderProduct(JSON.stringify(json))})
        .catch(error => console.log("Error!"));
}
function renderProduct(data) {
    obj = JSON.parse(data)
    const table = document.getElementById('table')
    const row = `<tr>
    <td>${obj.title}</td>
    <td>${obj.price}$</td>
    <td><a data-id"${obj.id}" class="delete" href="javascript:void()">×</a></td>
</tr>`
    table.innerHTML += row;
}
function renderProducts(json) {
    const cards = document.getElementById('cards')
    json.forEach(product => {
        const cardHTML = `
       <div class="card">
       <div class="card-image">
           <img src="${product.image}" alt="sfa">
       </div>
       <div class="card-details">
           <h2 class="card-title">
           ${product.title}
           </h2>
           <p class="card-description">
           ${product.description}
           </p>
           <div class="card-actions">
               <big class="price">
               ${product.price}
               </big>
               <big class="currency">
                   $
               </big>
               <a href="javascript:void()" data-id="${product.id}" class="add">
                   add to card
               </a>
           </div>
       </div>
   </div>
        `
        cards.innerHTML += cardHTML;
    })
    list = document.querySelectorAll(".add");
    listDelete = document.querySelectorAll(".delete");
    // console.log(list.length)
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function (e) {
            e.preventDefault();
            //   alert(this.getAttribute('data-id'))
            fetchProduct(this.getAttribute('data-id'))
        });
    }
    
}

document.addEventListener('DOMContentLoaded', function () {
    fetchProducts()
})
