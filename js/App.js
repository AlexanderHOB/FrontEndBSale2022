//URL API
const URL_BASE = 'https://still-temple-32749.herokuapp.com/api';


//lOAD PAGE

window.addEventListener("load", ()=>{

    Product.getAllProducts(URL_BASE); // GET ALL PRODUCTS FROM API (15 per page)
    Category.getAllCategories(URL_BASE);// GET ALL CATEGORIES FROM API
    //category status
    let category_id = 0;
    // search products 
    const search = document.querySelector('#search-product');
    search.addEventListener('input', (e)=>{
        const name = e.target.value;
        Product.getProductByName(URL_BASE,name);
    });
    
    // change category
    const dropdown = document.querySelector('.categories-dropdown');
    dropdown.addEventListener('change', (e)=>{
        if(e.target.value === '0'){
            Product.getAllProducts(URL_BASE); // GET ALL PRODUCTS FROM API (15 per page)
            category_id = 0;
        }else{
            Product.getProductByCategory(URL_BASE,e.target.value);
            category_id = e.target.value;
        }
    });
    // change Order
    const dropdownAttribute = document.querySelector('.attribute-select');
    dropdownAttribute.addEventListener('change', (e)=>{
        let attribute = e.target.value.split(' ')[0];
        let order = e.target.value.split(' ')[1];
        if(category_id != 0){
            let url_by_category = `${URL_BASE}/categories/${category_id}/products`
            Product.getSortProduct(url_by_category,attribute,order);
        }else{
            Product.getSortProduct(`${URL_BASE}/products`,attribute,order);
        }

    });
});


