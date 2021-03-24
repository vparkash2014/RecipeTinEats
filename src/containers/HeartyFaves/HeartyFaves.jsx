import styles from './HeartyFaves.module.scss';
import Card from '../../components/Card';
import Sticker from '../../components/Sticker';

const HeartyFaves = ({ recipes }) => {
    return (
        <div className={styles.Hearty}>
            <div className={styles.Hearty__Sticker}>
                <Sticker  text="Three Hearty Faves!"/>
            </div>
            <div className={styles.Hearty__Cards}>
                <Card recipeInfo={recipes[0]}/>
                <Card recipeInfo={recipes[1]}/>
                <Card recipeInfo={recipes[2]}/>
            </div>

        </div>
    )
}

export default HeartyFaves;