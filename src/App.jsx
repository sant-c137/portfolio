import { useState, useEffect } from 'react';
import { CardSkills } from './components/CardSkills';
import { WebLayout } from './components/WebLayout';
import { Header } from './components/Header';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const [theme, setTheme] = useState('');
  const [year, setYear] = useState('');

  const { t } = useTranslation('global');

  useEffect(() => {
    const prefersMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: )').matches;

    setTheme(prefersMode);

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

      window.scrollTo(0, 0);
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
    <div className="container ">
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
            <span>{t("Main.hi-i'm")}&nbsp;</span>
            <h1>Sant</h1>

            <p>
              {t('Main.student-of')}{' '}
              <strong>{t('Main.software-engineering')}</strong>,&nbsp;
              {t('Main.passionate-about')} <strong>{t('Main.learning')}</strong>{' '}
              and&nbsp;
              <strong>{t('Main.creating')}</strong> {t('Main.technologies')}
              &nbsp;
              {t('Main.that-facilitate')} {t('Main.our-life')}.
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
          <svg
            width="4rem"
            height="4rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-primary"
              opacity="1"
              d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
              fill="currentColor"
            />
            <path
              className="svg-secondary"
              d="M13.4881 6.44591C13.8882 6.55311 14.1256 6.96437 14.0184 7.36447L11.4302 17.0237C11.323 17.4238 10.9117 17.6613 10.5116 17.5541C10.1115 17.4468 9.8741 17.0356 9.98131 16.6355L12.5695 6.97624C12.6767 6.57614 13.088 6.3387 13.4881 6.44591Z"
              fill="currentColor"
            />
            <path
              className="svg-secondary"
              d="M14.9697 8.46967C15.2626 8.17678 15.7374 8.17678 16.0303 8.46967L16.2387 8.67801C16.874 9.3133 17.4038 9.84308 17.7678 10.3202C18.1521 10.8238 18.4216 11.3559 18.4216 12C18.4216 12.6441 18.1521 13.1762 17.7678 13.6798C17.4038 14.1569 16.874 14.6867 16.2387 15.322L16.0303 15.5303C15.7374 15.8232 15.2626 15.8232 14.9697 15.5303C14.6768 15.2374 14.6768 14.7626 14.9697 14.4697L15.1412 14.2981C15.8229 13.6164 16.2797 13.1574 16.5753 12.7699C16.8577 12.3998 16.9216 12.1843 16.9216 12C16.9216 11.8157 16.8577 11.6002 16.5753 11.2301C16.2797 10.8426 15.8229 10.3836 15.1412 9.70191L14.9697 9.53033C14.6768 9.23744 14.6768 8.76257 14.9697 8.46967Z"
              fill="currentColor"
            />
            <path
              className="svg-secondary"
              d="M7.96986 8.46967C8.26275 8.17678 8.73762 8.17678 9.03052 8.46967C9.32341 8.76257 9.32341 9.23744 9.03052 9.53033L8.85894 9.70191C8.17729 10.3836 7.72052 10.8426 7.42488 11.2301C7.14245 11.6002 7.07861 11.8157 7.07861 12C7.07861 12.1843 7.14245 12.3998 7.42488 12.7699C7.72052 13.1574 8.17729 13.6164 8.85894 14.2981L9.03052 14.4697C9.32341 14.7626 9.32341 15.2374 9.03052 15.5303C8.73762 15.8232 8.26275 15.8232 7.96986 15.5303L7.76151 15.322C7.12617 14.6867 6.59638 14.1569 6.23235 13.6798C5.84811 13.1762 5.57861 12.6441 5.57861 12C5.57861 11.3559 5.84811 10.8238 6.23235 10.3202C6.59638 9.84308 7.12617 9.31331 7.76151 8.67801L7.96986 8.46967Z"
              fill="currentColor"
            />
          </svg>

          <h1 id="projects">{t('Main.projects')}</h1>
        </div>

        <hr className="margin-bottom" />

        <div className="projects-container">
          <WebLayout
            name={'Acit'}
            url={'https://acit-frontend.vercel.app/'}
            logo={'AcitLogo.svg'}
            websiteImage={'Web_1.webp'}
            description={
              t('WebLayout.this-project') +
              ' ' +
              t('WebLayout.about-project') +
              ' ' +
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
              t('WebLayout.this-project') +
              ' ' +
              t('WebLayout.about-project') +
              ' ' +
              'Este proyecto fue creado para crear una implementación gráfica e interactiva de las curvas de Bezier.'
            }
            images={['HTML.svg', 'CSS.svg', 'JavaScript.svg']}
          />
        </div>

        <div className="Title-container margin-top">
          <svg
            width="4rem"
            height="4rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-primary"
              d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z"
              fill="currentColor"
            ></path>
            <path
              className="svg-secondary"
              d="M 8.029 18.691 L 7.837 18.691 C 7.142 18.691 6.794 18.691 6.578 18.475 C 6.362 18.259 6.362 17.911 6.362 17.216 L 6.362 16.395 C 6.362 16.013 6.362 15.822 6.46 15.651 C 6.558 15.48 6.707 15.394 7.003 15.222 C 8.954 14.087 11.725 13.448 13.575 14.551 C 13.699 14.625 13.811 14.715 13.906 14.822 C 14.318 15.284 14.288 15.982 13.813 16.396 C 13.713 16.484 13.606 16.55 13.499 16.573 C 13.587 16.563 13.672 16.551 13.753 16.538 C 14.425 16.431 14.989 16.072 15.506 15.682 L 16.839 14.675 C 17.308 14.32 18.006 14.32 18.476 14.675 C 18.899 14.994 19.028 15.52 18.761 15.949 C 18.449 16.449 18.009 17.088 17.587 17.479 C 17.165 17.871 16.536 18.22 16.022 18.468 C 15.453 18.743 14.824 18.901 14.185 19.004 C 12.888 19.214 11.537 19.182 10.254 18.918 C 9.528 18.768 8.774 18.691 8.029 18.691 Z"
              fill="currentColor"
            ></path>

            <path
              className="svg-secondary"
              d="M 11.487 4.304 C 11.877 3.604 12.073 3.254 12.364 3.254 C 12.656 3.254 12.851 3.604 13.242 4.304 L 13.343 4.485 C 13.454 4.684 13.509 4.784 13.595 4.849 C 13.682 4.915 13.79 4.94 14.005 4.988 L 14.201 5.033 C 14.959 5.204 15.338 5.29 15.428 5.58 C 15.518 5.87 15.26 6.172 14.743 6.776 L 14.61 6.932 C 14.463 7.104 14.389 7.19 14.356 7.296 C 14.323 7.402 14.334 7.517 14.357 7.746 L 14.377 7.955 C 14.455 8.761 14.494 9.164 14.258 9.343 C 14.022 9.522 13.667 9.359 12.957 9.032 L 12.774 8.947 C 12.572 8.855 12.471 8.808 12.364 8.808 C 12.258 8.808 12.157 8.855 11.955 8.947 L 11.771 9.032 C 11.062 9.359 10.707 9.522 10.471 9.343 C 10.235 9.164 10.274 8.761 10.352 7.955 L 10.372 7.746 C 10.394 7.517 10.406 7.402 10.373 7.296 C 10.34 7.19 10.266 7.104 10.119 6.932 L 9.986 6.776 C 9.469 6.172 9.211 5.87 9.301 5.58 C 9.391 5.29 9.77 5.204 10.528 5.033 L 10.724 4.988 C 10.939 4.94 11.047 4.915 11.133 4.849 C 11.22 4.784 11.275 4.684 11.386 4.485 L 11.487 4.304 Z"
              fill="currentColor"
            ></path>

            <path
              className="svg-secondary"
              d="M 17.093 9.39 C 17.284 9.041 17.379 8.867 17.521 8.867 C 17.664 8.867 17.759 9.041 17.95 9.39 L 17.999 9.48 C 18.053 9.579 18.08 9.628 18.122 9.661 C 18.164 9.694 18.217 9.706 18.322 9.73 L 18.418 9.752 C 18.788 9.837 18.973 9.88 19.017 10.024 C 19.061 10.169 18.935 10.319 18.683 10.62 L 18.617 10.697 C 18.546 10.783 18.51 10.826 18.494 10.878 C 18.478 10.931 18.483 10.988 18.494 11.102 L 18.504 11.206 C 18.542 11.607 18.561 11.808 18.446 11.897 C 18.33 11.986 18.157 11.905 17.811 11.742 L 17.721 11.7 C 17.623 11.654 17.573 11.631 17.521 11.631 C 17.469 11.631 17.42 11.654 17.321 11.7 L 17.232 11.742 C 16.885 11.905 16.712 11.986 16.597 11.897 C 16.482 11.808 16.501 11.607 16.539 11.206 L 16.549 11.102 C 16.56 10.988 16.565 10.931 16.549 10.878 C 16.533 10.826 16.497 10.783 16.425 10.697 L 16.36 10.62 C 16.108 10.319 15.982 10.169 16.026 10.024 C 16.07 9.88 16.255 9.837 16.625 9.752 L 16.72 9.73 C 16.826 9.706 16.878 9.694 16.92 9.661 C 16.963 9.628 16.99 9.579 17.044 9.48 L 17.093 9.39 Z"
              fill="currentColor"
            ></path>

            <path
              className="svg-secondary"
              d="M 7.052 9.422 C 7.243 9.073 7.338 8.899 7.48 8.899 C 7.623 8.899 7.718 9.073 7.909 9.422 L 7.958 9.512 C 8.012 9.611 8.039 9.66 8.081 9.693 C 8.123 9.726 8.176 9.738 8.281 9.762 L 8.377 9.784 C 8.747 9.869 8.932 9.912 8.976 10.056 C 9.02 10.201 8.894 10.351 8.642 10.652 L 8.576 10.729 C 8.505 10.815 8.469 10.858 8.453 10.91 C 8.437 10.963 8.442 11.02 8.453 11.134 L 8.463 11.238 C 8.501 11.639 8.52 11.84 8.405 11.929 C 8.289 12.018 8.116 11.937 7.77 11.774 L 7.68 11.732 C 7.582 11.686 7.532 11.663 7.48 11.663 C 7.428 11.663 7.379 11.686 7.28 11.732 L 7.191 11.774 C 6.844 11.937 6.671 12.018 6.556 11.929 C 6.441 11.84 6.46 11.639 6.498 11.238 L 6.508 11.134 C 6.519 11.02 6.524 10.963 6.508 10.91 C 6.492 10.858 6.456 10.815 6.384 10.729 L 6.319 10.652 C 6.067 10.351 5.941 10.201 5.985 10.056 C 6.029 9.912 6.214 9.869 6.584 9.784 L 6.679 9.762 C 6.785 9.738 6.837 9.726 6.879 9.693 C 6.922 9.66 6.949 9.611 7.003 9.512 L 7.052 9.422 Z"
              fill="currentColor"
            ></path>
          </svg>

          <h1 id="skills">{t('Main.skills')}</h1>
        </div>

        <hr />

        <div className="skills-container">
          <div className="Title-container ">
            <svg
              width="4rem"
              height="4rem"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="svg-primary"
                d="M3 8C3 5.17157 3 3.75736 3.87868 2.87868C4.75736 2 6.17157 2 9 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H9C6.17157 22 4.75736 22 3.87868 21.1213C3 20.2426 3 18.8284 3 16V8Z"
                fill="currentColor"
              />
              <path
                className="svg-secondary"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.75 2.01221V22.0111H7.25V2.01221H8.75Z"
                fill="currentColor"
              />
              <path
                className="svg-secondary"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H4C4.41421 7.25 4.75 7.58579 4.75 8C4.75 8.41421 4.41421 8.75 4 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H4C4.41421 15.25 4.75 15.5858 4.75 16C4.75 16.4142 4.41421 16.75 4 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16Z"
                fill="currentColor"
              />
              <path
                className="svg-secondary"
                d="M10.75 6.5C10.75 6.08579 11.0858 5.75 11.5 5.75H16.5C16.9142 5.75 17.25 6.08579 17.25 6.5C17.25 6.91421 16.9142 7.25 16.5 7.25H11.5C11.0858 7.25 10.75 6.91421 10.75 6.5Z"
                fill="currentColor"
              />
              <path
                className="svg-secondary"
                d="M10.75 10C10.75 9.58579 11.0858 9.25 11.5 9.25H16.5C16.9142 9.25 17.25 9.58579 17.25 10C17.25 10.4142 16.9142 10.75 16.5 10.75H11.5C11.0858 10.75 10.75 10.4142 10.75 10Z"
                fill="currentColor"
              />
            </svg>
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
            <svg
              width="4rem"
              height="4rem"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="svg-primary"
                d="M3 8C3 5.17157 3 3.75736 3.87868 2.87868C4.75736 2 6.17157 2 9 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H9C6.17157 22 4.75736 22 3.87868 21.1213C3 20.2426 3 18.8284 3 16V8Z"
                fill="currentColor"
              />
              <path
                className="svg-secondary"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.75 2.01221V22.0111H7.25V2.01221H8.75Z"
                fill="currentColor"
              />
              <path
                className="svg-secondary"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H4C4.41421 7.25 4.75 7.58579 4.75 8C4.75 8.41421 4.41421 8.75 4 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H4C4.41421 15.25 4.75 15.5858 4.75 16C4.75 16.4142 4.41421 16.75 4 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16Z"
                fill="currentColor"
              />
              <path
                className="svg-secondary"
                d="M10.75 6.5C10.75 6.08579 11.0858 5.75 11.5 5.75H16.5C16.9142 5.75 17.25 6.08579 17.25 6.5C17.25 6.91421 16.9142 7.25 16.5 7.25H11.5C11.0858 7.25 10.75 6.91421 10.75 6.5Z"
                fill="currentColor"
              />
              <path
                className="svg-secondary"
                d="M10.75 10C10.75 9.58579 11.0858 9.25 11.5 9.25H16.5C16.9142 9.25 17.25 9.58579 17.25 10C17.25 10.4142 16.9142 10.75 16.5 10.75H11.5C11.0858 10.75 10.75 10.4142 10.75 10Z"
                fill="currentColor"
              />
            </svg>
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
          <svg
            width="4rem"
            height="4rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-primary"
              d="M6.50359 21.5201C8.13698 22.4631 10.2103 21.9075 14.357 20.7964C18.5037 19.6853 20.577 19.1298 21.5201 17.4964C22.4631 15.863 21.9075 13.7897 20.7964 9.643C19.6853 5.49632 19.1298 3.42298 17.4964 2.47995C15.863 1.53691 13.7897 2.09246 9.643 3.20356C5.49632 4.31466 3.42298 4.87021 2.47995 6.50359C1.53691 8.13698 2.09246 10.2103 3.20356 14.357C4.31466 18.5037 4.87021 20.577 6.50359 21.5201Z"
              fill="currentColor"
            />

            <path
              className="svg-secondary"
              d="M14.8978 11.2237C15.4313 11.0808 15.6899 10.3162 15.4755 9.51599C15.2611 8.71579 14.6548 8.18298 14.1213 8.32592C13.5879 8.46886 13.3292 9.23343 13.5436 10.0336C13.7581 10.8338 14.3643 11.3666 14.8978 11.2237Z"
              fill="currentColor"
            />
            <path
              className="svg-secondary"
              d="M9.10238 12.7767C9.63585 12.6337 9.89449 11.8692 9.68008 11.069C9.46567 10.2688 8.85939 9.73596 8.32592 9.8789C7.79246 10.0218 7.53381 10.7864 7.74823 11.5866C7.96264 12.3868 8.56892 12.9196 9.10238 12.7767Z"
              fill="currentColor"
            />
            <path
              className="svg-secondary"
              d="M8.18524 15.751C8.28594 15.3492 8.69329 15.1052 9.09507 15.2059C10.2254 15.4892 11.5234 15.4927 12.8411 15.1396C14.1589 14.7865 15.2813 14.1345 16.1185 13.324C16.4161 13.0359 16.8909 13.0436 17.179 13.3412C17.4671 13.6388 17.4594 14.1136 17.1618 14.4017C16.8143 14.7381 16.4298 15.0495 16.0129 15.3304L16.1709 15.6523C16.5396 16.4034 16.2225 17.3108 15.4663 17.6688C14.7251 18.0197 13.8395 17.7102 13.4781 16.9741L13.2819 16.5742L13.2294 16.5885C11.674 17.0052 10.1168 17.0083 8.73039 16.6609C8.32861 16.5602 8.08453 16.1528 8.18524 15.751Z"
              fill="currentColor"
            />
          </svg>
          <h1 id="about-me">{t('Main.about-me')}</h1>
        </div>

        <hr />

        <p className="About-me-text">{t('Main.about-me-text')}</p>

        <div className="Title-container">
          <svg
            width="4rem"
            height="4rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-primary"
              d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z"
              fill="currentColor"
            />

            <path
              className="svg-secondary"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.75C9.1005 6.75 6.75 9.1005 6.75 12C6.75 14.8995 9.1005 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75C8.27208 18.75 5.25 15.7279 5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 12.8103 18.6069 13.5889 18.3439 14.3108C18.211 14.6756 17.9855 14.9732 17.7354 15.204L17.6548 15.2783C16.8451 16.0252 15.6294 16.121 14.7127 15.5099C14.3431 15.2635 14.0557 14.9233 13.8735 14.5325C13.3499 14.9205 12.7017 15.15 12 15.15C10.2603 15.15 8.85 13.7397 8.85 12C8.85 10.2603 10.2603 8.85 12 8.85C13.7397 8.85 15.15 10.2603 15.15 12V13.5241C15.15 13.8206 15.2981 14.0974 15.5448 14.2618C15.8853 14.4888 16.3369 14.4533 16.6377 14.1758L16.7183 14.1015C16.8295 13.9989 16.8991 13.8944 16.9345 13.7973C17.1384 13.2376 17.25 12.6327 17.25 12C17.25 9.1005 14.8995 6.75 12 6.75ZM12 10.35C12.9113 10.35 13.65 11.0887 13.65 12C13.65 12.9113 12.9113 13.65 12 13.65C11.0887 13.65 10.35 12.9113 10.35 12C10.35 11.0887 11.0887 10.35 12 10.35Z"
              fill="currentColor"
            />
          </svg>
          <h1 id="contact">{t('Main.contact')}</h1>
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
        <footer className="margin-bottom">
          <span>{t('Footer.almost-all-rights')}</span>
          <span>
            {' '}
            {t('Footer.made-with')} {theme ? '💚' : '💙'} {t('Footer.by')}
          </span>
          <span>@{year}</span>
        </footer>
      </div>

      <Header />
    </div>
  );
}

export default App;
