

const SectionTitle = ({heading}) => {
    return (
        <div className="md: w-4/12 my-8 text-center mx-auto">
            <h2 className="text-4xl font-serif uppercase italic border-y-4 py-8">{heading}</h2>
        </div>
    );
};

export default SectionTitle;