import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import LoaderPage from '../LoaderPage/LoaderPage';

export default function Categories() {

    function getAllCategories() {
        return axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    }

    const { data, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: getAllCategories
    })

    const navigate = useNavigate();


    if (isLoading) {
        return <LoaderPage />
    }


    const category = data.data.meals;

    return (
        <>
            
            <div className="categories mt-10 border-b border-gray-400">
                <div className="hidden md:flex flex-wrap">
                    <NavLink to="/" type="button" className="text-lg text-gray-400 py-1 px-3.5 m-2 rounded-3xl border cursor-pointer hover:bg-white hover:shadow-2xl duration-500" >
                        All
                    </NavLink>
                    {category.map((cate) => (
                        <NavLink key={cate.strCategory} to={`/category/${cate.strCategory}`} type="button" className="inline-block w-fit text-lg text-gray-400 py-1 px-3.5 m-2 rounded-3xl border cursor-pointer hover:bg-white hover:shadow-2xl duration-500" >
                            {cate.strCategory}
                        </NavLink>
                    ))}
                </div>

                <div className="block md:hidden mt-4">
                    <select onChange={(e) => (navigate(`${e.target.value}`))} className="w-full border border-gray-400 rounded-lg p-2 text-gray-700">
                        <option value="/">All</option>
                        {category.map((cate) => (
                            <option key={cate.strCategory} value={`/category/${cate.strCategory}`}>
                                {cate.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


        </>

    )
}
