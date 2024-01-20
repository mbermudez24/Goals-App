function Link({ children, text, href }) {
    return (
        <a href={href} className="link">
            {children}
            <span>{text}</span>
        </a>
    );
}

export default Link;