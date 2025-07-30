const HowItWorks = () => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white ring-stone-300 ring rounded-xl p-6">
                <div className="flex justify-center mb-2">
                    <svg
                        className="w-8 h-8 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 5h18v2H3V5zm0 6h12v2H3v-2zm0 6h18v2H3v-2z" />
                    </svg>
                </div>
                <h4 className="font-semibold text-sm">Paste</h4>
                <p className="text-xs text-gray-500">
                    Drop your secret letter -- no account needed.
                </p>
            </div>
            <div className="bg-white ring ring-stone-300 rounded-xl p-6">
                <div className="flex justify-center mb-2">
                    <svg
                        className="w-8 h-8 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2l4 4h-3v4h-2V6H8l4-4zm0 20l-4-4h3v-4h2v4h3l-4 4z" />
                    </svg>
                </div>
                <h4 className="font-semibold text-sm">Encrypt & Send</h4>
                <p className="text-xs text-gray-500">
                    We encrypt it, and give you a one time link
                </p>
            </div>
            <div className="bg-white ring ring-stone-300 rounded-xl p-6">
                <div className="flex justify-center mb-2">
                    <svg
                        className="w-8 h-8 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8H6v11zM16 4l-4-4-4 4h3v4h2V4h3z" />
                    </svg>
                </div>
                <h4 className="font-semibold text-sm">Self-Destruct</h4>
                <p className="text-xs text-gray-500">
                    After it's opened once -- expires, It's gone.
                </p>
            </div>
        </div>
    );
};

export default HowItWorks;
