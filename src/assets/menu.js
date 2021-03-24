import { faHeart } from '@fortawesome/free-solid-svg-icons';

const navMenu = [
    {
        title: "my recipetin",
        icon: faHeart,
        dropdown: false,
        dropdownTitles: [],
        special: false,
    },
    {
        title: "recipes",
        icon: false,
        dropdown: false,
        dropdownTitles: [],
        special: false,
    },
    {
        title: "by category",
        icon: false,
        dropdown: true,
        dropdownTitles: ["Mains", "Soups", "One Pot", "Slow Cooker", "Slides", "Pasta", "Sweet", "Cuisine", "Dietary", "Other Categories"],
        special: false,
    },
    {
        title: "iconic dishes",
        icon: false,
        dropdown: false,
        dropdownTitles: [],
        special: true,
    },
    {
        title: "collections",
        icon: false,
        dropdown: false,
        dropdownTitles: [],
        special: false,
    },
    {
        title: "about",
        icon: false,
        dropdown: true,
        dropdownTitles: ["Me", "Free Recipe Books", "Contact", "eBooks", "Food Bloggers Central", "Nitty Gritty"],
        special: false,
    }
];

export default navMenu;
