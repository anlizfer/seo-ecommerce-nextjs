import Image from 'next/image'
import HeroBanner from '../assets/Images/bg_home_banner.jpeg'
const Hero = () => {
    return (
        <section>
            <Image src={HeroBanner} loading='lazy'  width={1200} height={450}  className="image-hero" alt="Hombre jugado con computadora y con audifonos"/>
        </section>
    )
}

export default Hero 