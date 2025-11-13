import takeOverMeThumb from "../assets/TakeOverMe.jpg";
import gettinMoneyThumb from "../assets/Gettin Money.jpg";
import mirrorThumb from "../assets/Mirror.jpg";
import offTheWallThumb from "../assets/Off The Wall.jpg";
import mobThumb from "../assets/Mob.jpg";
import theCodeThumb from "../assets/The Code.jpg";
import riskTakersThumb from "../assets/Risk Takers.jpg";
import cullinanThumb from "../assets/Cullinan.jpg";
import stillSeriousThumb from "../assets/Still Serious.jpg";
import bothWaysThumb from "../assets/Both Ways.jpg";
import richThumb from "../assets/Rich N****s.jpg";
import msBankrollsThumb from "../assets/M's and Bankrolls.jpg";
import noLoveLostThumb from "../assets/No Love Lost.jpg";
import karmaThumb from "../assets/Karma.jpg";
import tenThirtyNineThumb from "../assets/1039.jpg";
import richJunkiesThumb from "../assets/Rich Junkies.jpg";
import AZCoffee from "../assets/AZ Coffee.png";
export const videos = [
    {
        title: "AZ Coffee (Mock) Motion Graphics Reel",
        slug: "az-coffee",
        url: "https://player.cloudinary.com/embed/?cloud_name=dmc5gad2c&public_id=GabrielSmith_AZCoffee_MotionGraphicsReel_v01_aee5i3&profile=cld-looping",
        thumbnail: AZCoffee,
        category: ["2D", "Motion Graphics"],
        section: "creative",
    },
    {
        title: "Take Over Me",
        slug: "take-over-me",
        url: "https://www.youtube.com/watch?v=GsMcb9s7a5c",
        thumbnail: takeOverMeThumb,
        category: ["2D", "3D"],
        section: "creative",
    },
    {
        title: "Both Ways",
        slug: "both-ways",
        url: "https://www.youtube.com/watch?v=uGbB7hwGgDI",
        thumbnail: bothWaysThumb,
        category: ["2D", "3D"],
        section: "creative",
    },
    {
        title: "Rich N****s",
        slug: "rich-n",
        url: "https://www.youtube.com/watch?v=o349okKZU3E",
        thumbnail: richThumb,
        category: ["2D", "3D"],
        section: "creative",
    },
    {
        title: "Off The Wall",
        slug: "off-the-wall",
        url: "https://www.youtube.com/watch?v=267rmwgXhOM",
        thumbnail: offTheWallThumb,
        category: ["2D", "Mixed Media"],
        section: "creative",
    },
    {
        title: "Cullinan",
        slug: "cullinan",
        url: "https://www.youtube.com/watch?v=dkrruNz3YD4",
        thumbnail: cullinanThumb,
        category: ["2D", "Mixed Media"],
        section: "creative",
    },
    {
        title: "Mob",
        slug: "mob",
        url: "https://www.youtube.com/watch?v=bpGRI8oQ5Do",
        thumbnail: mobThumb,
        category: ["2D"],
        section: "creative",
    },
    {
        title: "Mirror",
        slug: "mirror",
        url: "https://www.youtube.com/watch?v=0TWzIGxMDOo",
        thumbnail: mirrorThumb,
        category: ["2D"],
        section: "creative",
    },
    {
        title: "Still Serious",
        slug: "still-serious",
        url: "https://www.youtube.com/watch?v=ag6uU1w_pKM",
        thumbnail: stillSeriousThumb,
        category: ["2D"],
        section: "creative",
    },
    {
        title: "Gettin Money",
        slug: "gettin-money",
        url: "https://www.youtube.com/watch?v=CWEgvwp8-bY",
        thumbnail: gettinMoneyThumb,
        category: ["2D"],
        section: "creative",
    },
    {
        title: "The Code",
        slug: "the-code",
        url: "https://www.youtube.com/watch?v=eAGe5NeF-Ew",
        thumbnail: theCodeThumb,
        category: ["2D"],
        section: "creative",
    },
    {
        title: "Risk Takers",
        slug: "risk-takers",
        url: "https://www.youtube.com/watch?v=YTyBiGGuA2o",
        thumbnail: riskTakersThumb,
        category: ["2D"],
        section: "creative",
    },
    {
        title: "M's and Bankrolls",
        slug: "ms-and-bankrolls",
        url: "https://www.youtube.com/watch?v=lJwcANqnG6o",
        thumbnail: msBankrollsThumb,
        category: ["2D"],
        section: "creative",
    },
    {
        title: "No Love Lost",
        slug: "no-love-lost",
        url: "https://www.youtube.com/watch?v=ryXC0tDPsxM",
        thumbnail: noLoveLostThumb,
        category: ["2D"],
        section: "creative",
    },
    {
        title: "Karma",
        slug: "karma",
        url: "https://www.youtube.com/watch?v=gvtGuXHPLgU",
        thumbnail: karmaThumb,
        category: ["2D"],
        section: "creative",
    },
    {
        title: "10:39",
        slug: "1039",
        url: "https://www.youtube.com/watch?v=blKERX5D9RI",
        thumbnail: tenThirtyNineThumb,
        category: ["2D"],
        section: "creative",
    },
    {
        title: "Rich Junkies",
        slug: "rich-junkies",
        url: "https://www.youtube.com/watch?v=R697KepMzmA",
        thumbnail: richJunkiesThumb,
        category: ["2D"],
        section: "creative",
    },
];
export const getTechnicalVideos = () => videos.filter(v => v.section === 'technical');
export const getCreativeVideos = () => videos.filter(v => v.section === 'creative');
export const getVideoBySlug = (slug) => {
    return videos.find(v => v.slug === slug);
};
