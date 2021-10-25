import React, { useEffect, useState } from 'react';
// import ProdContext from '../context_API/ProdContext';
// import { Link, useHistory } from 'react-router-dom';

// import { AppComponent } from ''
import Emojis from './components/Emojis'

function App() {
  const [oneItem, setOneItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/`).then((response) => response.json()).then(({ results }) => {
      setOneItem(results);
    })
  }, []);

  return (
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9_kANCDvB4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {!oneItem ? <p>carregando</p> : oneItem.map((emoji) => 
        <Emojis 
        id={emoji._id}
        name={emoji.name}
        image={ emoji.image }
        votes={ emoji.votes }
        />
      )}
    </div>
  );
}

export default App;
