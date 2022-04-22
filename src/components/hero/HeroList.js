import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';
// import HeroScreen from './HeroScreen';

const HeroList = ({ publisher }) => {

   const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {heroes.map(hero => (
                <HeroCard key={hero.id} 
                        {...hero}
                />
            ))}
    </div>

  )
}

export default HeroList