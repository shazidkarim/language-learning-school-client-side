

const ClassCardDetails = ({data}) => {
    const {image,className,instructorName,availableSeats,price} = data;
    const handleSelectClass =(data)=>{
        console.log(data);
    }

    return (
       <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-8">
            <figure><img className='w-full object-cover h-60' src={image} alt="classimg" /></figure>
            <div className="card-body">
                <h2 className="card-title font-serif">Class Name: {className}</h2>
                <p className="font-serif">Instructor name: {instructorName}</p>
                <p>Avialable seat: {availableSeats}</p>
                <p>Class Price: {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleSelectClass(data)} className="btn btn-primary">Select </button>
                </div>
            </div>
        </div>
    );
};

export default ClassCardDetails;