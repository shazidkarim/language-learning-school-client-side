
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner images/banner 1.webp'
import banner2 from '../../../assets/banner images/banner 2.jpeg'
import banner3 from '../../../assets/banner images/banner 3.png'
import banner4 from '../../../assets/banner images/banner 4.jpg'
import banner5 from '../../../assets/banner images/banner 5.png'

const Banner = () => {
    return (
        <Carousel   autoPlay={true}>
        <div className="w-full h-[600px]">
            <img src={banner1} alt="Banner 1" className="object-cover w-full h-full" />
         
        </div>
        <div className="w-full h-[600px]">
            <img src={banner2} alt="Banner 2" className="object-cover w-full h-full" />
         
        </div>
        <div className="w-full h-[600px]">
            <img src={banner3} alt="Banner 3" className="object-cover w-full h-full" />
        
        </div>
        <div className="w-full h-[600px]">
            <img src={banner4} alt="Banner 4" className="object-cover w-full h-full" />
           
        </div>
        <div className="w-full h-[600px]">
            <img src={banner5} alt="Banner 5" className="object-cover w-full h-full" />
        
        </div>
    </Carousel>
    );
};

export default Banner;