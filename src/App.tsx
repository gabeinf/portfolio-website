import "./App.css";

import { motion, type Variants } from "framer-motion";

import takeOverMeThumb from "./assets/Take Over Me.jpg";
import gettinMoneyThumb from "./assets/Gettin Money.jpg";
import mirrorThumb from "./assets/Mirror.jpg";
import offTheWallThumb from "./assets/Off The Wall.jpg";
import mobThumb from "./assets/Mob.jpg";
import theCodeThumb from "./assets/The Code.jpg";
import riskTakersThumb from "./assets/Risk Takers.jpg";
import smokingDopeThumb from "./assets/Smoking Dope.jpg";
import cullinanThumb from "./assets/Cullinan.jpg";
import stillSeriousThumb from "./assets/Still Serious.jpg";
import bothWaysThumb from "./assets/Both Ways.jpg";
import richThumb from "./assets/Rich N****s.jpg";
import msBankrollsThumb from "./assets/M's and Bankrolls.jpg";
import twoUpThumb from "./assets/2 Up.jpg";
import healthyThumb from "./assets/Healthy.jpg";
import comeOnThumb from "./assets/Come On.jpg";
import bloodyTearsThumb from "./assets/Bloody Tears.jpg";
import wellConnectedThumb from "./assets/Well Connected.jpg";
import noLoveLostThumb from "./assets/No Love Lost.jpg";
import karmaThumb from "./assets/Karma.jpg";
import soFreshThumb from "./assets/So Fresh.jpg";
import blessedThumb from "./assets/Blessed.jpg";
import tenThirtyNineThumb from "./assets/1039.jpg";
import burntThumb from "./assets/burnt.jpg";
import richJunkiesThumb from "./assets/Rich Junkies.jpg";
import getMoneyLawyerThumb from "./assets/Get Money Good Lawyer.jpg";
import threeAmVegasThumb from "./assets/3 AM in Vegas.jpg";
import blackOpsThumb from "./assets/Black Ops.jpg";
import boxedInThumb from "./assets/Boxed In.jpg";
import tryMeThumb from "./assets/Try Me.jpg";
import bullyThumb from "./assets/Bully.jpg";
import overAndOverThumb from "./assets/Over and Over.jpg";
import notADrillThumb from "./assets/Not a Drill.jpg";
import Header from "./components/Header";


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
};



const videos = [
  { title: "Take Over Me", url: "https://www.youtube.com/watch?v=GsMcb9s7a5c", thumbnail: takeOverMeThumb },
  { title: "Gettin Money", url: "https://www.youtube.com/watch?v=CWEgvwp8-bY", thumbnail: gettinMoneyThumb },
  { title: "Mirror", url: "https://www.youtube.com/watch?v=0TWzIGxMDOo", thumbnail: mirrorThumb },
  { title: "Off The Wall", url: "https://www.youtube.com/watch?v=267rmwgXhOM", thumbnail: offTheWallThumb },
  { title: "Mob", url: "https://www.youtube.com/watch?v=bpGRI8oQ5Do", thumbnail: mobThumb },
  { title: "The Code", url: "https://www.youtube.com/watch?v=eAGe5NeF-Ew", thumbnail: theCodeThumb },
  { title: "Risk Takers", url: "https://www.youtube.com/watch?v=YTyBiGGuA2o", thumbnail: riskTakersThumb },
  { title: "Smoking Dope", url: "https://www.youtube.com/watch?v=JvavUcYCTK0", thumbnail: smokingDopeThumb },
  { title: "Cullinan", url: "https://www.youtube.com/watch?v=dkrruNz3YD4", thumbnail: cullinanThumb },
  { title: "Still Serious", url: "https://www.youtube.com/watch?v=ag6uU1w_pKM", thumbnail: stillSeriousThumb },
  { title: "Both Ways", url: "https://www.youtube.com/watch?v=uGbB7hwGgDI", thumbnail: bothWaysThumb },
  { title: "Rich N****s", url: "https://www.youtube.com/watch?v=o349okKZU3E", thumbnail: richThumb },
  { title: "M's and Bankrolls", url: "https://www.youtube.com/watch?v=lJwcANqnG6o", thumbnail: msBankrollsThumb },
  { title: "2 Up", url: "https://www.youtube.com/watch?v=x_FfkWPDlLc", thumbnail: twoUpThumb },
  { title: "Healthy", url: "https://www.youtube.com/watch?v=I-lsqBTpLms", thumbnail: healthyThumb },
  { title: "Come On", url: "https://www.youtube.com/watch?v=WB1V4WWZxAc", thumbnail: comeOnThumb },
  { title: "Bloody Tears", url: "https://www.youtube.com/watch?v=C-xWZO6-t-g", thumbnail: bloodyTearsThumb },
  { title: "Well Connected", url: "https://www.youtube.com/watch?v=GZm_nctXqVQ", thumbnail: wellConnectedThumb },
  { title: "No Love Lost", url: "https://www.youtube.com/watch?v=ryXC0tDPsxM", thumbnail: noLoveLostThumb },
  { title: "Karma", url: "https://www.youtube.com/watch?v=gvtGuXHPLgU", thumbnail: karmaThumb },
  { title: "So Fresh", url: "https://www.youtube.com/watch?v=pWVD3kzMJr4", thumbnail: soFreshThumb },
  { title: "Blessed", url: "https://www.youtube.com/watch?v=CEQgRl3wyP8", thumbnail: blessedThumb },
  { title: "10:39", url: "https://www.youtube.com/watch?v=blKERX5D9RI", thumbnail: tenThirtyNineThumb },
  { title: "Burnt", url: "https://www.youtube.com/watch?v=gUaeD9N8bic", thumbnail: burntThumb },
  { title: "Rich Junkies", url: "https://www.youtube.com/watch?v=R697KepMzmA", thumbnail: richJunkiesThumb },
  { title: "Get Money Good Lawyer", url: "https://www.youtube.com/watch?v=2kcG2pVfLlA", thumbnail: getMoneyLawyerThumb },
  { title: "3 AM in Vegas", url: "https://www.youtube.com/watch?v=RMLQA9xlmOw", thumbnail: threeAmVegasThumb },
  { title: "Black Ops", url: "https://www.youtube.com/watch?v=IoXmFVgQrLw", thumbnail: blackOpsThumb },
  { title: "Boxed In", url: "https://www.youtube.com/watch?v=io2NYye2RN4", thumbnail: boxedInThumb },
  { title: "Try Me", url: "https://www.youtube.com/watch?v=H0EpcypycUM", thumbnail: tryMeThumb },
  { title: "Bully", url: "https://www.youtube.com/watch?v=Y5F8r9nyqk0", thumbnail: bullyThumb },
  { title: "Over and Over", url: "https://www.youtube.com/watch?v=ZlhAl7rB2kg", thumbnail: overAndOverThumb },
  { title: "Not a Drill", url: "https://www.youtube.com/watch?v=PGEga5c3FkY", thumbnail: notADrillThumb },
];

function App() {


  return (
    <div className="portfolio">
      <Header />

      <div className="video-list">
        {videos.map((video, idx) => (
         <motion.a
            key={idx}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="video-info">
              <h2>{video.title}</h2>
            </div>
            <img src={video.thumbnail} alt={video.title} className="thumbnail" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
export default App;
