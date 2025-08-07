const Footer = () => {
    return (
        <footer className="text-center pt-8 pb-4 text-xs text-gray-400">
            Made with&nbsp;<span className="text-[10px]">❤️</span>&nbsp;by
            Johnson Towoju
            <div className="mt-2">
                <span> Copyright &copy; {new Date().getFullYear()} — </span>
                <a
                    href="https://github.com/johnson-jnr/zap-secret"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500 hover:underline transition-colors duration-200"
                >
                    GitHub
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="ml-[2px] inline-block size-[10px]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
