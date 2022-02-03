import Head from "next/head";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tailwindcss/tailwind.css";
import { Navbar } from "../components/Navbar";
import Hero from "../containers/Hero";
import Link from "next/link";
import profilePicture from "../assets/crop.jpg";
import ProjectCard from "../components/ProjectCard";
import dynamic from "next/dynamic";
const GitHubButton = dynamic(() => import("react-github-btn"), { ssr: false });
import React from "react";

function Home(props) {
  const { data } = props;

  return (
    <>
      <Head>
        <title>Mehul Chauhan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Hero>
        <section>
          <p className="hero_intro text-xl text-intro">Hi, my name is</p>
          <h1>
            <strong className="hero_title text-title text-white font-bold">
              Mehul Chauhan
            </strong>
            <br />
          </h1>
          <p className="hero_teaser text-xl text-teaser text-muli">
            I am a Full Stack Developer, a hobbyist Reader and I love building
            products.
            <br />
            <br />
            I create, design tools and Apps for companies and individuals.
            <br />
            <br />I try to bring ideas to Life with code.
            <br />
          </p>
          <div className="github_btn mt-5">
            <GitHubButton
              href="https://github.com/Mehul208"
              data-color-scheme="no-preference: dark; light: light; dark: light;"
              data-size="large"
              data-show-count="true"
              aria-label="Follow @Mehul208 on GitHub"
            >
              Follow @Mehul208
            </GitHubButton>
          </div>
        </section>
        {/* ------------------Projects --------------------------------------------------- */}
        <section id="projects" className="projects mt-20">
          <h1 className="projects__section_title flex text-white text-4xl font-bold mb-5 items-center ">
            Projects
          </h1>
          <p className="projects__section_description text-xl text-muli text-teaser ">
            I have built plenty of projects and Web Apps including Bots,
            Dashboards etc. mainly with JavaScript.
            <br />
            <br /> Here are some of them.
          </p>
          <div className="projects__container flex flex-col	">
            {data &&
              data.map(
                ({ title, video, description, techstack, github, demo }) => {
                  return (
                    <ProjectCard
                      key={title}
                      title={title}
                      videoURL={video}
                      description={description}
                      techstack={techstack}
                      github={github}
                      demo={demo}
                    />
                  );
                }
              )}
          </div>
        </section>

        {/* --------------------------About Me ------------------------------------------- */}
        <section id="about" className="About_Me mt-20">
          <h1 className="projects__section_title whitespace-nowrap flex text-white text-4xl font-bold sm:mb-20 mb-5 items-center ">
            About Me
          </h1>
          <div className="About_Me__content flex justify-center items-center flex-col md:flex-row		">
            <img
              src={profilePicture}
              className="picture inline-block rounded-full mb-10"
              alt="profile-pic"
            />
            <div className="About_Me__content-text ml-8 text-teaser text-muli text-xl text-base">
              Hello! I'm Mehul Chauhan, a Self-taught Web Developer based in New
              delhi, India with a love and passion for building products using
              the latest web technologies.
              <br />
              <br />I am currently pursuing B.Tech in CSE from Chitkara University, Punjab '23.
              <br />
              <br />
              Here are a few technologies I work with
              <ul className="grid grid-cols-2">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React & Redux</li>
                <li>MongoDB & Mongoose</li>
                <li>Node</li>
                <li>Express</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>
        {/* --------------------------Contact Section ------------------------------------------- */}
        <section id="contact" className="Contact mt-20 mb-20">
          <h1 className="projects__section_title whitespace-nowrap flex text-white text-4xl font-bold mb-5 items-center ">
            Get in Touch
          </h1>
          <div className="contact__content flex w-full sm:ml-10 ml-0	text-teaser text-xl text-muli">
            My inbox is always open whether it's for a potential client,
            <br />
            a recruiter or to simply drop for a chat <br />
            Want me to work on your project or your team ? <br />
          </div>

          <div className="contact__social-btns mt-8 flex sm:ml-10 justify-center  flex-wrap  sm:flex-nowrap sm:flex-row content-center sm:content-start	 flex-col  w-full sm:max-w-xl	 ">
            <Link href="https://www.linkedin.com/in/mc9/">
              <a className="sm:w-1/3 w-full sm:mt-0 inline-block  text-center social-btn hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <FontAwesomeIcon icon={faLinkedin} /> LinkdeIn
              </a>
            </Link>
            <Link href="https://github.com/Mehul208">
              <a className="sm:w-1/3 w-full mt-2 sm:mt-0 social-btn  text-center hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow sm:ml-2">
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </Link>
          </div>
        </section>
        {/* -------------------------Footer-------------------------------------- */}
        <footer>
          <p className="text-white text-tiny text-center mb-10 hero_intro text-intro">
            Made with Nextjs & Tailwindcss By Mehul
          </p>
        </footer>
      </Hero>
    </>
  );
}
export async function getStaticProps() {
  
  const res = await fetch("https://mehul-chauhan.vercel.app/api/projects");

  const data = await res.json();

  return {
    props: {
      data,
      revalidate: 60,
    },
  };
}

export default Home;
