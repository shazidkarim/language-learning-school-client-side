import { Link } from "react-router-dom";


const InstructorData = ({ data }) => {
    const { name, email, image, numClassesTaken, classesTaken } = data;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-8">
            <figure><img className='w-full object-cover h-72' src={image} alt="classimg" /></figure>
            <div className="card-body">
                <h2 className="card-title font-serif">Name: {name}</h2>
                <p className="font-serif">Email: {email}</p>
                <p className="font-serif">Classes Taken: {numClassesTaken}</p>
                <p className="font-serif font-semibold">class name:  {classesTaken}</p>
                <div className="card-actions justify-end">
                    <Link to="/instructors"> <button className="btn btn-primary">see classes</button>  </Link>
                </div>
            </div>
        </div>
    );
};

export default InstructorData;