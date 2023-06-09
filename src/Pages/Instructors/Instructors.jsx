import InstructorsCard from "./InstructorsCard";
import SectionTitle from "../../Components/SectionTitle";
import { Helmet } from 'react-helmet-async';
import useInstructor from "../../Hooks/useInstructor";



const Instructors = () => {
    const [instractor,loading] = useInstructor();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    return (
        <section>
            <Helmet>
                <title>Language Learning | All Instructors</title>
            </Helmet>
            <SectionTitle heading={'meet our instructors'}></SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {
                    instractor.map(data => <InstructorsCard key={data.instructorId} data={data}></InstructorsCard>)
                }
            </div>
        </section>
    );
};

export default Instructors;