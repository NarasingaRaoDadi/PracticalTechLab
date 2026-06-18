export default function Contact() {
return ( <section id="contact"> <h2>Get In Touch</h2>
 <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/"
>
  <input type="hidden" name="form-name" value="contact" />

  <p hidden>
    <label>
      Don't fill this out:
      <input name="bot-field" />
    </label>
  </p>

  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label htmlFor="message">Message:</label>
  <textarea
    id="message"
    name="message"
    rows="5"
    required
  />

  <button type="submit">
    Send Message
  </button>
</form>
  <p>
    Interested in legal technology, software development,
    LexStudy, LexPetition, or collaboration opportunities?
  </p>

  <p>
    📧 Email: lexautomation.contact@gmail.com
  </p>

  <p>
    🎥 YouTube: @LexAutomation
  </p>

  <p>
    💼 LinkedIn: Narasinga Rao Dadi
  </p>
</section>

);
}
