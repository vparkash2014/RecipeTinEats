import styles from './SpNavLink.module.scss';

const SpNavLink = ({ title, icon, link }) => {
    return (
        <div>
            <a href={link} className={styles.Link}>
                <img className={styles.Link__Icon} src = {icon}/>
                <p className={styles.Link__Title}>{title}</p>
                <img className={styles.Link__Icon} src = {icon}/>
            </a>
    </div>
    )
}

export default SpNavLink;