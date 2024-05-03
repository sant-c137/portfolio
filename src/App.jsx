import { useState, useEffect } from 'react';
import { CardSkills } from './components/CardSkills';
import { WebLayout } from './components/WebLayout';
import './App.css';

function App() {
  const [theme, setTheme] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    setTheme(prefersDarkMode);

    const now = new Date();
    const currentYear = now.getFullYear();
    setYear(currentYear);
  }, []);

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

      <div className="child color-1 color-7 zoomElement">1</div>
      <div className="child color-2 color-8 zoomElement">2</div>
      <div className="child color-3 color-9 zoomElement">3</div>
      <div className="child color-4 color-10 zoomElement">4</div>
      <div className="child color-5 color-11 zoomElement">5</div>
      <div className="child color-6 color-12 zoomElement">6</div>

      <div className="child color-1 color-13 zoomElement">1</div>
      <div className="child color-2 color-14 zoomElement">2</div>
      <div className="child color-3 color-15 zoomElement">3</div>
      <div className="child color-4 color-16 zoomElement">4</div>
      <div className="child color-5 color-17 zoomElement">5</div>
      <div className="child color-6 color-18 zoomElement">6</div>

      <div className="banner">
        <div className="Title">
          <div>
            <span>Hola, soy&nbsp;</span>
            <h1>Sant</h1>

            <p>
              Estudiante de la carrera de{' '}
              <strong>ingeniería de software</strong>, apasionado por{' '}
              <strong>aprender</strong> y <strong>crear </strong>
              las tecnologías que facilitan nuestra vida.
            </p>
          </div>

          <img
            src="Profile.webp"
            alt="Santiago Montaño's profile picture"
            className="Profile"
          />
        </div>

        <br />
        <br />

        <div className="Title-container">
          <img src="Projects.svg" alt="Projects icon" />

          <h1>Proyectos</h1>
        </div>

        <hr className="margin-bottom" />

        <div className="projects-container">
          <WebLayout
            name={'Acit'}
            url={'https://acit-frontend.vercel.app/'}
            logo={'AcitLogo.svg'}
            websiteImage={'Web_1.webp'}
            description={
              'Este proyecto fue creado para una empresa cuyo enfoque era crear una plataforma de cursos de las tecnologías de la información.'
            }
            images={[
              'HTML.svg',
              'CSS.svg',
              'JavaScript.svg',
              'NodeJS.svg',
              'Postman.svg',
              'MySQL.svg',
            ]}
          />

          <WebLayout
            name={'Bezier curves'}
            url={'https://sant-c137.github.io/BezierCurvesJS/'}
            logo={'AcitLogo.svg'}
            websiteImage={'Web_2.webp'}
            description={
              'Este proyecto fue creado para crear una implementación gráfica e interactiva de las curvas de Bezier.'
            }
            images={['HTML.svg', 'CSS.svg', 'JavaScript.svg']}
          />
        </div>

        <div className="Title-container margin-top">
          <img src="Skills.svg" alt="Skills icon" />

          <h1>Habilidades</h1>
        </div>

        <hr />

        <div className="skills-container">
          <div className="Title-container ">
            <img src="Learning.svg" alt="Learning icon" />
            <h2>Frontend</h2>
          </div>

          <div className="skills-container-div">
            <CardSkills image="HTML.svg" name="HTML" color="#e34f26" />
            <CardSkills image="CSS.svg" name="CSS" color="#0c73b8" />
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

          <div className="Title-container">
            <img src="Learning.svg" alt="Learning icon" />
            <h2>Backend</h2>
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
              color="#aaa"
            ></CardSkills>
            <CardSkills
              image="MySQL.svg"
              name="MySQL"
              color="#00546B"
            ></CardSkills>
          </div>
        </div>

        <div className="Title-container margin-top">
          <img src="AboutME.svg" alt="About me icon" />
          <h1>Sobre mi</h1>
        </div>

        <hr />

        <p className="About-me-text">
          Me llamo Santiago Montaño y soy un estudiante de Ingeniería de
          Software apasionado por aprender las tecnologías web. Actualmente
          estoy enfocado en aprender a profundidad tecnologías web del ámbito
          del frontend para posteriormente aprender backend. Ya que cada vez que
          aprendo algo nuevo me doy cuenta que estoy en donde quiero estar.
        </p>

        <div className="Title-container">
          <img src="Contact.svg" alt="Contact icon" />
          <h1>Contacto</h1>
        </div>

        <hr className="margin-bottom" />

        <div className="contact-container">
          <a
            href="https://www.linkedin.com/in/santiago-monta%C3%B1o-38a786144/"
            target="_blank"
            title="Santiago Montaño's LinkedIn profile"
          >
            <CardSkills image="Linkedin.svg" name="LinkedIn" color="#0a66c2" />
          </a>

          <a
            href="https://github.com/sant-c137"
            target="_blank"
            title="Santiago Montaño's GitHub profile"
          >
            <CardSkills image="Github.svg" name="Github" color="#aaa" />
          </a>

          <a
            href="mailto:santiam234@gmail.com"
            target="_blank"
            title="Send an email to Santiago Montaño"
          >
            <CardSkills image="Mail.svg" name="Email" color="#8d93a5" />
          </a>
        </div>
        <hr className="margin-top" />
        <footer>
          <span>Casi todos los derechos reservados.</span>
          <span> Hecho con {theme ? '💚' : '💙'} por Sant.</span>
          <span>@{year}</span>
        </footer>
      </div>


      <nav>
        
      </nav>
    </div>
  );
}

export default App;
