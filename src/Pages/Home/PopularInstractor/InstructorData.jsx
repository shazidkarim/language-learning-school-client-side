

const InstructorData = ({data}) => {
    const {name,email,image,numClassesTaken,classesTaken} = data;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-8">
        <figure><img className='w-full object-cover h-72' src={image} alt="classimg" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{email}</p>
            <p>{numClassesTaken}</p>
            <p>{classesTaken}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
    );
};

export default InstructorData;