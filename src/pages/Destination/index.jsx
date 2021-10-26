import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorDisplay from "../ErrorDisplay";
import Heading from "../../components/Heading";
import SectionTitle from "../../components/SectionTitle";
import Paragraph from "../../components/Paragraph";
import PlanetStats from "./PlanetStats";
import PlanetImage from "./PlanetImage";
import PlanetTabs from "./PlanetTabs";
import PageHeader from "../../components/PageHeader";

const Destination = ({ data }) => {
  const { destinations } = data[0];
  const { planetId } = useParams();
  const slug = planetId.replace(/-/g, " ").toUpperCase();
  const [planetData, setPlanetData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const planet = destinations.filter(
      ({ name }) => name.toUpperCase() === slug
    );

    if (planet.length === 0) {
      setIsError(true);
      return false;
    }

    setPlanetData(planet[0]);
  }, [destinations, slug]);

  const handleNoDataError = () =>
    isError && <ErrorDisplay dataName="Planet" pageName="destination" />;

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
        <PageHeader title={`${name} | Destination - SpaceTourism`}>
          <Heading number="01" size={4}>
            Pick your destination
          </Heading>
        </PageHeader>
        <div className="page-container flex justify-center flex-col lg:flex-row pt-5 flex-1 items-start">
          <PlanetImage src={png} />
          <div className="w-2/5 px-9">
            <div className="mb-14 font-is-sans-serif uppercase">
              <PlanetTabs destinations={destinations} />
            </div>
            <SectionTitle size={2}>{name}</SectionTitle>
            <Paragraph>{description}</Paragraph>
            <PlanetStats distance={distance} travelTime={travel} />
          </div>
        </div>
      </>
    );

  return (
    <section className="hero h-screen lg:bg-hero-destination-desktop bg-no-repeat bg-cover pt-52 flex flex-col">
      {handleNoDataError()}
      {showContent()}
    </section>
  );
};

export default Destination;
