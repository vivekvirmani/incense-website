import { client } from "../sanityClient"

export const fetchHero = async () => {
  return await client.fetch(`*[_type == "hero"][0]`)
}