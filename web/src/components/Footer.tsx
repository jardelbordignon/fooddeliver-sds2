import { ReactComponent as InstagramIcon } from '../assets/instagram.svg'
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg'
import { ReactComponent as YoutubeIcon } from '../assets/youtube.svg'

export default function Footer() {
  return (
    <footer>
      Jardel Bordignon - Semana DevSuperior 2ª ed.
      <div className='row center top'>
        <a href='https://www.youtube.com/c/DevSuperior' target='_new'>
          <YoutubeIcon />
        </a>
        <a href='https://www.linkedin.com/school/devsuperior/' target='_new'>
          <LinkedInIcon />
        </a>
        <a href='https://www.instagram.com/devsuperior.ig/' target='_new'>
          <InstagramIcon />
        </a>
      </div>
    </footer>
  )
}