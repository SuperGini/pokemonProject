'use strict'

const pokemonService = new PokemonService();
const renderPokemon = new RenderPokemonStats();

const pokemonBtn = document.querySelector('.btn');

const topStats = document.querySelector('.top');
const pokemonImg = document.querySelector('.image');
const ability = document.querySelector('.ability');
const bottomStats = document.querySelector('.bottom');

const container = document.querySelector('.container');
const card = document.querySelector('.card');

const img = document.querySelector('.image img');



async function getPokemon(){

    let x = await pokemonService.getPokemon();
    console.log(x);

    topStats.innerHTML = '';
    topStats.insertAdjacentHTML('afterbegin', renderPokemon.renderTopStats(x));

 //   pokemonImg.innerHTML='';
  //  pokemonImg.insertAdjacentHTML('afterbegin', renderPokemon.renderImage(x));

    img.src = x.pokemonImg;

    ability.innerHTML='';
    ability.insertAdjacentHTML('afterbegin', renderPokemon.renderAbility(x));

    bottomStats.innerHTML='';
    bottomStats.insertAdjacentHTML('afterbegin', renderPokemon.renderBottomStats(x));

}


pokemonBtn.addEventListener('click', getPokemon);

container.addEventListener('mousemove', e => {

    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 + e.pageY*1.2) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

})

container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';


    //top stats
    topStats.style.transform = 'translateZ(100px)';

    img.style.transform = 'translateZ(100px)';

    ability.style.transform = 'translateZ(100px)';

    bottomStats.style.transform = 'translateZ(75px)';

})

container.addEventListener('mouseleave', e => {

    //card
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //totp stats reset
    topStats.style.transform = 'translateZ(0px)';

    img.style.transform = 'translateZ(0px)';

    ability.style.transform = 'translateZ(0px)';

    bottomStats.style.transform = 'translateZ(0px)';



})

