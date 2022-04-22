import React from 'react'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import HeroCard from '../hero/HeroCard';
// import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';


const SearchScreen = () => {

  const location = useLocation();
  const navigate = useNavigate();

  
//   const parsed = queryString.parse(location.search);
// console.log(parsed);
  // const query = queryString
  // console.log(location)
  // console.log(location.search)

  const [searchText, handleInputChange, reset] = useForm({
    hero: '',
  }); 

  const { hero } = searchText

  const heroesFound = getHeroesByName(hero);

  const handleSearch = (e) => {
    e.preventDefault();
    reset();
    navigate(`?q=${hero}`)
  }

  return (
    <div>
        <h1>Encuentra tu héroe favorito...</h1>
        <hr/>
        <div className='row'>
          <div className='col-5'>
            <h4>Buscar</h4>
            <form onSubmit={handleSearch} className='d-flex gap-2'>
              <input 
                type='text'
                name='hero'
                value={hero}
                placeholder='Escribe el nombre de tu héroe favorito...'
                onChange={handleInputChange}
                className='form-control'
                autoComplete='off'
              />
              <button 
                type='submit' 
                className='btn btn-outline-primary'
              >
                Buscar
              </button>

            </form>
          </div>

          <div className='col-7'>
            {heroesFound.map(hero => (
              <HeroCard 
                key={hero.superhero}
                {...hero}
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default SearchScreen