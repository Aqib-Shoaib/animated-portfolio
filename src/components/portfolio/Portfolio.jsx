import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Project Number 1",
    img: "https://images.pexels.com/photos/17067684/pexels-photo-17067684/free-photo-of-flowers-in-photographic-film.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at nihil vitae facilis iusto officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at nihil vitae facilis iusto officiis! ",
  },
  {
    id: 2,
    title: "Project Number 2",
    img: "https://images.pexels.com/photos/18488381/pexels-photo-18488381/free-photo-of-surfers-walking-on-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at nihil vitae facilis iusto officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at nihil vitae facilis iusto officiis! ",
  },
  {
    id: 3,
    title: "Project Number 3",
    img: "https://images.pexels.com/photos/29346320/pexels-photo-29346320/free-photo-of-picturesque-lighthouse-on-ustica-island-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at nihil vitae facilis iusto officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at nihil vitae facilis iusto officiis! ",
  },
  {
    id: 4,
    title: "Project Number 4",
    img: "https://images.pexels.com/photos/29047306/pexels-photo-29047306/free-photo-of-vintage-street-market-in-nancy-france.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at nihil vitae facilis iusto officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at nihil vitae facilis iusto officiis! ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    dampness: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Portfolio;
