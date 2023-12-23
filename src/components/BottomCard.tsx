const BottomCard = () => {
  return (
    <div id="bottom-wrap">
      <div className="lower-img">
        <img className="main-img" src="./images/image-about-dark.jpg" alt="" />
      </div>
      <div id="lower-text-container">
        <div id="lower-text">
          <h1>About our furniture</h1>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>
      <div id="lower-img">
        <img className="main-img" src="./images/image-about-light.jpg" alt="" />
      </div>
    </div>
  );
};
export default BottomCard;
