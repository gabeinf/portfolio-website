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
import cullinanThumb from "./assets/Cullinan.jpg";
import stillSeriousThumb from "./assets/Still Serious.jpg";
import bothWaysThumb from "./assets/Both Ways.jpg";
import richThumb from "./assets/Rich N****s.jpg";
import msBankrollsThumb from "./assets/M's and Bankrolls.jpg";
import noLoveLostThumb from "./assets/No Love Lost.jpg";
import karmaThumb from "./assets/Karma.jpg";
import tenThirtyNineThumb from "./assets/1039.jpg";
import richJunkiesThumb from "./assets/Rich Junkies.jpg";
import AZCoffee from "./assets/AZ Coffee.png"

const videos = [
   {
    title: "AZ Coffee (Mock) Motion Graphics Reel",
    url: "https://player.cloudinary.com/embed/?cloud_name=dmc5gad2c&public_id=GabrielSmith_AZCoffee_MotionGraphicsReel_v01_aee5i3&profile=cld-looping",
    thumbnail: AZCoffee, // Replace this with your actual reel thumbnail if you want
    category: ["2D", "Motion Graphics"],
  },
  { title: "Take Over Me", url: "https://www.youtube.com/watch?v=GsMcb9s7a5c", thumbnail: takeOverMeThumb, category: ["2D", "3D"] },
  { title: "Mob", url: "https://www.youtube.com/watch?v=bpGRI8oQ5Do", thumbnail: mobThumb, category: ["2D"] },
  { title: "Both Ways", url: "https://www.youtube.com/watch?v=uGbB7hwGgDI", thumbnail: bothWaysThumb, category: ["2D", "3D"] },
  { title: "Rich N****s", url: "https://www.youtube.com/watch?v=o349okKZU3E", thumbnail: richThumb, category: ["2D", "3D"] },
  { title: "Mirror", url: "https://www.youtube.com/watch?v=0TWzIGxMDOo", thumbnail: mirrorThumb, category: ["2D"] },
  { title: "Still Serious", url: "https://www.youtube.com/watch?v=ag6uU1w_pKM", thumbnail: stillSeriousThumb, category: ["2D"] },
  { title: "Gettin Money", url: "https://www.youtube.com/watch?v=CWEgvwp8-bY", thumbnail: gettinMoneyThumb, category: ["2D"] },
  { title: "Off The Wall", url: "https://www.youtube.com/watch?v=267rmwgXhOM", thumbnail: offTheWallThumb, category: ["2D", "Mixed Media"] },
  { title: "The Code", url: "https://www.youtube.com/watch?v=eAGe5NeF-Ew", thumbnail: theCodeThumb, category: ["2D"] },
  { title: "Risk Takers", url: "https://www.youtube.com/watch?v=YTyBiGGuA2o", thumbnail: riskTakersThumb, category: ["2D"] },
  { title: "Cullinan", url: "https://www.youtube.com/watch?v=dkrruNz3YD4", thumbnail: cullinanThumb, category: ["2D", "Mixed Media"] },
  { title: "M's and Bankrolls", url: "https://www.youtube.com/watch?v=lJwcANqnG6o", thumbnail: msBankrollsThumb, category: ["2D"] },
  { title: "No Love Lost", url: "https://www.youtube.com/watch?v=ryXC0tDPsxM", thumbnail: noLoveLostThumb, category: ["2D"] },
  { title: "Karma", url: "https://www.youtube.com/watch?v=gvtGuXHPLgU", thumbnail: karmaThumb, category: ["2D"] },
  { title: "10:39", url: "https://www.youtube.com/watch?v=blKERX5D9RI", thumbnail: tenThirtyNineThumb, category: ["2D"] },
  { title: "Rich Junkies", url: "https://www.youtube.com/watch?v=R697KepMzmA", thumbnail: richJunkiesThumb, category: ["2D"] },
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
