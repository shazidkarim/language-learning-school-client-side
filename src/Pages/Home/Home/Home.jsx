import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstractor from "../PopularInstractor/PopularInstractor";
import ExtraSection from "../ExtraSection/ExtraSection";


const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Language | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstractor></PopularInstractor>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;