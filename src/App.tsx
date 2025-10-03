import "./App.css";
import { useState } from 'react';

import Header from "./components/Header";

import takeOverMeThumb from "./assets/TakeOverMe.jpg";
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
import threeAmVegasThumb from "./assets/3-AM-in-Vegas.jpg";
import blackOpsThumb from "./assets/Black Ops.jpg";
import boxedInThumb from "./assets/Boxed In.jpg";
import tryMeThumb from "./assets/Try Me.jpg";
import bullyThumb from "./assets/Bully.jpg";
import overAndOverThumb from "./assets/Over and Over.jpg";
import notADrillThumb from "./assets/Not a Drill.jpg";

const videos = [
  { title: "Take Over Me", url: "https://www.youtube.com/watch?v=GsMcb9s7a5c", thumbnail: takeOverMeThumb, category: ['2D'] },
  { title: "Gettin Money", url: "https://www.youtube.com/watch?v=CWEgvwp8-bY", thumbnail: gettinMoneyThumb, category: ['2D'] },
  { title: "Mirror", url: "https://www.youtube.com/watch?v=0TWzIGxMDOo", thumbnail: mirrorThumb, category: ['2D'] },
  { title: "Off The Wall", url: "https://www.youtube.com/watch?v=267rmwgXhOM", thumbnail: offTheWallThumb, category: ['2D'] },
  { title: "Mob", url: "https://www.youtube.com/watch?v=bpGRI8oQ5Do", thumbnail: mobThumb, category: ['2D'] },
  { title: "The Code", url: "https://www.youtube.com/watch?v=eAGe5NeF-Ew", thumbnail: theCodeThumb, category: ['2D'] },
  { title: "Risk Takers", url: "https://www.youtube.com/watch?v=YTyBiGGuA2o", thumbnail: riskTakersThumb, category: ['2D'] },
  { title: "Smoking Dope", url: "https://www.youtube.com/watch?v=JvavUcYCTK0", thumbnail: smokingDopeThumb, category: ['2D'] },
  { title: "Cullinan", url: "https://www.youtube.com/watch?v=dkrruNz3YD4", thumbnail: cullinanThumb, category: ['2D'] },
  { title: "Still Serious", url: "https://www.youtube.com/watch?v=ag6uU1w_pKM", thumbnail: stillSeriousThumb, category: ['2D'] },
  { title: "Both Ways", url: "https://www.youtube.com/watch?v=uGbB7hwGgDI", thumbnail: bothWaysThumb, category: ['2D'] },
  { title: "Rich N****s", url: "https://www.youtube.com/watch?v=o349okKZU3E", thumbnail: richThumb, category: ['2D'] },
  { title: "M's and Bankrolls", url: "https://www.youtube.com/watch?v=lJwcANqnG6o", thumbnail: msBankrollsThumb, category: ['2D'] },
  { title: "2 Up", url: "https://www.youtube.com/watch?v=x_FfkWPDlLc", thumbnail: twoUpThumb, category: ['2D'] },
  { title: "Healthy", url: "https://www.youtube.com/watch?v=I-lsqBTpLms", thumbnail: healthyThumb, category: ['2D'] },
  { title: "Come On", url: "https://www.youtube.com/watch?v=WB1V4WWZxAc", thumbnail: comeOnThumb, category: ['2D'] },
  { title: "Bloody Tears", url: "https://www.youtube.com/watch?v=C-xWZO6-t-g", thumbnail: bloodyTearsThumb, category: ['2D'] },
  { title: "Well Connected", url: "https://www.youtube.com/watch?v=GZm_nctXqVQ", thumbnail: wellConnectedThumb, category: ['2D'] },
  { title: "No Love Lost", url: "https://www.youtube.com/watch?v=ryXC0tDPsxM", thumbnail: noLoveLostThumb, category: ['2D'] },
  { title: "Karma", url: "https://www.youtube.com/watch?v=gvtGuXHPLgU", thumbnail: karmaThumb, category: ['2D'] },
  { title: "So Fresh", url: "https://www.youtube.com/watch?v=pWVD3kzMJr4", thumbnail: soFreshThumb, category: ['2D'] },
  { title: "Blessed", url: "https://www.youtube.com/watch?v=CEQgRl3wyP8", thumbnail: blessedThumb, category: ['2D'] },
  { title: "10:39", url: "https://www.youtube.com/watch?v=blKERX5D9RI", thumbnail: tenThirtyNineThumb, category: ['2D'] },
  { title: "Burnt", url: "https://www.youtube.com/watch?v=gUaeD9N8bic", thumbnail: burntThumb, category: ['2D'] },
  { title: "Rich Junkies", url: "https://www.youtube.com/watch?v=R697KepMzmA", thumbnail: richJunkiesThumb, category: ['2D'] },
  { title: "Get Money Good Lawyer", url: "https://www.youtube.com/watch?v=2kcG2pVfLlA", thumbnail: getMoneyLawyerThumb, category: ['2D'] },
  { title: "3 AM in Vegas", url: "https://www.youtube.com/watch?v=RMLQA9xlmOw", thumbnail: threeAmVegasThumb, category: ['2D'] },
  { title: "Black Ops", url: "https://www.youtube.com/watch?v=IoXmFVgQrLw", thumbnail: blackOpsThumb, category: ['2D'] },
  { title: "Boxed In", url: "https://www.youtube.com/watch?v=io2NYye2RN4", thumbnail: boxedInThumb, category: ['2D'] },
  { title: "Try Me", url: "https://www.youtube.com/watch?v=H0EpcypycUM", thumbnail: tryMeThumb, category: ['2D'] },
  { title: "Bully", url: "https://www.youtube.com/watch?v=Y5F8r9nyqk0", thumbnail: bullyThumb, category: ['2D'] },
  { title: "Over and Over", url: "https://www.youtube.com/watch?v=ZlhAl7rB2kg", thumbnail: overAndOverThumb, category: ['2D'] },
  { title: "Not a Drill", url: "https://www.youtube.com/watch?v=PGEga5c3FkY", thumbnail: notADrillThumb, category: ['2D'] },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Everything');

  const filteredVideos =
    selectedCategory === 'Everything'
      ? videos
      : videos.filter(video => video.category.includes(selectedCategory));

  const hasVideos = filteredVideos.length > 0;

  return (
    <div className="portfolio">
      <Header onCategoryChange={setSelectedCategory} />

      {hasVideos ? (
        <div className="video-list">
          {filteredVideos.map((video, idx) => (
            <div className="video-item" key={idx}>
              <a href={video.url}>
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="thumbnail" 
                  loading="lazy"
                />
                <div className="video-info">
                  <h2>{video.title}</h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>Organizing In Progress!...</h2>
          <p>New projects are in the works, Stay tuned!</p>
        </div>
      )}
    </div>
  );
}

export default App;
