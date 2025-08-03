const AboutPage = () => {
    return (
        <div className="space-y-12">
            <section className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    What is SnapSecret?
                </h1>
                <p className="text-gray-600 text-base max-w-2xl mx-auto">
                    SnapSecret lets you share sensitive information with
                    confidence. Just paste your message, set an expiry, and
                    we’ll generate a one-time, self-destructing link that can be
                    shared securely.
                </p>
            </section>

            <section className="grid gap-8 md:grid-cols-2">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full text-blue-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                        </svg>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg text-gray-800">
                            We store only hashes
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Your actual message is never saved. Instead, we
                            store a cryptographic hash — making the original
                            text unreadable and unrecoverable by anyone.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-green-100 rounded-full text-green-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 10h18M6 6h12M4 14h16M5 18h14"
                            />
                        </svg>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg text-gray-800">
                            No third-party sales
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            We don’t sell your data or secrets to advertisers or
                            analytics firms. We believe in privacy as a
                            principle — not a feature.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-yellow-100 rounded-full text-yellow-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                            />
                        </svg>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg text-gray-800">
                            Built with security in mind
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            SnapSecret is designed to minimize exposure and
                            eliminate traceability. From end to end, your
                            message stays secure.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-red-100 rounded-full text-red-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg text-gray-800">
                            We respect your trust
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            We’re committed to safeguarding your privacy — no
                            tracking scripts, no unnecessary logging, and full
                            transparency.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
