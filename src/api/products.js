import { client } from "../sanityClient"

export const fetchProducts = async () => {
  return await client.fetch(`*[_type == "product"]`)
}