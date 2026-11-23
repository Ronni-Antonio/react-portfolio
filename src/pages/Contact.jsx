import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHeadset } from '@fortawesome/free-solid-svg-icons'
import ShapeGrid from '../components/ShapeGrid'

function Contact() {
  const contactRef = useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const subject = form.get('subject') || `Portfolio message from ${name}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${form.get('phone') || 'Not provided'}`,
      '',
      form.get('message'),
    ].join('\n')

    window.location.href = `mailto:rhoanneantonio1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section ref={contactRef} id="Contact" className="home-hero contact-section">
      <div className="home-glow home-glow-one" aria-hidden="true" />
      <div className="home-glow home-glow-two" aria-hidden="true" />
      <div className="contact-grid-background" aria-hidden="true">
        <ShapeGrid
          shape="square"
          squareSize={80}
          speed={0.55}
          borderColor="rgba(167, 139, 250, 0.18)"
          hoverFillColor="#6d5dfc"
          hoverTrailAmount={6}
          interactionTargetRef={contactRef}
        />
      </div>

      <div className="contact-content">
        <div className="contact-heading">
          <p className="home-eyebrow">HAVE A QUESTION OR AN IDEA?</p>
          <h2><FontAwesomeIcon icon={faHeadset} aria-hidden="true" /> Let’s talk</h2>
          <p>Tell me a little about what you’re working on. I’d love to hear from you.</p>
        </div>

        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <h3>Send a message</h3>
              <p>Fill in the details and your email app will open with the message ready to send.</p>
            </div>

            <div className="contact-fields">
              <label>
                <span>Your name</span>
                <input autoComplete="name" type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                <span>Email address</span>
                <input autoComplete="email" type="email" name="email" placeholder="Your email address" required />
              </label>
              <label className="contact-subject-field">
                <span>Subject</span>
                <input type="text" name="subject" placeholder="Subject" required />
              </label>
              <label className="contact-message-field">
                <span>Message</span>
                <textarea name="message" rows="4" placeholder="Write your message here…" required />
              </label>
            </div>

            <button className="contact-submit" type="submit">
              Send message <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
