import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './NavLink.module.scss';



const NavLink = ({ menu, title, link, icon }) => {

    return (
        <div>
            {icon 
                ?<a href={link} className={styles.Link}>
                    <FontAwesomeIcon className={styles.Link__Icon} icon={icon}/>
                    <p className={styles.Link__Title}>{title}</p>
                </a>
                :<a href={link} className={styles.Link}>
                    <p className={styles.Link__Title}>{title}</p>
                </a>
            }
        </div>
    )
}

export default NavLink;