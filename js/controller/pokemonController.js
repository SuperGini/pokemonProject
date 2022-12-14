'use strict'

const pokemonBtn = document.querySelector('.btn');

const topStats = document.querySelector('.top');
const ability = document.querySelector('.ability');
const bottomStats = document.querySelector('.bottom');
const container = document.querySelector('.container');
const card = document.querySelector('.card');
const img = document.querySelector('.image img');

const testLoader = document.querySelector('.test-loader');

const pokemonService = new PokemonService();
const renderPokemon = new RenderPokemonStats();

class PokemonController {

    async getPokemon(){

        if(!testLoader.classList.contains('loader')){
            testLoader.classList.add('loader');
        }


        let pokemon = await pokemonService.getPokemon();

        img.src = pokemon.pokemonImg;

        img.onload = function (){

           if(testLoader.classList.contains('loader')){
               testLoader.classList.remove('loader');
           }

            topStats.innerHTML = '';
            topStats.insertAdjacentHTML('afterbegin', renderPokemon.renderTopStats(pokemon));

            ability.innerHTML='';
            ability.insertAdjacentHTML('afterbegin', renderPokemon.renderAbility(pokemon));

            bottomStats.innerHTML='';
            bottomStats.insertAdjacentHTML('afterbegin', renderPokemon.renderBottomStats(pokemon));
        }
    }

    generate3DEffect(){
        card.style.transition = 'none';
        topStats.style.transform = 'translateZ(100px)';
        img.style.transform = 'translateZ(100px)';
        ability.style.transform = 'translateZ(100px)';
        bottomStats.style.transform = 'translateZ(75px)';
    }

    reset3DEffect(){
        card.style.transition = 'all 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        topStats.style.transform = 'translateZ(0px)';
        img.style.transform = 'translateZ(0px)';
        ability.style.transform = 'translateZ(0px)';
        bottomStats.style.transform = 'translateZ(0px)';
    }

    set3DEffect(e){
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2  + e.pageY / 10) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
}

const pokemonController = new PokemonController();

pokemonController.getPokemon();

pokemonBtn.addEventListener('click', pokemonController.getPokemon);

container.addEventListener('mousemove', e => pokemonController.set3DEffect(e))
container.addEventListener('mouseenter', () => pokemonController.generate3DEffect());
container.addEventListener('mouseleave', () => pokemonController.reset3DEffect());

