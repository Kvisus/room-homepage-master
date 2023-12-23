type ButtonProps = {
  increase: () => void;
  decrease: () => void;
  variant: "mobile" | "desktop";
};
const ButtonContainer = ({ increase, decrease, variant }: ButtonProps) => {
  return (
    <div className={`button-container ${variant}`}>
      <div className="btn" onClick={decrease}>
        <img src="./images/icon-angle-left.svg" />
      </div>
      <div className="btn" onClick={increase}>
        <img src="./images/icon-angle-right.svg" />
      </div>
    </div>
  );
};
export default ButtonContainer;
