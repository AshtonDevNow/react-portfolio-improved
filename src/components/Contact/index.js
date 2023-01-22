import Loader from 'react-loaders'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

import './index.scss'

const Contact = () => {
  // const [letterClass] = useState('text-animate')
  // Can't get this effect to work
  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])
  // We can prevent blank screen by putting () after the object to allow multiple hooks.
  // Good to keep in mind we focused on keeping useRef over useEffect to priortise core function.
  const form = useRef()
  // Helps refer to the emailjs service

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_20y02dd',
        'template_oy7pjl5',
        form.current,
        '3xVDtnXovUkDvKJex'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          // avoids reloading the screen
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            // letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>Ashton Lee Bunn</p>
        <p>Living currently between Australia and Canada</p>
        <p>You can fill this form or email later at ashtondevnow@outlook.</p>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>

              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="Send" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Contact
