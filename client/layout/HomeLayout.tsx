import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HomeLayout() {
    return (
        <>
            <Navbar />
            <main className="container min-h-[87vh]">
                <div className="md:py-10">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default HomeLayout;
