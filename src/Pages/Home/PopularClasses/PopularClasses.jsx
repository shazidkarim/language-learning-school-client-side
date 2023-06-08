import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import ClassData from "./ClassData";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                const sortedClasses = data.sort((a, b) => b.numStudents - a.numStudents);
                const topClasses = sortedClasses.slice(0, 6);
                setClasses(topClasses);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <section>
            <SectionTitle heading={'Popular Classes'} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {classes.map(data => (
                    <ClassData key={data.classId} data={data} />
                ))}
            </div>
        </section>
    );
};

export default PopularClasses;
