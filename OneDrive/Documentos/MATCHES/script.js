const doctores = [
    {
      nombre: "Dr. Amilcar Meneses",
      especialidad: ": computación científica , interacción persona computadora , cómputo sustentable .",
      correo: "",
      Departamento_de_Cinvestav: "Departamento de Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12342/images/amilcar-600-600-p-L-97.jpg"
    },  
    {
      nombre: "Dr. José Matías Alvarado Mentado",
      especialidad: "Aprendizaje automático",
      correo: "matias@cs.cinvestav.mx",
      computacion: "Computacion",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12332/images/MATIASALVARADO-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dr. Sergio Víctor Chapa Vergara",
      especialidad: ": bases de datos , cómputo   científico , autómatas celulares.",
      correo: "",
      Departamento_de_Cinvestav: "Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12826/images/sergiochapa-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dr. Carlos Artemio Coello Coello",
      especialidad: ":algoritmos evolutivos ,   optimización multiobjetivo , metaheurísticas",
      correo: "",
      Departamento_de_Cinvestav: "Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12335/images/CARLOSCOELLO-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dr. Luis Gerardo de la Fraga",
      especialidad: " visión por computadora , algoritmos evolutivos , seguridad de computadoras en redes heterogéneas.",
      correo: "",
      Departamento_de_Cinvestav: "Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12336/images/LUIS-GERARDO-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dr. Juan Carlos Ku Cauich",
      especialidad: ": álgebra , códigos , criptografía",
      correo: "",
      Departamento_de_Cinvestav: "Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12833/images/juancarlosku-600-600-p-L-97.jpg"
    },
    {
      nombre: "DrA. Dolores Lara Cuevas",
      especialidad: ": geometría combinatoria , geometría computacional , algoritmos",
      correo: "dolores.lara@cinvestav.mx",
      Departamento_de_Cinvestav: "Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12337/images/DOLORESLARA-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dra. Xiaoou Li Zhang",
      especialidad: ":  redes de Petri , redes neuronales artificiales , sistemas de conocimiento",
      correo: "lixo@cs.cinvestav.mx",
      Departamento_de_Cinvestav: "Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12819/images/xiaoou-lee-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dr. Cuauhtémoc Mancillas López",
      especialidad: ":criptografía simétrica , modos de operación , FPGAs ",
      correo: "cuauhtemoc.mancillas@cinvestav.mx",
      Departamento_de_Cinvestav: "Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12339/images/CUAUHTEMOC-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dra. Ana María Antonia Martínez Enríquez",
      especialidad: ":trabajo cooperativo , inteligencia artificial",
      correo: "",
      Departamento_de_Cinvestav: "Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12340/images/ANAMARTINEZ-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dra. Sonia G. Mendoza Chapa",
      especialidad: ":trabajo cooperativo , cómputo ubicuo , interacción persona computadora .",
      correo: "sonia.mendoza@cinvestav.mx",
      Departamento_de_Cinvestav: "Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12341/images/SONIA-GUADALUPE-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dr. Guillermo Benito Morales Luna",
      especialidad: ":teoría de la computación , lógica matemática, criptografia.",
      correo: "",
      Departamento_de_Cinvestav: "Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12343/images/GUILLERMORALES-600-600-p-L-97.jpg"
    },
    
    {
      nombre: "Dr. Eduardo López Domínguez",
      especialidad: "Sistemas distribuidos móviles",
      correo: "",
      computacion: "Computacion",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12338/images/EDUARDOLOPEZ-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dra. Brisbane Ovilla Martínez",
      especialidad: " seguridad en hardware , criptografía simétrica , modos de operación .",
      correo: "",
      Departamento_de_Cinvestav: "Departamento de Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12344/images/BRISBANEOVILLA-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dr. José Guadalupe Rodríguez García",
      especialidad: "  sistemas distribuidos , cómputo ubicuo .  .",
      correo: "",
      Departamento_de_Cinvestav: "Departamento de Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12345/images/JOSEGUADALUPE2-600-600-p-L-97.jpg"
    },
    {
      nombre: "Dr. Oliver Schütze",
      especialidad: " optimización multiobjetivo, algoritmo evolutivo, optimización numérica. ",
      correo: "",
      Departamento_de_Cinvestav: "Departamento de Computación",
      foto: "https://cinvestav.mx/portals/0/EasyDNNNews/12346/images/OLIVER-600-600-p-L-97.jpg"
    },
  
  ];
  const select = document.getElementById('especialidad');
  
  // Obtener especialidades únicas
  const especialidadesUnicas = [];
  
  doctores.forEach(doc => {
    doc.especialidad.split(',').forEach(esp => {
      const limpia = esp.replace(/[:.]/g, '').trim().toLowerCase();
      if (limpia && !especialidadesUnicas.includes(limpia)) {
        especialidadesUnicas.push(limpia);
      }
    });
  });
  
  // Llenar select
  especialidadesUnicas.forEach(esp => {
    const option = document.createElement('option');
    option.value = esp;
    option.textContent = esp.charAt(0).toUpperCase() + esp.slice(1);
    select.appendChild(option);
  });
  
  document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const especialidadBuscada = document.getElementById('especialidad').value.trim().toLowerCase();
  
    const mentoresCoincidentes = doctores.filter(doc => {
      const especialidades = doc.especialidad
        .replace(/[:.]/g, '')
        .toLowerCase()
        .split(',')
        .map(e => e.trim());
  
      return especialidades.includes(especialidadBuscada);
    });
  
    if (mentoresCoincidentes.length > 0) {
      localStorage.setItem('mentoresCoincidentes', JSON.stringify(mentoresCoincidentes));
      window.location.href = "mentores.html"; // <-- nueva página con lista de mentores
    } else {
      document.getElementById('resultado').innerHTML = `
        <div class="card">
          <p>No encontramos un mentor para esa especialidad. Intenta con otra.</p>
        </div>
  `;
  }
  });