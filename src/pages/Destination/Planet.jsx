import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ErrorDisplay from "../ErrorDisplay";
import Heading from "../../components/Heading";
import SectionTitle from "../../components/SectionTitle";
import Paragraph from "../../components/Paragraph";
import PlanetStats from "./PlanetStats";

const Planet = ({ data }) => {
  const { destinations } = data[0];
  const { planetId } = useParams();
  const slug = planetId.replace(/-/g, " ").toUpperCase();
  const [planetData, setPlanetData] = useState([]);

  useEffect(() => {
    const planet = destinations.filter(
      ({ name }) => name.toUpperCase() === slug
    );

    if (planet.length === 0) {
      return false;
    }

    setPlanetData(planet[0]);
  }, [destinations, slug]);

  const handleNoDataError = () => planetData.length === 0 && <ErrorDisplay />;

  const showTabs = () => {
    return destinations.map(({ name }) => (
      <NavLink className="text-white nav-tabs" to={`./${name.toLowerCase()}`}>
        {name}
      </NavLink>
    ));
  };

  const {
    name,
    description,
    images: { png } = {},
    distance,
    travel,
  } = planetData;

  const showContent = () =>
    Object.keys(planetData).length > 0 && (
      <>
        <header className="page-container">
          <Heading number="01" size={4}>
            Pick your destination
          </Heading>
        </header>
        <div className="page-container flex justify-center pt-5">
          <div className="w-3/5 flex justify-center pt-2">
            <img src={require(`../../${png}`).default} alt="The moon" />
          </div>
          <div className="w-2/5 px-9">
            <div className="mb-14 font-is-sans-serif uppercase">
              {showTabs()}
            </div>
            <SectionTitle size={2}>{name}</SectionTitle>
            <Paragraph>{description}</Paragraph>
            <PlanetStats distance={distance} travelTime={travel} />
          </div>
        </div>
      </>
    );

  return (
    <section className="hero h-screen lg:bg-hero-destination-desktop bg-no-repeat bg-cover pt-52">
      {handleNoDataError()}
      {showContent()}
    </section>
  );
};

export default Planet;
