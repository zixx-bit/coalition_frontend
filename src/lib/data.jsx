import { useEffect, useState } from 'react';
import axios from 'axios';

const Data = () => {
  let [patients, setPatients] = useState([]);

  useEffect(() => {    
    const username = 'coalition';
    const password = 'skills-test';
    const auth = btoa(`${username}:${password}`);

    axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    })
    .then((res) => {
      console.log(res.data[3]);
      setPatients(res.data[3]);
      
    })
    .catch((err) => {
      console.error('Error fetching data', err);
    }); 
  }, []);

  const Jessica = patients[3];
  console.log(Jessica)

  return (
    <div>
      <h3>{patients.name}</h3>
    </div>
  );
};

export default Data;



