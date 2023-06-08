import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import InstructorData from "./InstructorData";

const PopularInstractor = () => {
    const [instractor , setInstractor] = useState([]);
    
    useEffect(()=>{
        fetch('instructor.json')
        .then(res=>res.json())
        .then(data=>{
            const sortedInstractor = data.sort((a, b) => b.numStudents - a.numStudents);
            const topInstractor = sortedInstractor.slice(0, 6);
            setInstractor(topInstractor)
        })
            .catch(error => console.error(error));
    },[])
    return (
        <section>
            <SectionTitle heading={'Popular Instractor'}></SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {
                    instractor.map(data=>
                        <InstructorData key={data.instructorId} data={data}></InstructorData>
                        )
                }
            </div>
        </section>
    );
};

export default PopularInstractor;