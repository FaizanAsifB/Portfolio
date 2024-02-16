import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div class="container">
      <h2
        ref={ref}
        style={{
          opacity: isInView ? "1" : "0",
          transform: isInView ? "none" : "translateY(-100px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        // initial={{ opacity: 0, y: -100 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5 }}
        // // viewport={{ once: true }}
        // whileInView={{ opacity: 1 }}
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
        // initial={{ opacity: 0, x: -400 }}
        // animate={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.5 }}
      >
        <div className="w-[400px] h-[400px] ">
          <img
            src="https://plus.unsplash.com/premium_photo-1706896001583-08b5ba33e3be?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <article>
          <p
            className="max-w-[60ch] flex-1"
            style={{
              opacity: isInView ? "1" : "0",
              transform: isInView ? "none" : "translateX(600px)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            // initial={{ opacity: 0, x: 600 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            laudantium quibusdam similique voluptatem. Hic aspernatur similique
            sed excepturi ut dicta quisquam velit tenetur nulla, veniam
            veritatis omnis eveniet. Quibusdam, ea. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Obcaecati laudantium quibusdam
            similique voluptatem. Hic aspernatur similique sed excepturi ut
            dicta quisquam velit tenetur nulla, veniam veritatis omnis eveniet.
            Quibusdam, ea.
          </p>
        </article>
      </div>
    </div>
  );
};
export default AboutContent;
