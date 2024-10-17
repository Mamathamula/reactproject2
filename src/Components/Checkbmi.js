import React, { useState } from 'react';
import './Bmi.css';

const Checkbmi = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const h = height / 100; // Convert height to meters
      const bmiValue = Math.round(weight / (h * h));
      setBMI(`BMI value is = ${bmiValue}`);

      if (bmiValue <= 18.5) {
        setCategory("Underweight");
        setColor("white");
      } else if (bmiValue > 18.5 && bmiValue <= 25) {
        setCategory("Normal");
        setColor("orange");
      } else if (bmiValue > 25 && bmiValue <= 30) {
        setCategory("Overweight");
        setColor("red");
      } else {
        setCategory("Obesity");
        setColor("green");
      }
    }
  };

  return (
    <div className='bmi'>
      <div className=''>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <img 
              className="img-fluid" 
              src='https://images.pexels.com/photos/6670508/pexels-photo-6670508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
              alt="BMI Graphic" 
              height={200} 
            />
          </div>
          <div className='col-md-6 card1 bg-dark text-light' id="mam">
            <h1 className='pt-3 text-center' id="h1">BMI Calculator</h1>
            <div className='input-group mb-3'>
              <label className='input-label'>Weight (kgs):</label>
              <input
                type="range"
                min="20"
                max="100"
                step="1" // Changed step to 1 for better precision
                value={weight}
                id="range"
                onChange={(e) => setWeight(e.target.value)}
                className="form-range"
              />
              <div className='text-center'>{weight} kgs.</div>
            </div>
            <div className='input-group mb-3'>
              <label className='input-label'>Height (cm):</label>
              <input 
                type="range" 
                min="50" 
                max="250" 
                step="1" // Changed step to 1 for better precision
                value={height}
                id="range1"
                onChange={(e) => setHeight(e.target.value)}
                className="form-range"
              />
              <div className='text-center'>{height} cm.</div>
            </div>
            <button onClick={calculateBMI} className='btn btn-primary w-100'>Calculate BMI</button>
            <h3 className='mt-3'>{bmi}</h3>
            <h2 id='bmi-category' style={{ color }}>{category}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkbmi;
