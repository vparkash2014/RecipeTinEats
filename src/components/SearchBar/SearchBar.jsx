import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './SearchBar.module.scss';

const SearchBar = ({ placeholder, setSearch }) => {
    return (
        <div className={styles.Search__Container} >
            <input type="text" onChange={(event)=>setSearch(event.target.value)} placeholder={placeholder} className={styles.Search__Input}></input>
            <FontAwesomeIcon icon={faSearch} className={styles.Search__Icon}/>
        </div>

    )
}

export default SearchBar;

