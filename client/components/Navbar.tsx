import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="container py-6 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    S
                </div>
                <span className="font-semibold text-lg">SnapSecret</span>
            </Link>
            <nav className="space-x-6 text-sm font-medium text-gray-600">
                <Link to="/" className="hover:text-black">
                    Home
                </Link>
                <Link to="/about" className="hover:text-black">
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
