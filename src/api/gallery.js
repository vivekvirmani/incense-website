import { client } from "../sanityClient"

export const fetchGallery = async () => {
  return await client.fetch(`*[_type == "gallery"][0]`)
}