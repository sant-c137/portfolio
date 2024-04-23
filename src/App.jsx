import { useEffect } from 'react';
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

      {/* <div className="banner">
        <h1>Hola Mundo</h1>
      </div> */}
    </div>
  );
}

export default App;
