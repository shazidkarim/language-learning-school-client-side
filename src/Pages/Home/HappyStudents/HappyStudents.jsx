import SectionTitle from "../../../Components/SectionTitle";
import bgimg from '../../../../src/assets/bg-img1.jpg';
import john from '../../../../src/assets/john.jpg';
import medonnan from '../../../../src/assets/medonna.jpg';
import sarah from '../../../../src/assets/sarah.jpg';
import './HappyStudents.css'
const HappyStudents = () => {
    return (
        <>
           <div> 
            <SectionTitle heading={'OUR TOP STUDENTS'}></SectionTitle>
            </div>
           <div className="bg-two items-center justify-center mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:p-32">
           <div className="card w-96 bg-red-50 border-4">
                <figure className="px-10 pt-10">
                    <img src={medonnan} alt="Shoes" className="w-36 h-36 rounded-full" />
                </figure>
                <div className="card-body items-center justify-center text-center">
                    <h2 className="card-title font-serif">MEDONNA(32)</h2>
                    <h5 className="text-xl font-serif">Student</h5>
                    <p className="font-serif">I had always wanted to learn Spanish but felt intimidated by the complexity of the language. Joining the language learning school was the best decision I made! The teachers are fantastic and patient, making the learning process enjoyable.</p>
                </div>
            </div>
           <div className="card w-96 bg-red-50 borde-4">
                <figure className="px-10 pt-10">
                    <img src={john} alt="Shoes" className="w-36 h-36 rounded-full" />
                </figure>
                <div className="card-body items-center justify-center text-center">
                    <h2 className="card-title font-serif">SARAH(28)</h2>
                    <h5 className="text-xl font-serif">Student</h5>
                    <p className="font-serif">I had tried learning French through various online resources but never seemed to make significant progress. That changed when I enrolled in the language learning school. The structured curriculum and personalized attention from the instructors made all the difference.</p>
                </div>
            </div>
           <div className="card w-96 bg-red-50 border-4">
                <figure className="px-10 pt-10">
                    <img src={sarah} alt="Shoes" className="w-36 h-36 rounded-full" />
                </figure>
                <div className="card-body items-center justify-center text-center">
                    <h2 className="card-title font-serif">JOHN(26)</h2>
                    <h5 className="text-xl font-serif">Student</h5>
                    <p className="font-serif">Studying Mandarin at the language learning school has been an incredibly enriching experience. The teachers are not only highly knowledgeable but also caring and supportive. The School use of multimedia resources, such as interactive apps and videos, made learning Chinese characters fun and engaging. </p>
                </div>
            </div>
           </div>
        </>
    );
};

export default HappyStudents;