import { useState } from 'react';
import HeroInfo from './HeroInfo';
import heroesList from '../shared/heroeslist';

const Content = () => {
  const [listOfHeroes, setListOfHeroes] = useState(heroesList); 
  const [favoriteHeroes, setFavoriteHeroes] = useState([1, 5, 6]);

  const generateRandomFavorites = () => {
    let randomFavorites = [];
    
    while (randomFavorites.length < 3) {
      let randomNum = Math.floor(Math.random() * heroesList.length) + 1;
      
      if (!randomFavorites.includes(randomNum)) {
        randomFavorites.push(randomNum);
      }
    }
    
    setFavoriteHeroes(randomFavorites);
  };

  return (
    <div className="content">
      <button onClick={generateRandomFavorites}>Mudar Favoritos</button>
      <div className="heroes-grid">
        {listOfHeroes
          .filter(hero => favoriteHeroes.includes(hero.id))
          .map((hero) => (
            <div className="hero-card" key={hero.id}>
              <HeroInfo
                image={hero.image}
                name={hero.name}
                superPower={hero.super_power}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Content;
