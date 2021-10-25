import React, { useEffect, useState } from 'react';
import socket from '../utils/socketClient'

function Emoji({ id, name, image, votes }) {
  const [currentVotes, setCurrentVotes] = useState(votes);

  useEffect(() => {
    socket.on('refreshCurrentVotes', (emote) => {
      console.log(emote)
      if (emote._id === id) setCurrentVotes(emote.votes);
    });
  }, []);
  
  const handleClick = () => {
    socket.emit('increaseVotes', { id });
  };
  
return (
  <div>
    <button onClick={ () => handleClick() }>
      <img width="50" src={ image } alt={name} />
    </button>
    <p>{currentVotes}</p>
  </div>
);
}

export default Emoji;


