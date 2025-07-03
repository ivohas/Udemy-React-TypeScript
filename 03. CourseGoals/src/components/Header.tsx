interface ImageProps {
    src: string;
    alt: string;
}

interface HeaderProps {
    image: ImageProps;
    children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
    return (
        <header>
            <img src={props.image.src} alt={props.image.alt} />
            {props.children}
        </header>
    );
}

export default Header;