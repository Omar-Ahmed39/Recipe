import { Link } from 'react-router-dom'
import img from '../../assets/Images/assignment-sass.vercel.app_.png'

export default function Sidebar() {

    return (
        <nav>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  ">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
                    <Link to={'/'}><img src={img} className="w-full mb-5" alt="Flowbite Logo" /></Link>
                    
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/" className="flex items-center p-2 text-white font-bold bg-amber-500 rounded-2xl mb-5 text-lg border-1 ps-5 border-amber-500 shadow-xl shadow-amber-500/25 hover:shadow-none hover:scale-105 duration-300 group">
                                <i className="fa fa-cutlery" aria-hidden="true"></i>

                                <span className="ms-4 ">Meals</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-2xl mb-5 text-lg border-1 ps-5 border-gray-300  hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25 duration-300 group">
                                <i className="fa fa-cutlery" aria-hidden="true"></i>
                                <span className=" ms-4  ">Ingredients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-2xl mb-5 text-lg border-1 ps-5 border-gray-300  hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25 duration-300 group">
                                <i className="fa fa-cutlery" aria-hidden="true"></i>
                                <span className=" ms-4  ">Area</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </nav>
    )
}
