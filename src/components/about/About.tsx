import NewsLetter from "../home/NewsLetter";
import AboutStory from "./AboutStory";
import AboutValues from "./AboutValues";
import Banner from "./Banner";
import MissionVision from "./MissionVision";

export default function About() {
  return (
    <div>
      <Banner />
      <AboutStory />
      <MissionVision />
      <AboutValues />
      <NewsLetter />
    </div>
  );
}
