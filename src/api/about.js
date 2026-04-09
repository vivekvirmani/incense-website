import { client } from "../sanityClient"

export const fetchAbout = async () => {
  return await client.fetch(`*[_type == "about"][0]`)
}