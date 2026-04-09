import { useState } from "react"
import emailjs from "emailjs-com"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
      "YOUR_SERVICE_ID",
      "template_p7gzyto",
      form,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      alert("Message sent successfully!")
      setForm({ name: "", email: "", message: "" })
    })
    .catch(() => {
      alert("Failed to send message")
    })
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            rows="5"
            required
          />

          <button
            type="submit"
            className="bg-yellow-500 px-6 py-3 rounded-full text-black font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact