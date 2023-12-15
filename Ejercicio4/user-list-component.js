class UserListComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos específicos del Shadow DOM */
          :host {
            display: block;
            max-width: 600px;
            margin: 0 auto;
          }
  
          ul {
            list-style: none;
            padding: 0;
          }
  
          li {
            border: 1px solid #ccc;
            margin-bottom: 8px;
            padding: 10px;
          }
        </style>
        
        <h2>Lista de usuarios:</h2>
        <ul id="userList"></ul>
      `;
    }
  
    connectedCallback() {
      // Obtener datos de la API y mostrar la lista de usuarios
      this.fetchUserData();
    }
  
    async fetchUserData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        this.displayUserList(users);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    }
  
    displayUserList(users) {
      const userListElement = this.shadowRoot.getElementById('userList');
      if (userListElement) {

        userListElement.innerHTML = '';

        users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = `${user.name} - ${user.email}`;
          userListElement.appendChild(listItem);
        });
      }
    }
  }
  
  customElements.define('user-list-component', UserListComponent);
  