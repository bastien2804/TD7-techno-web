import React, { FunctionComponent, useState, useEffect } from 'react';
import superHerosData from './SuperHeros.json';

const App: FunctionComponent = () => {
  const nom: string = 'Toto';
  
  const [compteur, setCompteur] = useState(0);
  const [recherche, setRecherche] = useState('');
  
  useEffect(() => {
    document.title = `Compteur : ${compteur}`;
  }, [compteur]);
  
  const superHerosFiltres = superHerosData.filter(hero =>
    hero.name.toLowerCase().includes(recherche.toLowerCase())
  );
  
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
      
      <div>
        <p>Il y a {superHerosData.length} super-héros dans la base.</p>
        
        <div>
          <input
            type="text"
            placeholder="Rechercher un super-héros"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>
        
        <ul>
          {superHerosFiltres.map(hero => (
            <li key={hero.id}>{hero.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;