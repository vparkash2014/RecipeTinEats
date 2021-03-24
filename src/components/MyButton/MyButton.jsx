import styles from "./MyButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';

const MyButton = ({ text, icon }) => {

    return (
        <>
        {icon 
            ? <Button className={styles.MyBtn}> 
                {text} <FontAwesomeIcon icon={icon} size='lg' />
            </Button>
            : <Button className={styles.MyBtn}>{text}</Button>
        }
        </>
    );
};

export default MyButton;