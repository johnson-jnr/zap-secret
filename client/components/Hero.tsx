const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between lg:gap-10">
            <div className="max-w-xl">
                <h1 className="text-4xl font-bold text-black leading-tight">
                    Share a secret
                    <br />
                    once. Then it’s gone.
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    Paste your text, pick an expiry window, and get a one-time
                    link. After it’s viewed, it self-destructs.
                </p>
            </div>
            <div className="hidden lg:flex w-80 h-60 justify-center items-center bg-gradient-to-tr from-purple-300 to-blue-200 rounded-3xl">
                <svg
                    className="size-24 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                    <circle cx="21" cy="3" r="1.5" fill="#4f46e5" />
                    <circle cx="22" cy="6" r="1.5" fill="#4f46e5" />
                    <circle cx="20" cy="8" r="1.5" fill="#4f46e5" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
