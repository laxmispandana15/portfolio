import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from 'react-icons/fi'

export function ContactForm({ data }) {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const { serviceId, templateId, publicKey } = data.emailjs

    if ([serviceId, templateId, publicKey].some((value) => value.startsWith('YOUR_'))) {
      setStatus({
        type: 'error',
        message: 'Add your EmailJS service ID, template ID, and public key in src/data/portfolio.js.',
      })
      return
    }

    try {
      setIsSending(true)
      setStatus({ type: 'loading', message: 'Sending message...' })

      await emailjs.sendForm(serviceId, templateId, form, { publicKey })

      form.reset()
      setStatus({ type: 'success', message: 'Message sent successfully.' })
    } catch {
      setStatus({ type: 'error', message: 'Message could not be sent. Please try email directly.' })
    } finally {
      setIsSending(false)
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
        <input type="hidden" name="to_email" value={data.emailjs.toEmail} />
        <button className="primary-button" type="submit" disabled={isSending}>
          <FiSend /> {isSending ? 'Sending...' : 'Send Message'}
        </button>
        {status.message && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}
      </form>
    </div>
  )
}
