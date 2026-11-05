const Footer = () => {
    return (
        <footer className="site-footer">
            <p>© {new Date().getFullYear()} Maribel Duran</p>
            <a href="https://github.com/maribelduran" target="_blank" rel="noopener noreferrer">
                My GitHub Profile
            </a>
        </footer>

    );
};

export default Footer;