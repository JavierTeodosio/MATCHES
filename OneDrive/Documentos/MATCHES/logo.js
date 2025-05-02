document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('div');
    header.innerHTML = `
      <div class="logo-container">
        <img src="https://difusion.cinvestav.mx/portals/difusion/logosimbolo-03.png" alt="Logo" class="logo">
      </div>
    `;
    document.body.prepend(header);
  });
  