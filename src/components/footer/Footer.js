import './Footer.css'
import { AiFillYoutube, AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className='footer-wrap'>
            <div className='footer-div'>
                <div className='footer-icons'>
                    <AiFillYoutube color='white' size={30}/>
                    <AiFillFacebook color='#9994A3' size={25}/>
                    <AiFillLinkedin color='#9994A3' size={25}/>
                    <AiFillInstagram color='#9994A3' size={25}/>
                    <AiFillTwitterSquare color='#9994A3' size={25}/>
                </div>
                <div className='footer-terms'>
                    <Link to='/terms'>Terms of services</Link>
                    <Link to='/terms'>Privacy policy</Link>
                </div>
                <p>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;