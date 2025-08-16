import AllMeals from '../AllMeals'
import { useParams } from 'react-router-dom'

export default function MealsByCategory() {

    const obj = useParams()
    return (
        <>
            <AllMeals apiLink={`https://www.themealdb.com/api/json/v1/1/filter.php?c=${obj.category}`} category={obj.category} />
        </>
    )
}
