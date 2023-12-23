// import Nav from "./Nav";

import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
// import ArrowIcon from "../../public/images/icon-arrow.svg";

const topDataArray = [
  {
    src: "./images/desktop-image-hero-1.jpg",
    alt: "first",
    title: "Discover innovative ways to decorate",
    description: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    src: "./images/desktop-image-hero-2.jpg",
    alt: "second",
    title: "We are available all across the globe",
    description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    src: "./images/desktop-image-hero-3.jpg",
    alt: "third",
    title: "Manufactured with the best materials",
    description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
  },
];
const UpperCard = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const handleNextCard = () => {
    setCardIndex((prev) => (prev + 1 === topDataArray.length ? 0 : prev + 1));
  };
  const handlePrevCard = () => {
    setCardIndex((prev) => (prev - 1 < 0 ? topDataArray.length - 1 : prev - 1));
  };
  return (
    <div id="upper-wrap">
      {/* <Nav /> */}
      <div id="upper-img">
        <img
          className="main-img"
          src={topDataArray[cardIndex].src}
          alt={topDataArray[cardIndex].alt}
        />
        <ButtonContainer
          increase={handleNextCard}
          decrease={handlePrevCard}
          variant="mobile"
        />
      </div>
      <div id="upper-text-container">
        <div id="upper-text">
          <h1>{topDataArray[cardIndex].title}</h1>
          <p>{topDataArray[cardIndex].description}</p>
          <button id="shop-button">
            Shop now{" "}
            <svg
              id="arrow"
              width="40"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#a1a1a1"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <ButtonContainer
            increase={handleNextCard}
            decrease={handlePrevCard}
            variant="desktop"
          />
        </div>
      </div>
    </div>
  );
};
export default UpperCard;
