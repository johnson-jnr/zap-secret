const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between lg:gap-10">
            <div className="max-w-xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
                    Share a secret
                    <br />
                    once. Then it’s gone.
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    Paste your text, pick an expiry window, and get a one-time
                    link. After it’s viewed, it self-destructs.
                </p>
            </div>

            <div className="hidden lg:flex w-80 h-60 relative justify-center items-center rounded-3xl overflow-hidden bg-gradient-to-tr from-purple-300 to-blue-200">
                <div className="hero-pattern absolute inset-0"></div>

                <svg
                    className="absolute top-6 left-10 size-5 text-white/80 anim-sparkle"
                    style={{ animationDelay: '.2s' }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M12 2l1.6 4.3L18 8l-4.4 1.7L12 14l-1.6-4.3L6 8l4.4-1.7L12 2z" />
                </svg>

                <div className="relative z-10 anim-float">
                    <div className="anim-tilt">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-24 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M17 11V7a5 5 0 0 0-10 0v4" />
                            <rect x="5" y="11" width="14" height="10" rx="2" />
                            <path d="M12 17h.01" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
