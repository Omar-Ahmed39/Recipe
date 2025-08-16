import Sidebar from './../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';

export default function Layout() {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="py-4">
                    <Outlet/>
                </div>
            </div>
            <Footer/>

        </>
    )
}
