import BlackNavBar from "../../components/BlackNavBar/BlackNavBar";
import Footer from "../../components/Footer/Footer";
import BasePage from "../../components/BasePage/BasePage";
import BgVideo from "../../components/BgVideo/BgVideo";
import Section from "../../components/Section/Section";
import { OriginalsCards } from "../../components/OriginalsCards/OriginalsCards";

const Originals = () => {
  return (
    <BasePage>
      <BlackNavBar />
      <BgVideo alt={"Video EA Originals"} />
      <Section backgroundColor={"#242424"}>
        <OriginalsCards/>
      </Section>
      <Footer />
    </BasePage>
  );
};

export default Originals;
