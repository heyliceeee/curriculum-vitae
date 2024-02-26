import './footer.css';

function Footer(props) {

    const now = new Date();
    const currentYear = now.getFullYear();

    return (
        <div className='containerFooter'>
            @ {currentYear} - {props.author}
        </div>
    );
}

export default Footer;