class Product{

    // STATIC FUNCTION TO RENDER DOM
    static showDOM(name,price,imageUrl){
        const cards = document.querySelector('#cards'); // get card's container
        cards.innerHTML += `
            <div class="card" id="card">
                <div class="card-img">
                    <img src="${imageUrl}" alt="${name}">
                </div>
                <div class="card-title">
                    <h3>${name}</h3>
                </div>
                <div class="card-actions">
                    <div class="card-actions__price">
                        <p>S./ ${price}</p>
                    </div>
                    <button class="card-actions__cart">
                        <i class='bx bxs-cart-add' style='color:#000' ></i>
                    </button>
                </div>
            </div>
        `;
    }
    static getAllProducts(url){
        fetch(url)
        .then(products => products.json())
        .then(products => {
            const data = products.data;
            return data.map(({name,price,url_image}) =>{
                this.showDOM(name,price,url_image);
            });
        })
        .catch(err => console.error(err));
    }
    static getProductById(url,id){
        fetch(`${url}/${id}`)
        .then(product => product.json())
        .then(product => {product})
        .catch(err => console.error(err));
    }

}