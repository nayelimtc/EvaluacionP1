class ContadorComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.state = {
        contador: 0
      };
  
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos específicos del Shadow DOM */
          :host {
            display: block;
            max-width: 300px;
            margin: 0 auto;
            text-align: center;
            font-family: 'Arial', sans-serif;
          }
  
          #contador {
            font-size: 2em;
            margin: 10px 0;
          }
  
          button {
            font-size: 1em;
            padding: 8px 16px;
            margin: 4px;
            cursor: pointer;
          }
        </style>
        
        <h2>Contador</h2>
        <div id="contador">${this.state.contador}</div>
        <button id="incrementarBtn">Incrementar</button>
        <button id="disminuirBtn">Disminuir</button>
      `;
  
      // Manejadores de eventos para los botones
      this.shadowRoot.getElementById('incrementarBtn').addEventListener('click', () => this.incrementar());
      this.shadowRoot.getElementById('disminuirBtn').addEventListener('click', () => this.disminuir());
    }
  
    incrementar() {
      this.state.contador++;
      this.actualizarVista();
    }
  
    disminuir() {
      this.state.contador--;
      this.actualizarVista();
    }
  
    actualizarVista() {
      const contadorElement = this.shadowRoot.getElementById('contador');
      if (contadorElement) {
        contadorElement.textContent = this.state.contador;
      }
    }
  }
  
  customElements.define('contador-component', ContadorComponent);
  