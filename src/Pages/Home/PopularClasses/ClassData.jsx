import { Link } from "react-router-dom";


const ClassData = ({ data }) => {
    const {image,className,instructorName,availableSeats,price} = data;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-8">
            <figure><img className='w-full object-cover h-60' src={image} alt="classimg" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>{instructorName}</p>
                <p>{availableSeats}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <Link to={'/classes'}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ClassData;