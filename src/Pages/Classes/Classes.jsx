import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import ClassCardDetails from "./ClassCardDetails";
import { Helmet } from "react-helmet-async";


const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
            .catch(error => console.error(error));
    }, []);
    return (
        <section>
            <Helmet>
                <title>Language | All Classes</title>
            </Helmet>
            <SectionTitle heading={'see our all Classes'} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {classes.map(data => (
                  <ClassCardDetails key={data.classId} data={data}></ClassCardDetails>
                ))}
            </div>
        </section>
    );
};

export default Classes;