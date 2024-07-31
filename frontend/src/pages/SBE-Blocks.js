import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Blocks() {
  const { blockId } = useParams();
  const [block, setBlock] = useState(null);

  
  useEffect(() => {
    axios.get(`/api/blocks/${blockId}`)
      .then(response => setBlock(response.data))
      .catch(error => console.error("Error fetching block:", error));
  }, [blockId]);

  
  return (
    <div>
      <h1>Block Details</h1>
      {block ? (
        <pre>{JSON.stringify(block, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default Blocks;
