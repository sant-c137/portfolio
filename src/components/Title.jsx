import React from 'react';
import './Title.css';
// import ProjectsSVG from './Projects.svg'; // Importa tu archivo SVG

export const Title = ({ name }) => {
  return (
    <div className="Title-container">

      <img src="Projects.svg" alt="" />
      
      <h1 className="projects">{name}</h1>
    </div>
  );
};

export default Title;
