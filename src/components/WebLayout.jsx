import './WebLayout.css';

export const WebLayout = () => {
  return (
    <>
      <div className="WebLayout">
        <div className="WebLayout-header">
          <div className="WebLayout-window">
            <img src="Postman.svg" alt="" />
            Acit
          </div>

          <img src="Plus.svg" alt="" className="Plus" />
          <span className="WebLayout-icons-nav WebLayout-color-1"></span>
          <span className="WebLayout-icons-nav WebLayout-color-2"></span>
          <span className="WebLayout-icons-nav WebLayout-color-3"></span>
        </div>

        <div className="WebLayout-search-bar">
          <img src="Arrow.svg" alt="" className="Arrow-Left" />
          <img src="Arrow.svg" alt="" className="Arrow-Right" />
          <img src="Refresh.svg" alt="" className="Refresh" />

          <a
            href="https://acit-frontend.vercel.app/"
            target="_blank"
            className="Search-bar"
          >
            acit-frontend.app
          </a>
          <a
            href="https://acit-frontend.vercel.app/"
            target="_blank"
            className="ToWeb"
          >
            <img src="ArrowToWeb.svg" alt="" className="ArrowToWeb" />
          </a>
        </div>

        <div className="WebLayout-image-container">
          <img src="Web_2.png" alt="" />
          {/* hola
          holancdjknvjf
          nvjfdnjkvdfn
          cdsbvfhbvhjfd */}
        </div>
      </div>
    </>
  );
};

export default WebLayout;
