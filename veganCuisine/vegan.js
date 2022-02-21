const MENUS = [
    { id: 1, imgUrl: 'img/curry.jpg', title: 'Vegan curry', category: 'main', desc: 'Colorful vegetable and tofu thai curry', price: '£10' },
    { id: 2, imgUrl: 'img/alfredo.jpg', title: 'Vegan Alfredo pasta', category: 'main', desc: 'Super creamy alfredo pasta served with vegan parmesan', price: '£10' },
    { id: 3, imgUrl: 'img/lentilLoaf.jpg', title: 'Lentil loaf', category: 'main', desc: 'served with BBQ gravy', price: '£10' },
    { id: 4, imgUrl: 'img/risotto.jpg', title: 'Mushroom risotto', category: 'main', desc: 'Super creamy rissotto and wild mushrooms', price: '£10' },
    { id: 5, imgUrl: 'img/sourTofu.jpg', title: 'Sour and sweet tofu', category: 'main', desc: 'Served with basmati rice', price: '£10' },
    { id: 6, imgUrl: 'img/stirFry.jpg', title: 'Vegan stir Fry', category: 'main', desc: 'Thai stir fry with colorful vegetables', price: '£10' },
    { id: 7, imgUrl: 'img/caliuflower.jpg', title: 'Bang Bang cauliflower', category: 'starter', desc: 'Sticky and spicy korean style cauliflower', price: '£6' },
    { id: 8, imgUrl: 'img/chickpea.jpg', title: 'Chickpea salad', category: 'starter', desc: 'Served with limon and olive oil dressing', price: '£6' },
    { id: 9, imgUrl: 'img/eggplant.jpg', title: 'Vegan eggplant parmesan', category: 'starter', desc: 'Crispy eggplant with vegan parmesan', price: '£6' },
    { id: 10, imgUrl: 'img/potato.jpg', title: 'Potato wedges', category: 'starter', desc: 'Super crispy ans spicy potato', price: '£6' },
    { id: 11, imgUrl: 'img/tembeh.jpg', title: 'Marinated tembeh', category: 'starter', desc: 'Served with homemade bread', price: '£6' },
    { id: 12, imgUrl: 'img/cheesecake.jpg', title: 'Vegan pumpkin cheesecake', category: 'dessert', desc: 'Served with vegan ice cream', price: '£5' },
    { id: 13, imgUrl: 'img/chocolateMuffins.jpg', title: 'Chocolate muffin', category: 'dessert', desc: 'Served with vegan ice cream', price: '£5' },
    { id: 14, imgUrl: 'img/coffeeCake.jpg', title: 'Coffee cake', category: 'dessert', desc: 'Served with vegan ice cream', price: '£5' },
    { id: 15, imgUrl: 'img/stickyBuns.jpg', title: 'Sticky Buns', category: 'dessert', desc: 'Super cruchy nuts top', price: '£5' }

];

const navFormHTML = document.getElementById('navForm');
//<button class="btn btn-outline-success me-2" type="button">Main button</button>
const allMenuButtonHTML = document.createElement('button');
allMenuButtonHTML.classList.add("btn", "btn-outline-success", "m-2");
allMenuButtonHTML.innerHTML = 'All';
allMenuButtonHTML.onclick = () => {
    renderMenusHTML(MENUS);
}

const starterMenuButtonHTML = document.createElement('button');
starterMenuButtonHTML.classList.add("btn", "btn-outline-success", "m-2");
starterMenuButtonHTML.innerHTML = 'Starter';
starterMenuButtonHTML.onclick = () => {
    const starters = MENUS.filter(menu => menu.category === 'starter');
    renderMenusHTML(starters);
}

const mainMenuButtonHTML = document.createElement('button');
mainMenuButtonHTML.classList.add("btn", "btn-outline-success", "m-2");
mainMenuButtonHTML.innerHTML = 'Main Course';
mainMenuButtonHTML.onclick = () => {
    const mainCourses = MENUS.filter(menu => menu.category === 'main');
    renderMenusHTML(mainCourses);
}
const dessertMenuButtonHTML = document.createElement('button');
dessertMenuButtonHTML.classList.add("btn", "btn-outline-success", "m-2");
dessertMenuButtonHTML.innerHTML = 'Dessert';
dessertMenuButtonHTML.onclick = () => {
    const desserts = MENUS.filter(menu => menu.category === 'dessert');
    renderMenusHTML(desserts);
}

//add all menu buttons
navFormHTML.append(allMenuButtonHTML);
navFormHTML.append(starterMenuButtonHTML);
navFormHTML.append(mainMenuButtonHTML);
navFormHTML.append(dessertMenuButtonHTML);

const cardListHTML = document.getElementById('cardList');
const cardHTML = (card) => `
            <div id=${card.id} class="col-sm-4 mt-3" >
                <div class="card" style="width: 18rem; height:37rem">
                    <img src=${card.imgUrl} class="card-img-top" alt=${card.title}>
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <div>
                            <small class="card-text">${card.category}</small>
                            <small class="card-text" style="float:right;">${card.price}</small>
                        </div> 
                        <p class="card-text">${card.desc}</p>
                    </div>
                </div>
            </div>
            `

const renderMenusHTML = (menuArray) => {
    cardListHTML.innerHTML = menuArray.map(menu => cardHTML(menu)).join('');
}
renderMenusHTML(MENUS);