import styles from './SocialList.module.scss'
import SocialIconBtn from './../SocialIconBtn';
import { faInstagram, faFacebookF, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons';


const SocialList = () => {
    const medias = [faInstagram, faFacebookF, faPinterestP, faYoutube]
    return (
        <div className={styles.SocialList}>
            {medias.map(icon => <SocialIconBtn link='/' icon={icon} size = "2x"/>)}
        </div>
    );
};

export default SocialList;