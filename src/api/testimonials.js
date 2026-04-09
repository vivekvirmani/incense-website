import { client } from "../sanityClient"

export const fetchTestimonials = async () => {
  return await client.fetch(`*[_type == "testimonial"]`)
}