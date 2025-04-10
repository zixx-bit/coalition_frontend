import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PatientContext = createContext();

const PatientProvider = ({ children }) => {
  const [patient, setPatient] = useState([]);

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
      setPatient(res.data[3]);
      
    })
    .catch((err) => {
      console.error('Error fetching data', err);
    }); 
  }, []);


  return (
    <PatientContext.Provider value={{patient}}>
      {children}
    </PatientContext.Provider>
    
  );
};

export default PatientProvider;



