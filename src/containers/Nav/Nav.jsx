import NavBarBig from './../../components/NavBarBig';
import NavBarSmall from './../../components/NavBarSmall';

const Nav = ( {placeholder, setSearch} ) => {
    return(
        <>
            <NavBarBig placeholder={placeholder} setSearch={setSearch}/>
            <NavBarSmall />
        </>
    );
};

export default Nav;