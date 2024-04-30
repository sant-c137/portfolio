import './WebLayout.css';

export const WebLayout = ({ name, url, logo, websiteImage }) => {
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
          <p>
            Este proyecto fue creado para una empresa cuyo enfoque era crear una
            plataforma de cursos online acerca de las tecnologías de la
            información.
          </p>
          <h2>Tecnologías usadas:</h2>

          <div className="tools-container">
            <div className="frontend-tools">
              <h3>Frontend</h3>

              <img src="HTML.svg" alt="" />
              <img src="JavaScript.svg" alt="" />
              <img src="CSS.svg" alt="" />
            </div>

            <div className="backend-tools">
              <h3>Backend</h3>
              <img src="NodeJS.svg" alt="" />
              <img src="MySQL.svg" alt="" />
              <img src="Postman.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebLayout;
