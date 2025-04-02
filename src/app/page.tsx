"use client";

import { cn } from "@/lib/utils";
import { pacifico } from "./fonts/fonts";
import Image from "next/image";
import PhotoGallery from "@/components/PhotoAlbum";
import { Icons } from "@/components/Icons";

import Lenis from "lenis";
import { useEffect } from "react";
import { easeInOut, motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 20 }, // Start slightly below
  visible: (i: number) => ({
    opacity: 1,
    y: 0, // Move into place
    transition: {
      delay: 1.5 + i * 0.3, // 1.5s delay before stagger starts
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  }),
};

const slideUp = {
  hidden: { opacity: 0, y: 20 }, // Start slightly below
  visible: {
    opacity: 1,
    y: 0, // Move into place
    transition: {
      delay: 1.5, // Delay before animation starts
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  },
};

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="absolute pb-12">
      {/* Hero */}
      <section className="h-[100vh] flex flex-col justify-center">
        <div className="ml-16">
          <motion.h1
            className="text-white font-bold text-9xl"
            custom={0} // First element in stagger order
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            Asian Medical Students&apos; Association
          </motion.h1>
          <motion.p
            className="text-white font-semibold mt-6 text-xl"
            custom={1} // Second element in stagger order
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            ~ Universitas Nusa Cendana
          </motion.p>
        </div>
        <motion.p
          className={cn(
            "text-right text-white font-semibold mr-16 mt-12 text-4xl",
            pacifico.className
          )}
          custom={2} // Third element in stagger order
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          “Growth in Unity, Empowering Knowledge in Action”
        </motion.p>
      </section>

      {/* About Us */}
      <section className="mt-16 mx-16">
        <div className="flex w-full flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }} // Custom ease for a more dynamic effect
            className="text-8xl text-white text-center font-bold uppercase"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
            className="text-white text-center mt-6"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            iusto cumque <br /> voluptatibus deserunt ipsa, ea rem nemo laborum
            accusantium ratione.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="mt-12 relative"
        >
          <Image
            src="/amsa-about-us-2.jpg"
            alt="AMSA activites"
            width={1920}
            height={1080}
            className="w-full h-full object-cover rounded-3xl bg-blend-darken"
          />
        </motion.div>
        <div className="text-white mt-12 flex space-x-">
          <div className="w-[40%] flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
              className="text-5xl font-semibold leading-[4rem]"
            >
              They Call It Organization, We Call it Family.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
              className="text-white bg-gradient-to-r shadow-sm from-[#9975e4] to-[#43d3d8] rounded-2xl text-center py-3 w-full mt-6 font-semibold"
            >
              Learn More
            </motion.button>
          </div>
          <div className="w-[60%] flex flex-col space-y-6 pl-12">
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              minus, libero maxime commodi consequatur, est reprehenderit
              adipisci, eligendi et corporis repellendus incidunt minima?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              nesciunt, ducimus deserunt tempora ipsum nostrum eum iste vero.
              Dignissimos et maxime ipsa quos laborum commodi qui aliquid magnam
              debitis earum provident quod quasi dolorem rem pariatur eveniet
              obcaecati molestiae delectus praesentium inventore, recusandae
              porro velit voluptas. Culpa reiciendis commodi nam?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              aspernatur suscipit ratione accusantium officiis hic aperiam
              recusandae, voluptate accusamus porro?
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-48 mt-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="flex"
        >
          <div className="bg-white/30 backdrop-blur-md rounded-tl-2xl rounded-bl-2xl w-full h-[80vh] p-16">
            <h2 className="text-white text-6xl font-bold drop-shadow-md text-center">
              VISION
            </h2>
            <p className="text-white text-justify mt-6 drop-shadow-md ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              commodi harum temporibus tempora ipsa quasi officiis recusandae
              possimus officia sunt neque molestias quod vitae doloribus
              suscipit quas maxime. Unde aspernatur dolor natus error cumque
              iusto cupiditate explicabo accusantium quae vel corporis ex
              architecto nisi ad rem recusandae modi asperiores praesentium,
              neque nulla ducimus. Ullam tenetur porro repudiandae, sequi
              dolorem cum rerum hic voluptas est maxime nam quis accusantium
              doloremque quidem explicabo! Est animi quidem ipsam obcaecati
              perspiciatis laborum deserunt. Rerum?
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-md rounded-tr-2xl rounded-br-2xl w-full h-[80vh] p-16">
            <h2 className="text-[#9975e4] text-6xl font-bold drop-shadow-md text-center">
              MISSION
            </h2>
            <p className="text-[#9975e4] text-justify mt-6 drop-shadow-md ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              commodi harum temporibus tempora ipsa quasi officiis recusandae
              possimus officia sunt neque molestias quod vitae doloribus
              suscipit quas maxime. Unde aspernatur dolor natus error cumque
              iusto cupiditate explicabo accusantium quae vel corporis ex
              architecto nisi ad rem recusandae modi asperiores praesentium,
              neque nulla ducimus. Ullam tenetur porro repudiandae, sequi
              dolorem cum rerum hic voluptas est maxime nam quis accusantium
              doloremque quidem explicabo! Est animi quidem ipsam obcaecati
              perspiciatis laborum deserunt. Rerum?
            </p>
          </div>
        </motion.div>
      </section>

      {/* Organzational Structure */}
      <section className="mx-16 mt-40">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="text-8xl text-white text-center font-bold uppercase"
        >
          Organizational Structure
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="text-white text-center mt-6"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          iusto cumque <br /> voluptatibus deserunt ipsa, ea rem nemo laborum
          accusantium ratione.
        </motion.p>
      </section>

      {/* Events */}
      <section className="mx-16 mt-40">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="text-8xl text-white text-center font-bold uppercase"
        >
          Events
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="text-white text-center mt-6"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          iusto cumque <br /> voluptatibus deserunt ipsa, ea rem nemo laborum
          accusantium ratione.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="grid grid-cols-2 gap-4 w-full mt-12"
        >
          {/* Left: Large section */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg col-span-1 row-span-2 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/amsa-event-1.png"
              alt="AMSA activites"
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-8 left-8 w-[70%]">
              <p className="font-semibold text-white text-5xl">Event #1</p>
              <p className="text-white mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                quam similique perferendis qui, modi ex aut tempora illo
                reprehenderit perspiciatis!
              </p>
            </div>
          </div>

          {/* Right: Top small section */}
          <div className="bg-white/30 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center justify-center relative">
            <Image
              src="/amsa-event-2.png"
              alt="AMSA activites"
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-8 left-8 w-[70%]">
              <p className="font-semibold text-white text-5xl">Event #2</p>
            </div>
          </div>

          {/* Right: Bottom small section */}
          <div className="bg-white/30 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center justify-center relative">
            <Image
              src="/amsa-event-3.png"
              alt="AMSA activites"
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-8 left-8 w-[70%]">
              <p className="font-semibold text-white text-5xl">Event #3</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="mt-40">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="text-8xl text-white text-center font-bold uppercase"
        >
          Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="text-white text-center mt-6 mb-12"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          iusto cumque <br /> voluptatibus deserunt ipsa, ea rem nemo laborum
          accusantium ratione.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }}
        >
          <PhotoGallery />
        </motion.div>
      </section>

      {/* Divisions */}
      <section className="mx-16 mt-40">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="text-8xl text-white text-center font-bold uppercase"
        >
          Divisions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="text-white text-center mt-6"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          iusto cumque <br /> voluptatibus deserunt ipsa, ea rem nemo laborum
          accusantium ratione.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="flex justify-center space-x-6 mt-12"
        >
          <div className="bg-white/30 backdrop-blur-md rounded-3xl w-80 overflow-hidden shadow-md">
            <Image
              src="/amsa-division-4.png"
              alt="amsa division"
              width={1080}
              height={1080}
              className="object-[0px_-60px] object-cover aspect-video w-full"
            />
            <div className="p-4 flex justify-between">
              <p className="text-white font-bold drop-shadow-md">
                Research & Academic
              </p>
              <Icons.compactArrow className="w-6 h-6 text-white drop-shadow-md rotate-180" />
            </div>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-3xl w-80 overflow-hidden shadow-md">
            <Image
              src="/amsa-division-2.png"
              alt="amsa division"
              width={1080}
              height={1080}
              className="object-[0px_-80px] object-cover aspect-video w-full"
            />
            <div className="p-4 flex justify-between">
              <p className="text-white font-bold drop-shadow-md">
                Membership & Development
              </p>
              <Icons.compactArrow className="w-6 h-6 text-white drop-shadow-md rotate-180" />
            </div>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-3xl w-80 overflow-hidden shadow-md">
            <Image
              src="/amsa-division-5.png"
              alt="amsa division"
              width={1080}
              height={1080}
              className="object-[0px_-70px] object-cover aspect-video w-full"
            />
            <div className="p-4 flex justify-between">
              <p className="text-white font-bold drop-shadow-md">
                Community Outreach
              </p>
              <Icons.compactArrow className="w-6 h-6 text-white drop-shadow-md rotate-180" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55] }}
          className="flex justify-center space-x-6 mt-12"
        >
          <div className="bg-white/30 backdrop-blur-md rounded-3xl w-80 overflow-hidden shadow-md">
            <Image
              src="/amsa-division-1.png"
              alt="amsa division"
              width={1080}
              height={1080}
              className="object-[0px_-55px] object-cover aspect-video w-full"
            />
            <div className="p-4 flex justify-between">
              <p className="text-white font-bold drop-shadow-md">
                Publication & Promotion
              </p>
              <Icons.compactArrow className="w-6 h-6 text-white drop-shadow-md rotate-180" />
            </div>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-3xl w-80 overflow-hidden shadow-md">
            <Image
              src="/amsa-division-3.png"
              alt="amsa division"
              width={1080}
              height={1080}
              className="object-[0px_-60px] object-cover aspect-video w-full"
            />
            <div className="p-4 flex justify-between">
              <p className="text-white font-bold drop-shadow-md">
                Finance & Partnership
              </p>
              <Icons.compactArrow className="w-6 h-6 text-white drop-shadow-md rotate-180" />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
