import ProgressBar from "@ramonak/react-progress-bar";
import SectionTitle from "../../../Components/SectionTitle";

const ExtraSection = () => {
  return (
    <div className=" bg-gray-100 m-8">
      <SectionTitle heading={"Inspire"}></SectionTitle>
      <div className="text-center">
        <h2 className="text-5xl font-sans">--- Language School ---</h2>
        <p className="text-2xl font-sans mt-5">Work with us. Learn with us. Improve with us.</p>
      </div>
      <div>
        <div>
          <p className="text-center font-sans text-2xl italic">To help get you started on some high-quality, easily accessible resources, We can provide the top Instructor over the world</p>
        <p className="text-2xl font-sans my-5">Top 5 language that most people want to learn:-</p>
        </div>
        <div>
            <h1 className='ms-3 text-blue-500'>1. ENGLISH</h1>
                <ProgressBar completed={90} />
            <h1 className='ms-3 text-blue-500'>1. CHAINESE</h1>
                <ProgressBar completed={82} />
            <h1 className='ms-3 text-blue-500'>1. ESPANOL</h1>
                <ProgressBar completed={78} />
            <h1 className='ms-3 text-blue-500'>1. LATIN</h1>
                <ProgressBar completed={72} />
            <h1 className='ms-3 text-blue-500'>1. ARABIC</h1>
                <ProgressBar completed={60} />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
