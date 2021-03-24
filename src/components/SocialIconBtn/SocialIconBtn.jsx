import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialIconBtn.module.scss';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const SocialIconBtn = ({ link='/', icon }) => {
    return <a href={link}> 
                <div className={styles.Social__btn}>
                    <FontAwesomeIcon className={styles.Social__Icon}  icon={icon}  />
                </div>
               
            </a>
};

export default SocialIconBtn;