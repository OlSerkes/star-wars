import React, { useState, useEffect } from 'react';
import { getPlanets } from '../../services/sw-service';

const Planets = () => {
  const [planet, setPlanet] = useState({});
  const [planetImage, setPlanetImage] = useState(null);
  const [listNumber, setListNumber] = useState(2);

  useEffect(() => {
    getPlanets(listNumber).then((res) => {
      const allPlanets = res.data.result.properties;
      setPlanet(allPlanets);
    });
    setPlanetImage(
      `https://starwars-visualguide.com/assets/img/planets/${listNumber}.jpg`
    );
  }, [listNumber]);

  const cartHandler = () => {
    setListNumber(listNumber + 1);
  };

  const noImage = () => {
    setPlanetImage(
      'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
    );
  };

  return (
    <div>
      <button className='button' onClick={cartHandler}>
        Next
      </button>
      <div className='cart-item'>
        <img src={planetImage} alt={planetImage} onError={noImage} />
        <div className='cart-info'>
          <h3>{planet.name}</h3>
          <ul>
            <li>
              <b>Planet climate:</b> {planet.climate}
            </li>
            <li>
              <b>Planet diameter:</b> {planet.diameter}
            </li>
            <li>
              <b>Planet population:</b> {planet.population}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Planets;
