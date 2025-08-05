import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <main className="py-10 text-center">
            <div className="flex flex-col items-center space-y-6">
                <div className="size-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                        />
                        <path
                            stroke="#155dfc"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 9l-2 2m0-2l2 2"
                        />
                    </svg>
                </div>

                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <p className="text-gray-600 text-base">
                    The page you're looking for doesn’t exist or has been
                    removed.
                </p>

                <Link to="/" className="btn btn-outline mt-4">
                    Go back home
                </Link>
            </div>
        </main>
    );
};

export default PageNotFound;
