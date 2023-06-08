

const InstructorsCard = ({ data }) => {
    const { image, name, email, numClassesTaken, classesTaken } = data;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-8">
            <figure><img className='w-full object-cover h-72' src={image} alt="classimg" /></figure>
            <div className="card-body">
                <h2 className="card-title font-serif">Name: {name}</h2>
                <p className="font-serif">Email: {email}</p>
                <p className="font-serif">Classes Taken: {numClassesTaken}</p>
                <p className="font-serif font-semibold">class name:  {classesTaken}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;