import { heroes } from "../data/heroes";

export const getHeroByPublisher = ( publisher ) => {

  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if ( !validPublishers.includes(publisher) ){
    throw new Error(`No hemos encontrado resultados de: ${ publisher }`)
  }

  return heroes.filter( hero => hero.publisher === publisher)

}