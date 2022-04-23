import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import HeroCard from '../hero/HeroCard';
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';
// import { heroes } from '../../data/heroes';


const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q: query = ''} = queryString.parse(location.search)

  const [searchText, handleInputChange] = useForm({
    hero: query,
  }); 

  const { hero } = searchText
  const heroesFound = useMemo(()=> getHeroesByName(query), [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${hero}`)
  }

  return (
    <div>
        <h1>Find your hero...</h1>
        <hr/>
        <div className='row'>
          <div className='col-5'>
            <h4>Buscar</h4>
            <hr/>

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
            <h4>Resultados</h4>
            <hr/>
            {query === '' ? <div className='alert alert-info animate__animated animate__fadeIn'>Busca tu heroe</div> : 
              (heroesFound.length === 0 ? 
                <div className='alert alert-danger animate__animated animate__fadeIn'>
                  No hay resultados con el nombre '{query}'
                </div> : heroesFound.map(hero => (
                  <HeroCard
                    key={hero.superhero}
                    {...hero}
                  />
                )))}

          </div>
        </div>
    </div>
  )
}

export default SearchScreen