document.addEventListener('DOMContentLoaded',()=> { 
let userInfo = document.querySelector("#user-info"); 
let userDom = document.querySelector("#user"); 
let links = document.querySelector("#links"); 
let logoutBtn = document.querySelector("#logout");
if (localStorage.getItem("us")){
    links.remove()
    userInfo.style.display = "flex";
    userDom.innerHTML = localStorage.getItem("us");
}
logoutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=> {
window.location = "register.html";
    },1500);
});
// defined product 
let productsDom = document.querySelector('.products');
let producTchoseDom = document.querySelector('.carts-products');
pro = [
    {
        id:'1',
        title:'headphone',
        size : 'large',
        imageUrl :'images/work1.jpg',

    },
    {
        id:'2',
        title:'headphone',
        size : 'large',
        imageUrl :'images/work2.jpg',

    },
    {
        id:'3',
        title:'headphone',
        size : 'large',
        imageUrl :'images/work3.jpg',

    },
    {
        id:'4',
        title:'headphone',
        size : 'large',
        imageUrl :'images/work4.jpg',

    },
    
]
function drproductsUI(){
    let productsUI = pro.map((item) => {
return `
<div class="product-item">
        <img 
        src=${item.imageUrl}
        class="product-item-img" alt="image"
        />
        <dir class="product-item-desc">
        <h2>${item.title}</h2>

        <p>just lock it we are sur you will like it</p>
        <span>${item
            .size}</span>
        
        </dir> 
        <div class="product-item-action">
        <button class="add-to-card" onclick(${item.id})>add to card</button>
        <i class="favorite far fa-heart"></i>
        </div> 
</div>
        `
       
 });
 productsDom.innerHTML = productsUI.join('');
    
    
};

drproductsUI();
function added(id){
    let chosenItem = pro.find((item)=> item.id ===id);
    producTchoseDom.innerHTML = `<p>${chosenItem.title}</p>`;
}
    added();
});
