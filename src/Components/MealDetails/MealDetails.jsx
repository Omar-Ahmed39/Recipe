import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import LoaderPage from './../LoaderPage/LoaderPage';

export default function MealDetails() {

    const { idMeal } = useParams();

    function getMealDetails() {

        return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    }

    const { data, isLoading} = useQuery({
        queryKey: ['mealDetails', idMeal],
        queryFn: getMealDetails
    })


    if (isLoading) {
        return <LoaderPage />
    }
        
    const meal = data.data.meals;
    if (meal == null || meal == 'Invalid ID') {
        return <h1 className='text-5xl flex justify-center items-center font-bold h-screen'>Meal NOT FOUND</h1>
    }
    const container = [];

    for (let index = 1; index < 20; index++) {

        if (meal[0][`strIngredient${index}`]) {
            container.push({
                strIngredient: meal[0][`strIngredient${index}`],
                strMeasure: meal[0][`strMeasure${index}`],
                id: index
            })
        }
    }

    return (
        <>
            <h3 className='text-5xl mb-3'>{meal[0].strMeal}</h3>
            <div className="grid  lg:grid-cols-3 gap-4  mb-4">
                <div>
                    <img src={meal[0].strMealThumb} alt={meal[0].strMeal} className='w-full rounded-2xl' />
                    <div className='flex justify-center gap-4 mt-9'>
                        <a href={meal[0].strYoutube} target='_blank' className='block w-fit bg-red-600 rounded-lg text-white font-bold py-2 px-3.5'>
                            <i className="fa-brands fa-youtube" aria-hidden="true"></i> youtube
                        </a>
                        <a href={meal[0].strSource} target='_blank' className='block w-fit bg-green-500 rounded-lg text-white font-bold py-2 px-3.5'>
                            <i className="fa fa-earth" aria-hidden="true"></i> source
                        </a>
                    </div>
                </div>
                <div>
                    <p>{meal[0].strInstructions}</p>
                </div>
                <div className='bg-white  px-5  py-6 h-fit rounded-2xl'>
                    <h2 className='text-2xl pb-2 ps-2 border-gray-300 border-b-4'>Ingredients</h2>
                    {container.map(value => {
                        return <div key={value.id} className='flex  px-2 border-b-2 border-gray-300 last:border-none py-2.5 justify-between'>
                            <p>{value.strIngredient}</p>
                            <p>{value.strMeasure}</p>
                        </div>
                    })}


                </div>
            </div>

        </>

    )
}
