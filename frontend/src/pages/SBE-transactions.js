import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Transactions() {
  const { txId } = useParams();
  const [transaction, setTransaction] = useState(null);
 
  useEffect(() => {
    axios.get(`/api/transactions/${txId}`)
      .then(response => setTransaction(response.data))
      .catch(error => console.error("Error fetching transaction:", error));
  }, [txId]);

  
  return (
    <div>
      <h1>Transaction Details</h1>
      {transaction ? (
        <pre>{JSON.stringify(transaction, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default Transactions;
