const navFormHTML = document.getElementById('navForm');
//<button class="btn btn-outline-success me-2" type="button">Main button</button>
const allMenuButtonHTML = document.createElement('button');
allMenuButtonHTML.classList.add("btn", "btn-outline-success", "m-2");
allMenuButtonHTML.innerHTML = 'All';
allMenuButtonHTML.onclick = () => {
    console.log('all');
}

const starterMenuButtonHTML = document.createElement('button');
starterMenuButtonHTML.classList.add("btn", "btn-outline-success", "m-2");
starterMenuButtonHTML.innerHTML = 'Starter';
starterMenuButtonHTML.onclick = () => {
    console.log('Starter');
}

const mainMenuButtonHTML = document.createElement('button');
mainMenuButtonHTML.classList.add("btn", "btn-outline-success", "m-2");
mainMenuButtonHTML.innerHTML = 'Main Course';
mainMenuButtonHTML.onclick = () => {
    console.log('Main');
}

//add all menu buttons
navFormHTML.append(allMenuButtonHTML);
navFormHTML.append(starterMenuButtonHTML);
navFormHTML.append(mainMenuButtonHTML);

const cardListHTML = document.getElementById('cardList');
const cardHTML = (card) => `
            <div id=${card.id} class="col-sm-6">
                <div class="card" style="width: 18rem;">
                    <img src=${card.imgUrl} class="card-img-top" alt=${card.title}>
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.category}</p>
                        <p class="card-text">${card.desc}</p>
                        <p class="card-text">${card.price}</p>
                    </div>
                </div>
            </div>
            `

cardListHTML.innerHTML = (cardHTML({ id: 1, imgUrl: 'img/curry.jpg', title: 'vegan curry', category: 'main', desc: 'vegan recipe', price: '£10' }));