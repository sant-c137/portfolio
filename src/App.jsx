import { useEffect } from 'react';
import { CardSkills } from './components/CardSkills';
import { CardProjects } from './components/CardProjects';
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

      {/* <div className="child color-1 zoomElement">1</div>
      <div className="child color-2 zoomElement">2</div>
      <div className="child color-3 zoomElement">3</div>
      <div className="child color-4 zoomElement">4</div>
      <div className="child color-5 zoomElement">5</div>
      <div className="child color-6 zoomElement">6</div> */}
      {/*       
      <div className="child color-1 zoomElement">1</div>
      <div className="child color-2 zoomElement">2</div>
      <div className="child color-3 zoomElement">3</div>
      <div className="child color-4 zoomElement">4</div>
      <div className="child color-5 zoomElement">5</div>
      <div className="child color-6 zoomElement">6</div> */}

      <div className="banner">
        <div>
          <span>Hola, soy</span>
          <h1>&nbsp;Tiago</h1>
        </div>

        <p>
          Estudiante de la carrera de <strong>ingenieria de software</strong>,
          apasionado por <strong>aprender</strong> y <strong>crear </strong>
          las tecnologias que facilitan nuestra vida.
        </p>

        <h1 className="projects">Proyectos</h1>

        <div className="projects-container">
          <CardProjects></CardProjects>
        </div>
        <ul>
          <li>Proyecto 1</li>
          <li>Proyecto 2</li>
        </ul>

        <h1 className="skills">Habilidades</h1>

        <div className="skills-container">
          <h1>Frontend</h1>
          <div  className='skills-container-div'>
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

          <h1>Backend</h1>
          <div>
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

        <h1 className="about-me">Sobre mi</h1>
        <p>
          Me llamo Tiago Montaño y soy un estudiante de Ingeniería de Software
          apasionado por aprender las tecnologías web. Actualmente estoy
          enfocado en aprender a profundidad tecnologías web del ámbito del
          frontend para posteriormente aprender backend. Ya que cada vez que
          aprendo algo nuevo me doy cuenta que estoy en donde quiero estar.
        </p>

        <h1 className="contact">Contacto</h1>

        <footer>
          <span>@2024 Hecho por Tiago amor 🩵 </span>
          <ul>
            <li>Sobre mi</li>
            <li>Contacto</li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
