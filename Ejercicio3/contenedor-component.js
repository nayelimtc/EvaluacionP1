class ContenedorComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos específicos del Shadow DOM */
          :host {
            display: block;
            border: 1px solid #ccc;
            padding: 10px;
          }
  
          #headerSlot {
            font-size: 1.2em;
            margin-bottom: 10px;
          }
        </style>
        
        <div id="headerSlot">
          <!-- Slot para el encabezado -->
          <slot name="header">Encabezado Predeterminado</slot>
        </div>
        
        <!-- Slot para el cuerpo -->
        <slot name="body">Cuerpo Predeterminado</slot>
      `;
    }
  }
  
  customElements.define('contenedor-component', ContenedorComponent);
  