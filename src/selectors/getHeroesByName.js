import { heroes } from "../data/heroes"

export const getHeroesByName = (name = '') => {

    const heroToFind = name.toLowerCase();

    // if (heroToFind.length <= 1) {
    //     return []
    // }

    const heroesFound = heroes.filter(hero => hero.superhero.toLowerCase().includes(heroToFind));

    return heroesFound;
}