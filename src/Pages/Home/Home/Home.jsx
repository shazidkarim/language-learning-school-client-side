import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstractor from "../PopularInstractor/PopularInstractor";
import { useState } from "react";


const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const themeClass = isDarkMode ? 'dark' : 'light';
    return (
        <div className={`home ${themeClass}`}>
            <Helmet>
                <title>Language | Home</title>
            </Helmet>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstractor></PopularInstractor>
        </div>
    );
};

export default Home;