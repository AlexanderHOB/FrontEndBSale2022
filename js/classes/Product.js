class Product{
    
    
    static getAllProducts(url){
        fetch(url)
        .then(products => products.json())
        .then(products => console.log(products))
        .catch(err => console.error(err));
    }
    static getProductById(url,id){
        fetch(`${url}/${id}`)
        .then(product => product.json())
        .then(product => console.log(product))
        .catch(err => console.error(err));
    }

}