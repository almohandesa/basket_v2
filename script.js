// Script for navigation bar
const search =() =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("Pro-container")
    const product =document.querySelectorAll("Pro")
    const pname =document.getElementsByTagName("h2")

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";

            
             }
            
        }

    }
 }


document.querySelector('.Pro').addEventListener('click', function(event) {
    window.location.href = 'sproduct.html';
});



    let list = document.getElementById('list');
    let filter = document.querySelector('.filter');
    let count = document.getElementById('count');

    let listProducts = [
        {
            id: 1,
            name: 'Name product white-black',
            price: 205600,
            quantity: 0,
            image: 'img/products/f1.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 2,
            name: 'Name product white-black-grey',
            price: 300000,
            quantiy: 30,
            image: 'img/products/f2.jpg',
            nature: {
                color: ['white', 'black', 'grey'],
                size: ['S', 'M', 'L'],
                type: 'Polo'
            }
        },
        {
            id: 3,
            name: 'Name product black',
            price: 200000,
            quantiy: 30,
            image: 'img/products/f3.jpg',
            nature: {
                color: ['black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 4,
            name: 'Name product blue-black',
            price: 400000,
            quantiy: 30,
            image: 'img/products/f4.jpg',
            nature: {
                color: ['black', 'blue'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 5,
            name: 'Name product brown',
            price: 320000,
            quantiy: 30,
            image: 'img/products/f5.jpg',
            nature: {
                color: ['brown'],
                size: ['S', 'M', 'L'],
                type: 'Polo'
            }
        },
        {
            id: 6,
            name: 'Name product white-black',
            price: 100000,
            quantiy: 30,
            image: 'img/products/f6.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'Shirt'
            }
        },
    
    ];
let productFilter = listProducts;
    showProduct(productFilter);
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = listProducts.filter(item => {
            // check category
            if(valueFilter.category.value != ''){
                if(item.nature.type != valueFilter.category.value){
                    return false;
                }
            }
            // check color
            if(valueFilter.color.value != ''){
                if(!item.nature.color.includes(valueFilter.color.value)){
                    return false;
                }
            }
            // check name
            if(valueFilter.name.value != ''){
                if(!item.name.includes(valueFilter.name.value)){
                    return false;
                }
            }
            // check min price
            if(valueFilter.minPrice.value != ''){
                if(item.price < valueFilter.minPrice.value){
                    return false;
                }
            }
            //  check max price
            if(valueFilter.maxPrice.value != ''){
                if(item.price > valueFilter.maxPrice.value){
                    return false;
                }
            }
    
    
            return true;
        })
        showProduct(productFilter);
    })
    function showProduct(productFilter){
        count.innerText = productFilter.length;
        list.innerHTML = '';
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
            // create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
            // create price
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = item.price.toLocaleString() + ' $';
            newItem.appendChild(newPrice);
    
            list.appendChild(newItem);
        });
    }


/* --------------------------------- */
<script>
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
</script>