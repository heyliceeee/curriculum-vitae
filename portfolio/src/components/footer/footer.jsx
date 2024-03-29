import './footer.css';
import '../header/header.css';


function Footer(props) {

    const now = new Date();
    const currentYear = now.getFullYear();

    return (
        <div className='containerFooter'>
            <div className="line-container">
                <hr className="horizontal-line" />
            </div>
            @ {currentYear} - {props.author}
        </div>
    );
}

export default Footer;