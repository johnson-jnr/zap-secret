import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

function HomeLayout() {
    return (
        <>
            <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
                <Navbar />
                <main className="container">
                    <div className="md:py-10">
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>

            <ToastContainer aria-label="Toast container" />
        </>
    );
}

export default HomeLayout;
