import { useEffect } from 'react';
import { CardSkills } from './components/CardSkills';
import { WebLayout } from './components/WebLayout';
import { Title } from './components/Title';

import './App.css';

function App() {
  useEffect(() => {
    function positionElements() {
      const container = document.querySelector('.container');
      const children = document.querySelectorAll('.child');
      const placedPositions = [];

      children.forEach((child) => {
        let isOverlapping = true;
        let left, top;

        while (isOverlapping) {
          left = Math.random() * (container.clientWidth - child.offsetWidth);
          top = Math.random() * (container.clientHeight - child.offsetHeight);

          // Check if the new position is too close to existing positions
          isOverlapping = placedPositions.some((position) => {
            const distance = Math.sqrt(
              (left - position.left) ** 2 + (top - position.top) ** 2
            );
            return distance < 200; // Ensure at least 200px distance
          });
        }

        placedPositions.push({
          left,
          top,
          width: child.offsetWidth,
          height: child.offsetHeight,
        });
        child.style.left = left + 'px';
        child.style.top = top + 'px';
      });
    }

    // Llama a la función para posicionar elementos cuando se carga la página
    positionElements();

    // Vuelve a posicionar los elementos cuando cambia el tamaño de la ventana
    window.addEventListener('resize', positionElements);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener('resize', positionElements);
    };
  }, []);

  useEffect(() => {
    function zoomInOnClick() {
      const zoomElements = document.querySelectorAll('.zoomElement');
      zoomElements.forEach((element) => {
        element.classList.remove('zoomInAnimation');
        void element.offsetWidth; // Truco para reiniciar la animación
        element.classList.add('zoomInAnimation');
      });
    }

    document.addEventListener('click', zoomInOnClick);

    return () => {
      document.removeEventListener('click', zoomInOnClick);
    };
  }, []);

  useEffect(() => {
    function shrinkOnApproach(event) {
      const zoomElements = document.querySelectorAll('.zoomElement');
      zoomElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const distanceX = mouseX - elementCenterX;
        const distanceY = mouseY - elementCenterY;

        // Calcula la distancia entre el cursor del mouse y el centro del elemento
        const distanceToCenter =
          Math.sqrt(distanceX ** 2 + distanceY ** 2) - 90;

        // Calcula la escala inversa del elemento en función de la distancia al centro
        const scale = Math.min(1, 1 - (1 - distanceToCenter / 300)); // Invert the scale calculation

        // Aplica la escala al elemento
        element.style.transform = `scale(${scale})`;
      });
    }

    document.addEventListener('mousemove', shrinkOnApproach);

    return () => {
      document.removeEventListener('mousemove', shrinkOnApproach);
    };
  }, []);

  return (
    <div className="container">
      <div className="child color-1 zoomElement">1</div>
      <div className="child color-2 zoomElement">2</div>
      <div className="child color-3 zoomElement">3</div>
      <div className="child color-4 zoomElement">4</div>
      <div className="child color-5 zoomElement">5</div>
      <div className="child color-6 zoomElement">6</div>

      <div className="child color-1 zoomElement">1</div>
      <div className="child color-2 zoomElement">2</div>
      <div className="child color-3 zoomElement">3</div>
      <div className="child color-4 zoomElement">4</div>
      <div className="child color-5 zoomElement">5</div>
      <div className="child color-6 zoomElement">6</div>

      <div className="child color-1 zoomElement">1</div>
      <div className="child color-2 zoomElement">2</div>
      <div className="child color-3 zoomElement">3</div>
      <div className="child color-4 zoomElement">4</div>
      <div className="child color-5 zoomElement">5</div>
      <div className="child color-6 zoomElement">6</div>

      <div className="banner">
        <div className="Title">
          <span>Hola, soy</span>
          <h1>&nbsp; Tiago</h1>

          <img src="Profile.png" alt="" className="Profile" />
        </div>
        <p>
          Estudiante de la carrera de <strong>ingeniería de software</strong>,
          apasionado por <strong>aprender</strong> y <strong>crear </strong>
          las tecnologías que facilitan nuestra vida.
        </p>
        <br />
        <br />

        <Title
        
        name={"Projects"}
        color1={"red"}
        color2={"blue"}
        image={"Projects.svg"}
        
        
        />

        <hr />
        <br />

        <div className="projects-container">
          <WebLayout></WebLayout>
          <WebLayout></WebLayout>
          <WebLayout></WebLayout>
        </div>

        <br />
        <div className="Title-container">
          <img src="Skills.svg" alt="" />
          <h1>Habilidades</h1>
        </div>

        <hr />
        <br />

        <div className="skills-container">
          <div className="Title-container">
            <img src="Learning.svg" alt="" />
            <h1>Frontend</h1>
          </div>

          <div className="skills-container-div">
            <CardSkills
              image="HTML.svg"
              name="HTML"
              color="#e34f26"
            ></CardSkills>
            <CardSkills image="CSS.svg" name="CSS" color="#0c73b8"></CardSkills>
            <CardSkills
              image="JavaScript.svg"
              name="JavaScript"
              color="#f0db4f"
            ></CardSkills>
            <CardSkills
              image="React.svg"
              name="React"
              color="#00D8FF"
            ></CardSkills>
          </div>
          <br />
          <div className="Title-container">
            <img src="Learning.svg" alt="" />
            <h1>Backend</h1>
          </div>

          <div className="skills-container-div">
            <CardSkills
              image="NodeJS.svg"
              name="NodeJS"
              color="#4b9342"
            ></CardSkills>
            <CardSkills
              image="Postman.svg"
              name="Postman"
              color="#ff6c37"
            ></CardSkills>
            <CardSkills
              image="ExpressJS.svg"
              name="ExpressJS"
              color="#000"
            ></CardSkills>
            <CardSkills
              image="MySQL.svg"
              name="MySQL"
              color="#00546B"
            ></CardSkills>
          </div>
        </div>
        <br />

        <div className="Title-container">
          <img src="AboutME.svg" alt="" />
          <h1>Sobre mi</h1>
        </div>

        <hr />
        <br />

        <p>
          Me llamo Santiago Montaño y soy un estudiante de Ingeniería de
          Software apasionado por aprender las tecnologías web. Actualmente
          estoy enfocado en aprender a profundidad tecnologías web del ámbito
          del frontend para posteriormente aprender backend. Ya que cada vez que
          aprendo algo nuevo me doy cuenta que estoy en donde quiero estar.
        </p>
        <br />

        <div className="Title-container">
          <img src="Contact.svg" alt="" />
          <h1>Contacto</h1>
        </div>

        <hr />
        <br />

        <div className="projects-container">
          <a
            href="https://www.linkedin.com/in/santiago-monta%C3%B1o-38a786144/"
            style={{ textDecoration: 'none' }}
            target="_blank"
            >
            <CardSkills image="Linkedin.svg" name="LinkedIn" color="#0a66c2" />
          </a>

          <a
            href="https://github.com/sant-c137"
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <CardSkills image="Github.svg" name="Github" color="#000" />
          </a>

          <a
            href="mailto:santiam234@gmail.com"
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <CardSkills image="Mail.svg" name="Email" color="#1c274c" />
          </a>
        </div>
        <br />
        <hr />
        <footer>
          <span>Casi todos los derechos reservados.</span>
          <span> Hecho con 🩵 por Sant.</span>
          <span>@2024</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
