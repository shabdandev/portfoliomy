import AboutMe from "./homeSections/AboutMe";
import Contacts from "./homeSections/Contacts";
import Welcome from "./homeSections/Welcome";
import Work from "./homeSections/Work";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Work />
      <Contacts />
    </>
  );
};

export default HomePage;
