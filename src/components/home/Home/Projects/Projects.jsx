import { motion } from "framer-motion";
import por1 from "./Screenshot1.png";
import por2 from "./Screenshot2.png";
import por3 from "./Screenshot3.png";
import por4 from "./Screenshot4.png";
import por5 from "./Screenshot5.png";
import por6 from "./Screenshot6.png";
import por7 from "./Screenshot7.png";
import por8 from "./Screenshot8.png";
import por9 from "./Screenshot9.png";
import por10 from "./Screenshot10.png";
import por11 from "./Screenshot11.png";
import por0 from "./Screenshot0.png";
import "./projects.css";

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-[#4831d4] to-[#ccf381]" id="projects">
      <div className="p-10 lg:grid grid-cols-3 gap-10 lg:mx-40">
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a target="_blank" rel="noopener noreferrer" href="https://tempo-tunes-4d7ee.web.app/">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por1} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_1" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes1</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button className="btn btn-outline text-white my-3" onClick={() => window.my_modal_1.showModal()}>
              View Details
            </button>
          </div>
        </div>
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://robiul1hossen.github.io/Finix-Tamplate/"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por0} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_12" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes3</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button
              className="btn btn-outline text-white my-3"
              onClick={() => window.my_modal_12.showModal()}
            >
              View Details
            </button>
          </div>
        </div>
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a target="_blank" rel="noopener noreferrer" href="https://toy-car-fe9df.web.app/">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por2} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_2" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes2</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button className="btn btn-outline text-white my-3" onClick={() => window.my_modal_2.showModal()}>
              View Details
            </button>
          </div>
        </div>
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a target="_blank" rel="noopener noreferrer" href="https://foodify-b2980.web.app/">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por3} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_3" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes3</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button className="btn btn-outline text-white my-3" onClick={() => window.my_modal_3.showModal()}>
              View Details
            </button>
          </div>
        </div>
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a target="_blank" rel="noopener noreferrer" href="https://tempo-tunes-4d7ee.web.app/">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por4} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_4" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes1</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button className="btn btn-outline text-white my-3" onClick={() => window.my_modal_4.showModal()}>
              View Details
            </button>
          </div>
        </div>
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a target="_blank" rel="noopener noreferrer" href="https://prismatic-tartufo-23c8d7.netlify.app/">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por5} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_5" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes2</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button className="btn btn-outline text-white my-3" onClick={() => window.my_modal_5.showModal()}>
              View Details
            </button>
          </div>
        </div>
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a target="_blank" rel="noopener noreferrer" href="https://tempo-tunes-4d7ee.web.app/">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por6} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_6" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes3</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button className="btn btn-outline text-white my-3" onClick={() => window.my_modal_6.showModal()}>
              View Details
            </button>
          </div>
        </div>
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a target="_blank" rel="noopener noreferrer" href="https://tempo-tunes-4d7ee.web.app/">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por7} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_7" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes1</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button className="btn btn-outline text-white my-3" onClick={() => window.my_modal_7.showModal()}>
              View Details
            </button>
          </div>
        </div>
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a target="_blank" rel="noopener noreferrer" href="https://tempo-tunes-4d7ee.web.app/">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por8} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_8" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes2</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button className="btn btn-outline text-white my-3" onClick={() => window.my_modal_8.showModal()}>
              View Details
            </button>
          </div>
        </div>
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a target="_blank" rel="noopener noreferrer" href="https://tempo-tunes-4d7ee.web.app/">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por9} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_9" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes3</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button className="btn btn-outline text-white my-3" onClick={() => window.my_modal_9.showModal()}>
              View Details
            </button>
          </div>
        </div>
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a target="_blank" rel="noopener noreferrer" href="https://tempo-tunes-4d7ee.web.app/">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por10} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_10" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes1</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button
              className="btn btn-outline text-white my-3"
              onClick={() => window.my_modal_10.showModal()}
            >
              View Details
            </button>
          </div>
        </div>
        <div className="card text-white bg-transparent shadow-2xl">
          <figure>
            <a target="_blank" rel="noopener noreferrer" href="https://tempo-tunes-4d7ee.web.app/">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img className="custom-card-img" data-aos="flip-left" src={por11} alt="Shoes" />
              </motion.div>
            </a>
          </figure>
          <div className="card-body custom-card-body">
            <dialog id="my_modal_11" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className="card-title">Project Name : Tempo Tunes2</h2>
                <p>It is i full stack project based on MERN</p>
                <ul>
                  <li>1. React(For UI)</li>
                  <li>2. Firebase(For Authentication)</li>
                  <li>3. Stripe(For Payment System)</li>
                  <li>4. Node.js(backend)</li>
                  <li>5. Express.js(For Backend)</li>
                  <li>6. Mongodb(For Database)</li>
                </ul>
              </form>
            </dialog>
            <button
              className="btn btn-outline text-white my-3"
              onClick={() => window.my_modal_11.showModal()}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
