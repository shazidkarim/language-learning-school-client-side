import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstractor from "../PopularInstractor/PopularInstractor";
import ExtraSection from "../ExtraSection/ExtraSection";
import UserDetails from "../UserDetails/UserDetails";
import HappyStudents from "../HappyStudents/HappyStudents";
import Testimonials from "../Testimonials/Testimonials";
import ContactUs from "../ContactUs/ContactUs";


const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Language | Home</title>
            </Helmet>
            <Banner></Banner>
            <UserDetails></UserDetails>
            <PopularClasses></PopularClasses>
            <HappyStudents></HappyStudents>
            <PopularInstractor></PopularInstractor>
            <Testimonials></Testimonials>
            <ExtraSection></ExtraSection>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;