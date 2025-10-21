import React, { FunctionComponent, useState } from 'react';

const App: FunctionComponent = () => {
  const nom: string = 'Toto';
  
  const [compteur, setCompteur] = useState(0);
  
  return (
    <div>
      <h1>Bonjour {nom}, je découvre React !</h1>
      
      <div>
        <p>Compteur : {compteur}</p>
        
        <button onClick={() => setCompteur(compteur + 1)}>
          +
        </button>
        
        <button onClick={() => setCompteur(0)}>
          Réinitialiser
        </button>
      </div>
    </div>
  )
}

export default App;