import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './WebLayout.css';

const MemoizedHeader = memo(({ name, logo }) => (
  <div className="pagina-header">
    <div className="pagina-window">
      <img src={logo} alt="Website logo project" />
      {name}
    </div>
    <img src="Plus.svg" alt="Plus icon" className="Plus" />
    {renderColorCircle('var(--pagina-color-1)', 1)}
    {renderColorCircle('var(--pagina-color-2)', 2)}
    {renderColorCircle('var(--pagina-color-3)', 3)}
  </div>
));

MemoizedHeader.displayName = 'MemoizedHeader';

const MemoizedSearchBar = memo(({ url }) => (
  <div className="pagina-search-bar">
    <img src="Arrow.svg" alt="Arrow icon" className="Arrow-Left" />
    <img src="Arrow.svg" alt="Arrow icon" className="Arrow-Right" />
    <img src="Refresh.svg" alt="Refresh icon" className="Refresh" />
    <a href={url} target="_blank" className="search-bar" title="Go to website">
      {url}
    </a>
    <a href={url} target="_blank" className="ToWeb" title="Go to website">
      <img src="ArrowToWeb.svg" alt="Link to web icon" className="ArrowToWeb" />
    </a>
  </div>
));

MemoizedSearchBar.displayName = 'MemoizedSearchBar';

const renderColorCircle = (color, key) => (
  <span key={key} className={`pagina-icons-nav pagina-color-${key}`} style={{ backgroundColor: color }} />
);

export const WebLayout = React.memo(({ name, url, logo, websiteImage, description, images = [] }) => {
  return (
    <>
      <div className="projects-container-show">
        <div className="pagina">
          <MemoizedHeader name={name} logo={logo} />
          <MemoizedSearchBar url={url} />
          <div className="pagina-container">
            <img src={websiteImage} alt="Website image preview" />
          </div>
        </div>
        <div className="info-projects">
          <h2>Acerca del proyecto:</h2>
          <p>{description}</p>
          <h2>Tecnologías usadas:</h2>
          <div className="tools-container-cards">
            {images.length > 0 &&
              images.map((tools) => (
                <img key={tools} src={tools} alt={`Image ${tools}`} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
});

WebLayout.displayName = 'WebLayout';

WebLayout.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  websiteImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
};

WebLayout.defaultProps = {
  images: [],
};

export default WebLayout;