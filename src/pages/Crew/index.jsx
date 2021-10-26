import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Heading from "../../components/Heading";
import CrewTabs from "./CrewTabs";
import SectionTitle from "../../components/SectionTitle";
import Paragraph from "../../components/Paragraph";
import ErrorDisplay from "../ErrorDisplay";

const Crew = ({ data }) => {
  const { crew } = data[0];
  const { crewId } = useParams();
  const person = crewId.replace(/-/g, " ");
  const [isError, setIsError] = useState(false);
  const [crewInfo, setCrewInfo] = useState([]);

  useEffect(() => {
    const member = crew.filter(({ name }) => name === person);

    if (member.length === 0) {
      setIsError(true);
      return false;
    }

    setCrewInfo(member[0]);
  }, [crew, person]);

  const Tabs = () =>
    crew.map(({ name }, index) => <CrewTabs name={name} key={index} />);

  const handleNoDataError = () =>
    isError && <ErrorDisplay dataName="Crew member" pageName="crew" />;

  const { name, images: { png } = {}, role, bio } = crewInfo;

  const showContent = () =>
    Object.keys(crewInfo).length > 0 && (
      <>
        <PageHeader title={`${name} | Crew - Space Tourism`}>
          <Heading number="02" size={4}>
            Meet your crew
          </Heading>
        </PageHeader>
        <div className="crew-info">
          <div className="crew-text">
            <div className="wrapper">
              <h2 className="text-is-4 font-is-serif text-grey uppercase mb-4">
                {role}
              </h2>
              <SectionTitle size={3}>{name}</SectionTitle>
              <Paragraph>{bio}</Paragraph>
            </div>
            <div className="crew-tabs">
              <Tabs />
            </div>
          </div>
          <div className="crew-image">
            <img
              src={require(`../../${png}`).default}
              alt={`${role} ${name}`}
            />
          </div>
        </div>
      </>
    );

  return (
    <section className="hero h-screen lg:bg-hero-crew-desktop bg-no-repeat bg-cover pt-52 crew-container">
      {handleNoDataError()}
      {showContent()}
    </section>
  );
};

export default Crew;
