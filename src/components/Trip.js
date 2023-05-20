import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/10.jpg";
import Trip2 from "../assets/11.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Tips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia is a diverse and fascinating country that offers a wealth of cultural and natural attractions for travelers. From the bustling streets of Jakarta to the tranquil beaches of Bali, there is something for everyone in Indonesia. Whether you're looking to immerse yourself in the local culture, explore stunning landscapes, or simply relax and unwind, Indonesia has it all. Visit the ancient temples of Borobudur, hike through the lush rainforests of Sumatra, or snorkel in the crystal-clear waters of Raja Ampat. With its warm hospitality, delicious cuisine, and rich cultural heritage, Indonesia is a destination that should be on every traveler's bucket list. So pack your bags, get ready to discover the wonders of Indonesia, and create memories that will last a lifetime."
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a vibrant and diverse country that offers a unique blend of cultures, traditions, and modernity. From the bustling streets of Kuala Lumpur to the pristine beaches of Langkawi, Malaysia has something for every type of traveler. Explore the colorful heritage buildings and vibrant street art of Georgetown, sample the delicious local cuisine at hawker centers, or take a scenic drive through the lush greenery of the Cameron Highlands. With its stunning natural beauty, rich history, and warm hospitality, Malaysia is a destination that promises to leave a lasting impression. Whether you're seeking adventure or relaxation, Malaysia is the perfect place to experience the best of Southeast Asia. So pack your bags, get ready to embark on an unforgettable journey, and discover all that Malaysia has to offer. "
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="
          France is a country that is steeped in history, culture, and beauty. From the iconic Eiffel Tower in Paris to the charming villages of Provence, France offers visitors a wealth of experiences that are sure to delight and inspire. Stroll through the historic streets of Lyon, sample delicious cheeses and wines in the Loire Valley, or explore the picturesque countryside of Burgundy. Whether you're interested in art, architecture, food, or fashion, France has something for every type of traveler. With its stunning landmarks, world-class museums, and picturesque landscapes, France is a destination that is sure to capture your heart. So pack your bags, get ready to indulge in all things French, and discover the magic and romance of this beautiful country. "
        />
      </div>
    </div>
  );
}

export default Trip;
