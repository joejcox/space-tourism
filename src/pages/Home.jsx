import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import SectionTitle from "../components/SectionTitle";
import Paragraph from "../components/Paragraph";

const Home = () => (
  <section className="hero bg-hero-desktop bg-no-repeat bg-cover h-screen bg-blue-500 flex justify-center items-end sm:py-32 2xl:py-48">
    <Helmet>
      <title>Space Tourism</title>
    </Helmet>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-8">
      <div className="xl:col-start-2 xl:col-span-2 px-5">
        <Heading highlight>So, you want to travel to</Heading>
        <SectionTitle size={1}>Space</SectionTitle>
        <Paragraph>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Paragraph>
      </div>
      <div className="xl:col-end-8 xl:col-span-2 flex justify-center items-end">
        <Link
          to="/destination"
          className="explore tracking-ls-3 flex font-is-serif text-is-5 justify-center text-dark hover:text-black items-center bg-white hover:bg-highlight w-72 h-72 uppercase rounded-full">
          Explore
        </Link>
      </div>
    </div>
  </section>
);

export default Home;
