import styles from './Banner.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyButton from '../MyButton';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Banner = ({title, text, icon}) => {
    return (
        <>
            <FontAwesomeIcon className={styles.Banner__icon} icon={icon} size='lg' />
            <h3 className={styles.Banner__title}>{title}</h3>
            <p className={styles.Banner__text}>{text}</p>
            <MyButton text="browse recipe" icon={faAngleRight}/>
        </>
    );
};

export default Banner;