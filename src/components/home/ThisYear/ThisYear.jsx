import Lottie from "lottie-react";
// import thisYear from "./ThisYear.json";
// import thisYear2 from "./thisYear2.json";
import thisYear3 from "./thisYear3.json";

const ThisYear = () => {
  return (
    <div className="bg-[#4831d4] h-fit py-10" id="thisYear">
      <div className="lg:flex items-center lg:ms-40 ms-16">
        <div className="lg:w-[40%]">
          <h2 className="lg:text-6xl text-[#ccf381] text-4xl font-[900] mb-5">
            Over This <br /> Year,{" "}
          </h2>
          <div className="text-white space-y-5 lg:text-xl text-sm lg:w-3/4 me-4">
            <p>
              I've built products for companies and businesses around the globe ranging from marketing
              websites to complex solutions and enterprise apps with focus on fast, elegant and accessible
              user experiences.
            </p>
            <p>
              Currently, I work at Shopify as a Senior Frontend Engineer crafting thoughtful and inclusive
              experiences that adhere to web standards for over 3 million merchants across the world.
            </p>
            <p>
              Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools
              and services tailored towards automated VAT compliance for multi-channel sellers in Europe.
            </p>
            <p>
              Prior to hellotax, I was Senior frontend engineering consultant with Pixel2HTML, building
              JavaScript applications and interfaces for orgs and individuals.
            </p>
            <p>
              I once also led the frontend team at Conectar, an e-learning startup through building multiple
              React applications into a single robust learning platform.
            </p>
          </div>
        </div>
        <div className="lg:w-[60%] w-[70%] mt-10">
          <div
            className="lg:w-3/4 w-full "
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {" "}
            <Lottie animationData={thisYear3} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisYear;
