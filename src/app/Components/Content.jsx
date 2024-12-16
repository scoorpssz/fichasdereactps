import HeroInfo from './HeroInfo';
import heroesList from '../shared/heroeslist';
const Content = () =>{
    const topHeroes = heroesList.slice(0, 3);
    return (
        <div className="content">
        
        <HeroInfo 
          key={heroesList[0].id}
          imagem={heroesList[0].image} 
          nome={heroesList[0].name} 
          superPower={heroesList[0].super_power} 
        />
        <HeroInfo 
          key={heroesList[1].id}
          imagem={heroesList[1].image} 
          nome={heroesList[1].name} 
          superPower={heroesList[1].super_power} 
        />
        <HeroInfo 
          key={heroesList[2].id}
          imagem={heroesList[2].image} 
          nome={heroesList[2].name} 
          superPower={heroesList[2].super_power} 
        />
      </div>
    );
  }

export default Content;