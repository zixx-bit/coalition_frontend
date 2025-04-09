import "./layout.scss";
import Left_side from '../left_side/Left_side.jsx';
import Right_side from '../Right_side/Right_side.jsx';
import Center from '../center/Center.jsx';

const Layout = () => {
  return (
    <div className='layout'>
        <div className='left_side'><Left_side/></div>
        <div className='center'><Center/></div>
        <div className='right_side'><Right_side/></div>
    </div>
  )
}

export default Layout

import { useEffect, useState } from 'react';
import axios from 'axios';

const MealsComponent = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const username = 'ccoalition';
    const password = 'skills-test';
    const auth = btoa(`${username}:${password}`);

    axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    })
    .then((res) => {
      console.log(res.data);
      setMeals(res.data);
    })
    .catch((err) => {
      console.error('Error fetching meals:', err);
    });
  }, []);

  return (
    <div>
      <h1>Meals</h1>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal.name}</li> {/* Adjust this based on actual data shape */}
        ))}
      </ul>
    </div>
  );
};

export default MealsComponent;
