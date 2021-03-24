import styles from './Sticker.module.scss';

const Sticker = ({text}) => {
    return(
        <div className={styles.Sticker__Container}>
            <h4 className={styles.Sticker__Text}>{text}</h4>
        </div>
    )
}

export default Sticker;