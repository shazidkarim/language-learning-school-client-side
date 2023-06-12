import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ClassData = ({ data }) => {
  const { image, className, instructorName, availableSeats, price } = data;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-8"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <figure>
        <img className="w-full object-cover h-60" src={image} alt="classimg" />
      </figure>
      <div className="card-body">
        <motion.h2 className="card-title font-serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Name of class: {className}
        </motion.h2>
        <motion.p className="font-serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Instructor name: {instructorName}
        </motion.p>
        <motion.p className="font-serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Available Seats: {availableSeats}
        </motion.p>
        <motion.p className="font-serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Class Price: $ {price}
        </motion.p>
        <div className="card-actions justify-end">
          <Link to="/classes">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Buy Now
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassData;
