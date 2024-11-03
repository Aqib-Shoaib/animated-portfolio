import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Aqib Shoaib</span>
        <div className="social">
          <a href="">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;