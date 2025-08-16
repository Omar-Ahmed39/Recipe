import Categories from '../Categories/Categories';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import LoaderPage from '../LoaderPage/LoaderPage';

export default function AllMeals({ apiLink = "https://www.themealdb.com/api/json/v1/1/search.php?s=", category = 'all' }) {


    function getMeals() {
        return axios.get(apiLink);
    }



    const { data, isLoading } = useQuery({
        queryKey: ['getmeals', category],
        queryFn: getMeals
    })




    const meals = data?.data.meals

    return (
        <>

            <h1 className='bg-gradient-to-r from-amber-500 to-red-500 w-fit font-bold  text-transparent bg-clip-text text-4xl'>Learn,Cook,Eat Your Food</h1>
            <Categories />
            {isLoading ? <LoaderPage /> :
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-20 mt-20 mb-4">

                    {meals.map(meal => {
                        return (
                            <div key={meal.idMeal} className="text-center  rounded-3xl  bg-gray-50 p-5 relative hover:scale-105 hover:shadow-xl duration-500 group ">
                                <div className='w-40 h-40 overflow-hidden bg-red-700 rounded-full relative shadow-xl -top-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 group-hover:rotate-360 duration-500'>
                                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                                </div>
                                <h2 className='font-bold text-lg tracking-wider'>{meal.strMeal}</h2>
                                {meal.strArea && <p className='text-green-600'><i className="fa fa-globe" aria-hidden="true"></i> {meal.strArea}</p>}
                                <Link to={`/mealdetails/${meal.idMeal}`} className='block w-fit mx-auto rounded-3xl bg-green-500 text-white font-bold  py-2 px-6.5 mt-4 hover:scale-105 hover:bg-green-700 duration-300' >View Recipe</Link>
                            </div>
                        )
                    })}

                </div>
            }
        </>

    )
}
