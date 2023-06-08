import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";
import SectionTitle from "../../Components/SectionTitle";
import { Helmet } from 'react-helmet-async';



const Instructors = () => {
    const [instractors, setInstractors] = useState([]);

    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => setInstractors(data))
            .catch(error => console.error(error));
    }, [])
    return (
        <section>
            <Helmet>
                <title>Language Learning | All Instructors</title>
            </Helmet>
            <SectionTitle heading={'meet our instructors'}></SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {
                    instractors.map(data => <InstructorsCard key={data.instructorId} data={data}></InstructorsCard>)
                }
            </div>
        </section>
    );
};

export default Instructors;