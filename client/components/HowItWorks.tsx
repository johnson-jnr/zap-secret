const HowItWorks = () => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white ring-stone-300 ring rounded-xl p-6">
                <div className="flex justify-center mb-2">
                    <svg
                        className="w-8 h-8 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 5h18v2H3V5zm0 6h12v2H3v-2zm0 6h18v2H3v-2z" />
                    </svg>
                </div>
                <h4 className="font-semibold text-sm">Paste</h4>
                <p className="text-xs text-gray-500 mt-1">
                    Drop your secret text — no account needed.
                </p>
            </div>
            <div className="bg-white ring ring-stone-300 rounded-xl p-6">
                <div className="flex justify-center mb-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8 text-purple-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                    </svg>
                </div>
                <h4 className="font-semibold text-sm">Encrypt & Send</h4>
                <p className="text-xs text-gray-500 mt-1">
                    We encrypt it, and give you a one time link.
                </p>
            </div>
            <div className="bg-white ring ring-stone-300 rounded-xl p-6">
                <div className="flex justify-center mb-2">
                    <svg
                        className="w-8 h-8 text-[#F97316]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M13.5 2.6s.2 2.4-1.8 4.4c-1.3 1.3-1.6 2.2-1.6 3.1 0 1.6 1.2 2.8 2.9 2.8 2.4 0 4.4-2 4.4-4.4 0-3.2-2.4-4.8-3.9-5.9z" />
                        <path d="M12 22c-4.4 0-7-3.2-7-6.3 0-2.5 1.4-4.1 2.8-5.2-.1 2.3 1.5 4.9 4.7 4.9 3 0 5.5-2.3 5.5-5.5.8 1 1.6 2.6 1.6 4.4 0 3.6-2.7 7.7-7.6 7.7z" />
                    </svg>
                </div>
                <h4 className="font-semibold text-sm">Self-Destruct</h4>
                <p className="text-xs text-gray-500 mt-1">
                    After it's opened once — link expires, It's gone.
                </p>
            </div>
        </div>
    );
};

export default HowItWorks;
