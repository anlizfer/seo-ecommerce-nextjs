import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/Images/logo.png'
const Footer = () => {
    return (
        <footer className="footer-dark">
            <div className="container">

                <div className="row">

                    <div className="col-md-4">
                        <Link style={{color:"#fff"}} href='../terms-of-use'>Terms of use</Link>                        
                    </div>

                    <div className="col-md-4 text-center">
                        <Image  src={Logo}  className="logo mb-3"alt='Logo Amazing tshirt 4U' />
                        <p>Welcome to our gaming and programming apparel store! We are passionate about creating high-quality t-shirts that reflect your love for gaming and coding. Our mission is to provide you with comfortable and stylish clothing that enhances your unique style. Thank you for choosing us and happy shopping! 🎮💻👕</p>
                    </div>

                    <div className="col-md-4">

                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer