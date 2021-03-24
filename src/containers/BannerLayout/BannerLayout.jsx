import styles from './BannerLayout.module.scss';
import Banner from '../../components/Banner';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const BannerLayout = () => {
    return (
        <div className={styles.BannerLayout}>
            <Banner title="quick dinner recipes" text="you can make tonight!" icon={faUtensils}/>
        </div>
    )
}

export default BannerLayout;