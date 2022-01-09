//URL API
const URL = 'https://still-temple-32749.herokuapp.com/api/products';


//lOAD PAGE

window.addEventListener("load", ()=>{
    Product.getAllProducts(URL); // GET ALL PRODUCTS FROM API
});