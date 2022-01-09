//URLs API
const URL_BASE = 'https://still-temple-32749.herokuapp.com/api';
const URL_PRODUCTS= `${URL_BASE}/products`;
const URL_CATEGORIES = `${URL_BASE}/categories`;

//lOAD PAGE

window.addEventListener("load", ()=>{
    //start page 
    Product.getAllProducts(URL_PRODUCTS); // GET ALL PRODUCTS FROM API (15 per page)
    Category.getAllCategories(URL_CATEGORIES);// GET ALL CATEGORIES FROM API
    //category status to filter data
    let category_id = 0;
    // search products 
    const search = document.querySelector('#search-product');
    search.addEventListener('input', (e)=>{
        const name = e.target.value;
        Product.getProductByName(URL_PRODUCTS,name);
    });
    
    // change category and filter products
    const dropdown = document.querySelector('.categories-dropdown');
    dropdown.addEventListener('change', (e)=>{
        if(e.target.value === '0'){
            Product.getAllProducts(URL_PRODUCTS); // GET ALL PRODUCTS FROM API (15 per page)
            category_id = 0;
        }else{
            Product.getProductByCategory(URL_BASE,e.target.value);
            category_id = e.target.value;
        }
    });
    // change Order to show products
    const dropdownAttribute = document.querySelector('.attribute-select');
    dropdownAttribute.addEventListener('change', (e)=>{
        let attribute = e.target.value.split(' ')[0];
        let order = e.target.value.split(' ')[1];
        //if category is selected should filter products by category
        if(category_id != 0){
            //When the filtered category is sorted another url is required
            let url_by_category = `${URL_BASE}/categories/${category_id}/products`
            Product.getSortProduct(url_by_category,attribute,order);
        }else{
            Product.getSortProduct(URL_PRODUCTS,attribute,order);
        }
    });
    // 
    
});


