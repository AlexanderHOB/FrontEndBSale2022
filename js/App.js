//URL API
const URL = 'https://still-temple-32749.herokuapp.com/api/products';


//lOAD PAGE

window.addEventListener("load", ()=>{
    Product.getAllProducts(URL); // GET ALL PRODUCTS FROM API

    // search products 

    const search = document.querySelector('#search-product');
    search.addEventListener('input', (e)=>{
        const name = e.target.value;
        Product.getProductByName(URL,name);
    })
});


