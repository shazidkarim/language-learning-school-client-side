import SectionTitle from "../../../Components/SectionTitle";
import InstructorData from "./InstructorData";
import useInstructor from "../../../Hooks/useInstructor";

const PopularInstractor = () => {
    const [instractor] = useInstructor();
    const sortedInstractor = instractor.sort((a, b) => b.numStudents - a.numStudents);
    const topInstractor = sortedInstractor.slice(0, 6);
    return (
        <section>
            <SectionTitle heading={'Popular Instractor'}></SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {
                    topInstractor.map(data=>
                        <InstructorData key={data.instructorId} data={data}></InstructorData>
                        )
                }
            </div>
        </section>
    );
};

export default PopularInstractor;