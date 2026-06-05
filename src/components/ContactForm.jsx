import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from 'react-icons/fi'

export function ContactForm({ data }) {
  const [status, setStatus] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const { serviceId, templateId, publicKey } = data.emailjs

    if ([serviceId, templateId, publicKey].some((value) => value.startsWith('YOUR_'))) {
      setStatus('Add your EmailJS credentials in src/data/portfolio.js to enable sending.')
      return
    }

    try {
      setStatus('Sending...')
      await emailjs.sendForm(serviceId, templateId, form, { publicKey })
      form.reset()
      setStatus('Message sent successfully.')
    } catch {
      setStatus('Message could not be sent. Please try email directly.')
    }
  }

  return (
    <div className="contact-grid">
      <div className="contact-list">
        <a href={`mailto:${data.contact.email}`}><FiMail /> {data.contact.email}</a>
        <a href={`tel:${data.contact.phone}`}><FiPhone /> {data.contact.phone}</a>
        <a href={data.contact.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
        <a href={data.contact.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
      </div>
      <form className="contact-form glass-card" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="from_name" type="text" required />
        </label>
        <label>
          Email
          <input name="reply_to" type="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <button className="primary-button" type="submit">
          <FiSend /> Send Message
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  )
}
