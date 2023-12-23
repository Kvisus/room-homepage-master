const NavLinksContainer = ({ variant }: { variant: "mobile" | "desktop" }) => {
  return (
    <div className={`nav-links-container ${variant}`}>
      <a className="nav-link" href="#">
        home
      </a>
      <a className="nav-link" href="#">
        shop
      </a>
      <a className="nav-link" href="#">
        about
      </a>
      <a className="nav-link" href="#">
        contact
      </a>
    </div>
  );
};
export default NavLinksContainer;
