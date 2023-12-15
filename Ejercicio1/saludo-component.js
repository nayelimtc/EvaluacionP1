// Define la clase del componente
class SaludoComponent extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      //Shadow DOM
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos específicos del Shadow DOM */
          :host {
            display: block; /* Hace que el componente sea un bloque en línea */
          }
        </style>
        <p id="saludo">¡Hola, Mundo!</p>
      `;
    }

    setSaludo(nuevoSaludo) {
      const saludoElement = this.shadowRoot.getElementById('saludo');
      if (saludoElement) {
        saludoElement.textContent = nuevoSaludo;
      }
    }
  }
  
  customElements.define('saludo-component', SaludoComponent);
  