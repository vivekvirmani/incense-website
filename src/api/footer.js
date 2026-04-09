import { client } from "../sanityClient"

export const fetchFooter = async () => {
  return await client.fetch(`*[_type == "footer"][0]`)
}