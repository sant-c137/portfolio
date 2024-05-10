import { useTranslation } from 'react-i18next';
import './WebLayout.css';

export const WebLayout = ({
  name,
  url,
  logo,
  websiteImage,
  description,
  images = [],
}) => {
  const { t } = useTranslation('global');

  return (
    <>
      <div className="projects-container-show">
        <div className="pagina">
          <div className="pagina-header">
            <div className="pagina-window">
              <img src={logo} alt="Website logo project" />
              {name}
            </div>

            <img src="Plus.svg" alt="Plus icon" className="Plus" />
            <span className="pagina-icons-nav pagina-color-1"></span>
            <span className="pagina-icons-nav pagina-color-2"></span>
            <span className="pagina-icons-nav pagina-color-3"></span>
          </div>
          <div className="pagina-search-bar">
            <img src="Arrow.svg" alt="Arrow icon" className="Arrow-Left" />
            <img src="Arrow.svg" alt="Arrow icon" className="Arrow-Right" />
            <img src="Refresh.svg" alt="Refresh icon" className="Refresh" />

            <a
              href={url}
              target="_blank"
              className="search-bar"
              title="Go to website"
            >
              {url}
            </a>
            <a
              href={url}
              target="_blank"
              className="ToWeb"
              title="Go to website"
            >
              <img
                src="ArrowToWeb.svg"
                alt="Link to web icon"
                className="ArrowToWeb"
              />
            </a>
          </div>
          <div className="pagina-container">
            <img src={websiteImage} alt="Website image preview" />
          </div>
        </div>

        <div className="info-projects">
          <h2>{t('WebLayout.about-project')}</h2>
          <p>{description}</p>
          <h2>Tecnologías usadas:</h2>

          <div className="tools-container-cards">
            {images.map((tools, index) => (
              <img key={index} src={tools} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};



export default WebLayout;
