class EmisorComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <button id="emisorBtn">Enviar Mensaje</button>
      `;
  
      this.shadowRoot.getElementById('emisorBtn').addEventListener('click', () => {
        const mensaje = '¡Hola desde emisor-component!';
        const evento = new CustomEvent('mensajeEnviado', { bubbles: true, composed: true, detail: mensaje });
        this.dispatchEvent(evento);
      });
    }
  }
  
  customElements.define('emisor-component', EmisorComponent);
  