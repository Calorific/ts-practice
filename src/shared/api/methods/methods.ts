import { Character, Episode, Location } from './types'
import Characters from '../data/characters.json'
import Episodes from '../data/episodes.json'
import Locations from '../data/locations.json'

const delay = (ms: number): Promise<void> => new Promise(r => setTimeout(r, ms))

const fetchCharacters = async (): Promise<Character[]> => {
  await delay(0)
  return Characters
}

const fetchCharacterById = async (id: string): Promise<Character | null> => {
  await delay(0)
  return Characters.find(c => c.id.toString() === id) || null
}

const fetchEpisodes = async (): Promise<Episode[]> => {
  await delay(500)
  return Episodes
}

const fetchLocations = async (): Promise<Location[]> => {
  await delay(500)
  return Locations
}

export const HttpService = {
  fetchCharacters, fetchCharacterById,
  fetchEpisodes,
  fetchLocations
}