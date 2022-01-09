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
            const cards = document.querySelector('#cards');
            //CLEAR PRODUCTS
            cards.innerHTML = '';
            this.pagination(products.links);
            return data.map(({name,price,url_image}) =>{
                this.showDOM(name,price,url_image);
            });
        })
        .catch(err => console.error(err));
    }
    static getProductByName(url,name){
        fetch(`${url}?name=${name}`)
        .then(products => products.json())
        .then(products => {
            const data = products.data;
            const cards = document.querySelector('#cards');
            //CLEAR PRODUCTS
            cards.innerHTML = '';
            //SHOW PRODUCTS BY NAME
            return data.map(({name,price,url_image}) =>{
                this.showDOM(name,price,url_image);
            });
        })
        .catch(err => console.error(err));
    }
    static getProductByCategory(url,category){
        fetch(`${url}/categories/${category}/products`)
        .then(products => products.json())
        .then(products => {
            const data = products.data;
            const cards = document.querySelector('#cards');
            //CLEAR PRODUCTS
            cards.innerHTML = '';
            //SHOW PRODUCTS BY NAME
            return data.map(({name,price,url_image}) =>{
                this.showDOM(name,price,url_image);
            });
        })
        .catch(err => console.error(err));
    }
    static getSortProduct(url,attribute,order = 'desc'){
        fetch(`${url}?sort=${order}&sort_by=${attribute}`)
        .then(products => products.json())
        .then(products => {
            const data = products.data;
            const cards = document.querySelector('#cards');
            //CLEAR PRODUCTS
            cards.innerHTML = '';
            //SHOW PRODUCTS BY NAME
            return data.map(({name,price,url_image}) =>{
                this.showDOM(name,price,url_image);
            });
        })
        .catch(err => console.error(err));
    }
    static pagination(links){

        const pagination = document.querySelector('.pagination');
        pagination.innerHTML ='';
        links.map(link=>{
            let pageContainer = document.createElement('div');
            let page = document.createElement('p');
            pageContainer.classList.add('page');
            page.innerHTML = link.label;
            page.onclick = ()=>{
                this.getAllProducts(link.url)
            };
            if(link.active){
                pageContainer.classList.add('active');
            }
            if(link.label === '&laquo; Previous'){
                page.innerHTML = '<';
            }
            if(link.label === 'Next &raquo;'){
                page.innerHTML = '>';
            }
            if(link.url === null){
                return null;
            }
            if(link.label )
            pageContainer.appendChild(page);
            pagination.appendChild(pageContainer);
        });

    }
}