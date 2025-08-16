import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import MealDetails from './Components/MealDetails/MealDetails';
import AllMeals from './Components/AllMeals/AllMeals';
import MealsByCategory from './Components/AllMeals/MealsByCategory/MealsByCategory';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { path: '', element: <AllMeals /> },
      { path: 'category/:category', element: <MealsByCategory /> },
      { path: 'mealdetails/:idMeal', element: <MealDetails /> },
      { path: '/*', element: <h1 className='text-5xl flex justify-center items-center font-bold h-screen'>404 NOT FOUND</h1> },
    ]
  }
])

const clint = new QueryClient()



function App() {

  return (
    <>


      <QueryClientProvider client={clint}>

        <RouterProvider router={router} />

      </QueryClientProvider>

    </>
  )
}

export default App
