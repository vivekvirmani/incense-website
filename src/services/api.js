import axios from "axios"

export const fetchProducts = async () => {
  // Fake API for now (later replace with real backend)
  return [
    {
      id: 1,
      name: "Sandalwood Incense",
      image: "https://images.unsplash.com/photo-1602524817757-5c7e1b3b2d96"
    },
    {
      id: 2,
      name: "Rose Fragrance",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee"
    },
    {
      id: 3,
      name: "Lavender Sticks",
      image: "https://images.unsplash.com/photo-1598514982340-1a2e3d3b1bba"
    }
  ]
}