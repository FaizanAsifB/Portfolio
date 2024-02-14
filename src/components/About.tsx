import { Button } from "@/components/ui/button.tsx";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // viewport={{ once: true }}
        // whileInView={{ opacity: 1 }}
      >
        About
      </motion.h2>
      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[400px] h-[400px] ">
          <img
            src="https://plus.unsplash.com/premium_photo-1706896001583-08b5ba33e3be?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <article>
          <motion.p
            className="max-w-[60ch] flex-1"
            initial={{ opacity: 0, x: 600 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            laudantium quibusdam similique voluptatem. Hic aspernatur similique
            sed excepturi ut dicta quisquam velit tenetur nulla, veniam
            veritatis omnis eveniet. Quibusdam, ea. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Obcaecati laudantium quibusdam
            similique voluptatem. Hic aspernatur similique sed excepturi ut
            dicta quisquam velit tenetur nulla, veniam veritatis omnis eveniet.
            Quibusdam, ea.
          </motion.p>
        </article>
      </motion.div>
    </div>
  );
};

export default About;
