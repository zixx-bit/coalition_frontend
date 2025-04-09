import { useEffect, useState } from 'react';
import axios from 'axios';

const Data = () => {
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
      console.log(res.data);
      setPatient(res.data);
    })
    .catch((err) => {
      console.error('Error fetching data', err);
    }); 
  }, []);

  return (
    <div>
      <h1>patient</h1>
      <ul>
      {patient.map(())}
      <ul>
        {Object.entries(patient).map(([key, value]) => (
          <li key={key}>{patient.name}</li>
        ))}
      </ul>
      </ul>
    </div>
  );
};

export default Data;







  // return (
  //   <div>
  //     {meals.map((meal) => (
  //     <img key={meal.idMeal} src={meal.strMealThumb} alt={meal.strMeal} width={400}/>
  //     ))}
  //   </div>
  //   )