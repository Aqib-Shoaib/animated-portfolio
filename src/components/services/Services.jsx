import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate" this prop animates but doesn't wait for the section to come into viewport so in most of times the animation is already complete before the viewport reaches that section such as in this example--------we can also use useInView hook from framer motion along with useRef
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>What We Do...!</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis aut ratione iste vero temporibus dolorum rem obcaecati
            laboriosam officiis soluta.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis aut ratione iste vero temporibus dolorum rem obcaecati
            laboriosam officiis soluta.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis aut ratione iste vero temporibus dolorum rem obcaecati
            laboriosam officiis soluta.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis aut ratione iste vero temporibus dolorum rem obcaecati
            laboriosam officiis soluta.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
