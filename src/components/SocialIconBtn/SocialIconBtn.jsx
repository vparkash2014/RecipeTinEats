import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialIconBtn.module.scss';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const SocialIconBtn = ({ link='/', icon = faCoffee, size = "lg"}) => {
    return <a href={link}> 
                <FontAwesomeIcon className={styles.Social__btn} icon={icon} size={size} />
            </a>
};

export default SocialIconBtn;