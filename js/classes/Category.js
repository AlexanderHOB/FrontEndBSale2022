class Category{
    static showDropdown(name,id){
        const dropdown = document.querySelector('.categories-dropdown');
        const option = document.createElement('option');
        option.value = id;
        option.text = name;
        dropdown.appendChild(option);
    }
    static getAllCategories(url){
        fetch(url)
        .then(categories => categories.json())
        .then(categories => {
            categories.data.map(category =>{
                this.showDropdown(category.name,category.id);
            });
        })
        .catch(err => console.error(err));
    }


}