import Slider from 'react-slick';
import SectionTitle from "../../../Components/SectionTitle";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  './Testimonials.css';

const Testimonials = () => {
    const testimonialsData = [
    {
        id: 1,
        name: 'Sarah',
        age: 28,
        language: 'Spanish',
        content: "I had always wanted to learn Spanish but felt intimidated by the complexity of the language. Joining the language learning school was the best decision I made! The teachers are fantastic and patient, making the learning process enjoyable. The interactive lessons and engaging activities really helped me grasp the language faster. I'm now confident in my Spanish-speaking abilities, and I can't thank the school enough for this wonderful experience!",
    },
    {
        id: 2,
        name: 'John',
        age: 35,
        language: 'French',
        content: "I had tried learning French through various online resources but never seemed to make significant progress. That changed when I enrolled in the language learning school. The structured curriculum and personalized attention from the instructors made all the difference. The school's emphasis on practical conversational skills was exactly what I needed. Now, I feel comfortable having conversations with native French speakers, and I'm looking forward to visiting France and using my language skills in real-life situations.",
    },
    {
        id: 3,
        name: 'Lina',
        age: 20,
        language: 'Mandarin',
        content: "Studying Mandarin at the language learning school has been an incredibly enriching experience. The teachers are not only highly knowledgeable but also caring and supportive. The school's use of multimedia resources, such as interactive apps and videos, made learning Chinese characters fun and engaging. I appreciated the focus on cultural aspects, which helped me better understand the language's context. Thanks to this school, I've not only gained language proficiency but also a deeper appreciation for Chinese culture.",
    },
]; 

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
        <div className='mt-9'>
         <SectionTitle heading={'TESTIMONIALS'}></SectionTitle>
        </div>
            <div className="py-9 bg-gray-100 bg3">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Students Feedback</h2>
                    <Slider {...settings}>
                        {testimonialsData.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 font-serif">{testimonial.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    <strong>Age:</strong> {testimonial.age} | <strong>Language:</strong>{' '}
                                    {testimonial.language}
                                </p>
                                <p className="text-gray-700 font-serif">{testimonial.content}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            </>
    );
};

export default Testimonials;