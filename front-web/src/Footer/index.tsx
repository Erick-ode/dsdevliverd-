import './styles.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';

function Footer(){
    return(
        <footer className="main-footer">
        App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
        <div className='footer-icons'>
            <a href='https://www.youtube.com/c/DevSuperior' target='_new'>
                <YouTubeIcon />
            </a>

            <a href='https://www.linkedin.com/in/erick-tau%C3%A3-amaral-de-paula-3b07461a4/' target='_new'>
                <LinkedinIcon />
            </a>

            <a href="https://www.instagram.com/erickk_taua/" target='_new'>
                <InstagramIcon />
            </a>
        </div>
        </footer>
    )
}

export default Footer;