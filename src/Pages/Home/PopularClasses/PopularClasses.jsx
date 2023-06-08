import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import ClassData from "./ClassData";
import useClasses from "../../../Hooks/useclasses";

const PopularClasses = () => {
    const [classes] = useClasses();
    const sortedClasses = classes.sort((a, b) => b.numStudents - a.numStudents);
    const topClasses = sortedClasses.slice(0, 6);
    return (
        <section>
            <SectionTitle heading={'Popular Classes'} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {topClasses.map(data => (
                    <ClassData key={data.classId} data={data} />
                ))}
            </div>
        </section>
    );
};

export default PopularClasses;
