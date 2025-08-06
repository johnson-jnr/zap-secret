import { useState } from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyTrust from '../components/WhyTrust';
import { toast } from 'react-toastify';

const Home = () => {
    const [secret, setSecret] = useState<string>('');
    const [expiryHour, setExpiryHour] = useState<null | number | string>(null);
    const [encryptionId, setEncryptionId] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const encryptSecret = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);

            const response = await fetch('/api/secret', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    secret,
                    expiryHour: getExpiryHour(),
                }),
            });

            const data = await response.json();
            if (data.success) {
                setEncryptionId(data.id);
                toast.success('Secret encrypted successfully.', {
                    autoClose: 1500,
                });
            } else {
                toast.error(
                    'An error occured encrypting secret. Please try again.',
                    {
                        autoClose: false,
                    },
                );
            }
        } catch (error) {
            console.error('An error occured: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    const getExpiryHourClass = (hour: number) => {
        return `max-w-26 md:w-26 border px-4 rounded-md h-10 ${expiryHour === hour ? 'bg-gray-500 text-white' : 'border-stone-300 hover:bg-gray-100'}`;
    };

    const setExpiry = (hour: number) => {
        if (hour === expiryHour) {
            setExpiryHour(null);
        } else {
            setExpiryHour(hour);
        }
    };

    const handleCopy = () => {
        if (!encryptionId) return;
        navigator.clipboard.writeText(getSecretLink()!);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    const getExpiryHour = () => Number(expiryHour) || 1;
    const getSecretLink = () =>
        encryptionId ? `http://localhost:5173/s/${encryptionId}` : null;

    return (
        <div>
            <Hero />
            <section className="mt-12 lg:mt-20 ring rounded-xl max-w-xl mx-auto overflow-hidden">
                {encryptionId ? (
                    <div>
                        <div className="bg-green-600 text-white font-medium text-center py-2">
                            Link generated
                        </div>
                        <div className="bg-white px-6 py-8 text-center space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Your one-time link
                            </h2>
                            <div className="line-clamp-1">Secret: {secret}</div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2">
                                <div className="bg-gray-50 border rounded px-3 py-2 text-sm font-mono text-gray-800 wrap-anywhere">
                                    {getSecretLink()}
                                </div>
                                <div className="relative">
                                    <button
                                        onClick={handleCopy}
                                        className="btn btn-outline btn-sm flex gap-1 items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-4 stroke-current"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12h6m2 6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m4 0h2a2 2 0 0 1 2 2v10z"
                                            />
                                        </svg>
                                        Copy
                                    </button>
                                    {copied && (
                                        <div className="z-40 absolute top-1/2 -translate-y-1/2 translate-x-full left-7 md:translate-y-0 md:-top-full md:left-1/2 md:-translate-x-1/2 text-xs bg-neutral-600 py-1 px-2 rounded-sm text-white transition-opacity duration-300">
                                            Copied
                                        </div>
                                    )}
                                </div>
                            </div>

                            <p className="text-sm text-gray-500">
                                This link will burn after it’s opened once or
                                after {getExpiryHour()} hour
                                {getExpiryHour() > 1 && 's'}, whichever comes
                                first.
                            </p>

                            <div className="flex justify-center gap-4 mt-4 flex-wrap">
                                <button
                                    onClick={() => {
                                        setEncryptionId(null);
                                        setSecret('');
                                    }}
                                    className="btn btn-outline"
                                >
                                    Create another secret
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <form className="p-8" onSubmit={encryptSecret}>
                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Encrypt a secret
                        </h2>
                        <textarea
                            name="secret"
                            maxLength={2048}
                            className="border border-stone-300 py-2 px-3 rounded-md min-h-12 w-full focus:border-violet-300 focus:outline-none"
                            data-testid="secret-input"
                            rows={4}
                            required
                            placeholder="Secret to encrypt (e.g. password, token, short note)"
                            value={secret}
                            onChange={(e) => setSecret(e.target.value)}
                        ></textarea>
                        <p className="text-xs text-gray-500">
                            Max 2048 characters
                        </p>

                        <div className="mt-4 flex items-center mb-2 text-sm font-medium text-gray-600">
                            <span>Expiry period</span>
                            <div
                                className="expiry-tooltip tooltip tooltip-top md:tooltip-right p-1"
                                data-tip="Defaults to 1 hour if no expiry period is selected."
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="text-xs mb-3 text-gray-500">
                            Choose how long the link should live
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {[1, 6, 24].map((n) => (
                                <button
                                    type="button"
                                    key={n}
                                    onClick={() => setExpiry(n)}
                                    className={getExpiryHourClass(n)}
                                >
                                    {n} hour{n > 1 && 's'}
                                </button>
                            ))}
                        </div>
                        <button
                            type="submit"
                            data-testid="submit-btn"
                            className="input-border text-white bg-violet-400 hover:bg-violet-500  transition-colors duration-200 w-full mt-6"
                        >
                            {isLoading ? (
                                <span className="loading loading-spinner text-base-100"></span>
                            ) : (
                                'Generate Secret Link'
                            )}
                        </button>
                    </form>
                )}
            </section>

            <section className="mt-20 text-center">
                <h3 className="text-xl font-semibold mb-6">How it works:</h3>
                <HowItWorks />
            </section>

            <section className="mt-20 text-center">
                <h3 className="text-xl font-semibold mb-4">Why trust it?</h3>
                <WhyTrust />
            </section>
        </div>
    );
};

export default Home;
