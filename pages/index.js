import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import philip from "../public/philip.jpeg";
import philip2 from "../public/philip2.jpeg";
import design from "../public/design.jpg";
import code from "../public/code.jpg";
import fullstack from "../public/fullstack.png";
import web1 from "../public/WasteNot.png";
import web2 from "../public/BirdBrain.png";
import web3 from "../public/TradeWizard.png";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Philip Schreiber's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 text-black md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Philip Schreiber Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://docs.google.com/document/d/1NnaCZApj2WpsCi7wgXvVBuiYl5sI9pPAvbG7TsrYvvU/edit?usp=sharing"
                  target='_blank'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2
              className="text-5xl py-2 text-violet-600
            font-medium md:text-6xl"
            >
              Philip Schreiber
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and illustrator.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
              I am a Full Stack Web Developer who has a love of and an eye for
              design. I stand by the principle that design must be unique and
              pique a user's interest. I earned my certificate in Full Stack Web
              Development from the University of Washington to add software
              experience along with my Bachelor of Fine Arts in Illustration. I
              have demonstrated skills in JavaScript, CSS, React,js, responsive
              design.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-violet-600">
            <a href="https://github.com/Sullisters" target='_blank'>
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/philip-schreiber/" target='_blank'>
              <AiFillLinkedin />
            </a>
            <a href="mailto:heatonpschreiber@gmail.com" target='_blank'>
              <AiFillMail />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-violet-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <div className="relative mx-auto bg-gradient-to-b from-violet-500 rounded-full w-72 h-72 mt-4 overflow-hidden md:h-80 md:w-80 md:mt-8">
              <Image
                alt="Philip Schreiber Headshot"
                src={philip2}
                sizes="fill"
                object-fit="cover"
              />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              Since completing the bootcamp, I have continued my studies
              independently to learn more about creating robust APIs, as well as
              using React.js to create a mobile-first website where users
              without coding experience can easily interact with a database. I
              bring these skills to an environment: The ability to ask
              thoughtful questions and continue learning Extensive design
              principles and creative outlook from BFA in Illustration Love of
              teamwork and collaboration Understanding of UX/UI foundations
              Would love an opportunity to continue learning new skills and hone
              existing ones!
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={200} height={200} className="inline" />
              <h3 className="text-lg font-medium pt-8 pb-2">Design work</h3>
              <p className="py-2">
                Creating elegant designs suited to your needs following core
                design theory
              </p>
              <h4 className="py-4 text-violet-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-300">InDesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={200} height={200} className="inline" />
              <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
              <p className="py-2">
                Using modern coding standards to build reactive and responsive
                web applications
              </p>
              <h4 className="py-4 text-violet-600">Front End tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                JavaScript
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-300">React.js</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                Tailwindcss
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Next.js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={fullstack}
                width={200}
                height={100}
                className="inline"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Full Stack</h3>
              <p className="py-2">
                Using modern coding standards to build reactive and responsive
                web applications
              </p>
              <h4 className="py-4 text-violet-600">Back End tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">SQL</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                Custom-built APIs
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl text-center py-1">Portfolio</h3>
            <p className="text-md text-center py-2 leading-8 text-gray-800 dark:text-gray-300">
              Below are some of the projects I have worked on, both personal and
              group collaboration.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a href="https://wastenotkitchentracker.netlify.app" target='_blank'>
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://sullisters.github.io/Trade-Wizard/" target='_blank'>
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://birdbrain2022.herokuapp.com/"
              target='_blank'>
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
