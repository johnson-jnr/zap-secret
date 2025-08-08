import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewSecretPage = () => {
    const [decryptedValue, setDecryptedValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const decryptSecret = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/secret/${id}`);
                const data = await response.json();
                if (data.error) {
                    setErrorMessage(data.message);
                } else if (data.success) {
                    setDecryptedValue(data.text);
                }
            } catch (error) {
                console.error('Error decrypting secret: ', error);
            } finally {
                setIsLoading(false);
            }
        };
        decryptSecret();
    }, []);

    const handleCopy = () => {
        if (!decryptedValue) return;
        navigator.clipboard.writeText(decryptedValue);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <>
            <title> View secret | ZapSecret </title>
            <div className="max-w-2xl mx-auto py-16 text-center">
                <div className="border border-gray-200 rounded-xl bg-white">
                    {isLoading ? (
                        <div className="md:min-w-[640px] min-h-72 md:min-h-[482px] flex items-center justify-center">
                            <span className="loading loading-infinity text-primary w-20 md:mb-10"></span>
                        </div>
                    ) : (
                        <div className="px-6 py-10 sm:px-10 sm:py-12">
                            {decryptedValue ? (
                                <div>
                                    <div className="flex justify-center mb-4">
                                        <div className="size-14 text-blue-600 rounded-full flex items-center justify-center">
                                            <svg
                                                fill="currentColor"
                                                className="size-full"
                                                viewBox="0 0 1920 1920"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M960 0c170.654 0 339.05 46.08 487.115 133.158l-57.26 97.355C1259.067 153.6 1110.437 112.94 960 112.94c-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-150.55-40.659-299.181-117.572-429.967l97.242-57.148C1873.92 620.95 1920 789.345 1920 960c0 529.355-430.645 960-960 960S0 1489.355 0 960 430.645 0 960 0Zm0 338.824v112.94c-280.207 0-508.235 228.029-508.235 508.236S679.793 1468.235 960 1468.235 1468.235 1240.207 1468.235 960h112.941c0 342.55-278.738 621.176-621.176 621.176-342.438 0-621.176-278.625-621.176-621.176 0-342.55 278.738-621.176 621.176-621.176Zm0 338.823v112.941c-93.402 0-169.412 76.01-169.412 169.412s76.01 169.412 169.412 169.412 169.412-76.01 169.412-169.412h112.94c0 155.633-126.606 282.353-282.352 282.353-155.746 0-282.353-126.72-282.353-282.353S804.254 677.647 960 677.647Zm863.413-661.18 79.962 79.85-581.23 581.33h259.031v112.941h-451.764V338.824h112.94v258.905l581.06-581.262Z"
                                                    fill-rule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <h1 className="text-2xl font-semibold text-gray-800">
                                        Secret revealed
                                    </h1>
                                    <p className="text-sm text-gray-500 mt-2">
                                        This is a one-time secret. View it
                                        carefully.
                                    </p>

                                    <div className="relative my-8">
                                        <pre className="bg-gray-100 border border-gray-300 rounded-lg text-left p-4 font-mono text-sm text-gray-800 break-words overflow-x-auto">
                                            {decryptedValue}
                                        </pre>

                                        <div className="relative bg-white sm:bg-gray-100 z-50 w-fit ml-auto flex justify-end sm:absolute sm:top-1 sm:right-1">
                                            <button
                                                onClick={() => handleCopy()}
                                                className="p-1 text-gray-400 hover:text-gray-700 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 12h6m2 6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m4 0h2a2 2 0 0 1 2 2v10z"
                                                    />
                                                </svg>
                                            </button>
                                            {copied && (
                                                <div className="z-40 left-1/2 -translate-x-1/2 -translate-y-full -top-0.5 absolute text-xs bg-neutral-600 py-1 px-2 rounded-sm text-white transition-opacity duration-300">
                                                    Copied
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="mb-4 text-red-500">
                                    <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center">
                                        <svg
                                            className="size-full"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    fill="none"
                                                    d="M0 0h24v24H0z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="py-5 text-xl">
                                        {errorMessage ??
                                            'An Error Occured. Please try again.'}
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-center gap-4 flex-wrap">
                                <Link
                                    to="/"
                                    className="btn btn-outline btn-sm sm:btn-md"
                                >
                                    Create your own secret
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ViewSecretPage;
