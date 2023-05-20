import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular & Vibrant Destinations</h1>
      <p>Tours give you opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano in Batangas is a remarkable natural wonder that offers
        visitors a unique and unforgettable experience. Located just a few
        hours from Manila, this stunning landmark is known for its
        picturesque crater lake and awe-inspiring views. Whether you're
        looking to hike to the top of the volcano, take a boat ride across
        the lake, or simply relax and soak in the breathtaking scenery, Taal
        Volcano is the perfect destination for nature lovers and adventure
        seekers alike. With its rich history, stunning beauty, and exciting
        activities, it's no wonder why Taal Volcano in Batangas is one of
        the most popular tourist attractions in the Philippines."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mt. Daguldul in Batangas is a hidden gem that offers a unique and thrilling adventure for those who seek it. This mountain is perfect for hikers and mountaineers who are looking for a challenging yet rewarding experience. With its lush greenery, stunning waterfalls, and breathtaking views of the ocean, Mt. Daguldul is a must-visit destination for nature lovers. The trail to the summit may be steep and rugged, but the sense of accomplishment and the panoramic vistas at the top are well worth the effort. Whether you're an experienced hiker or a beginner, Mt. Daguldul is a great place to test your limits and enjoy the beauty of the great outdoors. So pack your hiking gear, bring your sense of adventure, and get ready to explore the wonders of Mt. Daguldul in Batangas."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
