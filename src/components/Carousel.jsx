import "../index.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Caraousel = () => {
    return (
        <>
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
        >
            <div style={{height: "550px", overflow: "hidden"}}>
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Carousel image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        
            </div>
            <div style={{height: "550px", overflow: "hidden"}}>
                <img src="https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg" alt="Carousel image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
            </div>
            <div style={{height: "550px", overflow: "hidden"}}>
                <img src="https://images.unsplash.com/photo-1640885988938-6de6aca6469c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Carousel image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
            </div>
            <div style={{height: "550px", overflow: "hidden"}}>
                <img src="https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Carousel image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
            </div>
        </Carousel>
        </>
    );
};

export default Caraousel;