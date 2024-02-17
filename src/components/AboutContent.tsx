import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container">
      <h2
        ref={ref}
        style={{
          opacity: isInView ? "1" : "0",
          transform: isInView ? "none" : "translateY(-100px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        // whileInView={{ opacity: 1 }}
        // initial={{ opacity: 0, y: -100 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5 }}
        // // viewport={{ once: true }}
      >
        About
      </h2>
      <div
        className="flex gap-6"
        style={{
          opacity: isInView ? "1" : "0",
          transform: isInView ? "none" : "translateX(-400px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="w-[400px] h-[400px] ">
          <img
            src="https://plus.unsplash.com/premium_photo-1706896001583-08b5ba33e3be?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <article
          className="max-w-[60ch] flex-1 text-lg tracking-wider"
          style={{
            opacity: isInView ? "1" : "0",
            transform: isInView ? "none" : "translateX(600px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <p>
            Hey there! I'm Faizan Asif, a self-taught web developer with a
            passion for solving problems and creating immersive digital
            experiences. Although my journey in web development is just
            beginning,
          </p>
          <p>
            During my decade-long career in supply chain management, forecasting
            and logistics planning, I found immense fulfillment in tackling
            intricate problems head-on and devising effective solutions to
            address them. Therefore I always knew that programming was my true
            calling , and in August 2023, I took the leap to pursue my life long
            dream of becoming a programmer. Since then, I've been on a
            relentless quest to expand my skills and explore the endless
            possibilities in the digital world.
          </p>
          <p>
            When I'm not immersed in lines of code, I love spending time with my
            incredible wife, whose unwavering support has made this journey
            possible, and our son. Whether we're exploring new places, enjoying
            outdoor adventures, or simply sharing laughter at home, every moment
            is precious. I also enjoy playing video game and board games.
          </p>
          <p>
            I'm excited to combine my love for learning new technologies with my
            passion for solving problems and continue to grow both personally
            and professionally. Let's collaborate and embark on this journey
            together!
          </p>
        </article>
      </div>
    </div>
  );
};
export default AboutContent;
