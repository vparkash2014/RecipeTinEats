import styles from "./Card.module.scss";

const Card = ({ recipeInfo }) => {
    const editInstructions = (instructions) => instructions.length <= 100 ? instructions : instructions.substr(0,100) + "...";
    return (
        <div className={styles.Card__Container}>
            <div className={styles.Card__Category_Container}>
                <a href = {recipeInfo.strSource}>
                    <img className={styles.Card__Category_Img} src={recipeInfo.strMealThumb}/>
                </a>
                <div className={styles.Card__Category}>
                    <a className={styles.Card__Category_Link} href={recipeInfo.strYoutube} >{recipeInfo.strCategory}</a>
                </div>
            </div>
            <div className={styles.Card__Meal}>
                <a className={styles.Card__Meal_Link} href = {recipeInfo.strSource}>
                    <h2 className={styles.Card__Meal_Name} >{recipeInfo.strMeal}</h2>
                </a>
                <p className={styles.Card__Meal_Desc} >{editInstructions(recipeInfo.strInstructions)}</p>
            </div>
        </div>
    )
}

export default Card;