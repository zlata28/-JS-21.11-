
async function getProducts(){
  let products = [] 
  const list = document.guerySelector('output')

  fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json =>{
            products = json.products
            products.forEach(item =>{
                let elem = document.createElement('li')
                elem.textContent = item.title
                list.appendChild(elem)
            })
        })
        .catch(error => console.log(error))
}





// Реализовать страницу с карточками продуктов.
// Продукты получаем: https://dummyjson.com/products

// Используем браузерные create и append

