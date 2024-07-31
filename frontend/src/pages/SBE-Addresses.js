import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Addresses() {
  const { address } = useParams();
  const [account, setAccount] = useState(null);

  
  useEffect(() => {
    axios.get(`/api/addresses/${address}`)
      .then(response => setAccount(response.data))
      .catch(error => console.error("Error fetching address:", error));
  }, [address]);
  

  return (
    <div>
      <h1>Account Details</h1>
      {account ? (
        <pre>{JSON.stringify(account, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default Addresses;
  
