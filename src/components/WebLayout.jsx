import './WebLayout.css';

export const WebLayout = ({
  name,
  url,
  logo,
  websiteImage,
  description,
  frontApp1,
  frontApp2,
  frontApp3,
  backApp1,
  backApp2,
  backApp3,
}) => {
  return (
    <>
      <div className="projects-container-show">
        <div className="pagina">
          <div className="pagina-header">
            <div className="pagina-window">
              <img src={logo} alt="" />
              {name}
            </div>

            <img src="Plus.svg" alt="" className="Plus" />
            <span className="pagina-icons-nav pagina-color-1"></span>
            <span className="pagina-icons-nav pagina-color-2"></span>
            <span className="pagina-icons-nav pagina-color-3"></span>
          </div>
          <div className="pagina-search-bar">
            <img src="Arrow.svg" alt="" className="Arrow-Left" />
            <img src="Arrow.svg" alt="" className="Arrow-Right" />
            <img src="Refresh.svg" alt="" className="Refresh" />

            <a href={url} target="_blank" className="search-bar">
              {url}
            </a>
            <a href={url} target="_blank" className="ToWeb">
              <img src="ArrowToWeb.svg" alt="" className="ArrowToWeb" />
            </a>
          </div>
          <div className="pagina-container">
            <img src={websiteImage} alt="" />
          </div>
        </div>

        <div className="info-projects">
          <h2>Acerca del proyecto:</h2>
          <p>{description}</p>
          <h2>Tecnologías usadas:</h2>

          <div className="tools-container">
            <div className="frontend-tools">
             

              <div className="tools-container-cards">
                <img src={frontApp1} alt="" />
                <img src={frontApp2} alt="" />
                <img src={frontApp3} alt="" />
                <img src={backApp1} alt="" />
                <img src={backApp2} alt="" />
                <img src={backApp3} alt="" />

              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebLayout;
