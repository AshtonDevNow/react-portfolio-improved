import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {
  // Below is when I can get the useState effect to work.  Need to get
  // const [letterClass, setLetterClass] = useState('text-animate')

  // Can't get this effect to work
  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a skilled front-end developer with experience in full stack web
            development. My portfolio includes projects using various languages
            and frameworks such as{' '}
            <b>ReactJS, Ruby on Rails, Javascript, and Wechat Devtools.</b> I
            recently completed the Le Wagon full stack bootcamp and have been
            working as a part-time freelancer for the past year. I am now
            looking to take my skills to the next level by working and learning
            with the best.
          </p>
          <p>
            In my current role as Operations Manager for a logistics company, I
            utilized my tech skills to introduce programs that improved
            efficiency and quality. This included implementing tools to track
            customer freight with accurate ETAs and streamlining the delivery
            paperwork process.
          </p>
          <p>
            I am passionate about technology and staying up-to-date with the
            fast-changing tech industry. With my diverse background as an
            Operations Manager and Language Learning Director at Walt Disney
            Company, I am confident in my ability to adapt to any new vision a
            company may have.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDatabase} color="#Black" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
