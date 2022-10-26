
const products = [
    {id: 1, title: 'Ноутбук', price: 75000},
    {id: 2, title: 'Мышка', price: 3000},
    {id: 3, title: 'Клавиатура', price: 12000},
    {id: 4, title: 'Геймпад', price: 6700},

];

const renderProduct = (title, price, img) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price} руб.</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title,item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);
