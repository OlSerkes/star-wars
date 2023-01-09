import React, { useEffect, useState } from 'react';
import { getStarship } from '../../services/sw-service';

const Starships = () => {
  const [starship, setStarship] = useState({});
  const [starshipImage, setStarshipImage] = useState(null);
  const [listNumber, setListNumber] = useState(2);

  useEffect(() => {
    getStarship(listNumber).then((res) => {
      setStarship(res.data.result.properties);
    });
    setStarshipImage(
      `https://starwars-visualguide.com/assets/img/starships/${listNumber}.jpg`
    );
  }, [listNumber]);

  const nextCart = () => {
    setListNumber(listNumber + 1);
  };

  const noImage = () => {
    setStarshipImage(
      'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
    );
  };

  return (
    <div>
      <button className='button' onClick={nextCart}>
        Next
      </button>
      <div className='cart-item'>
        <img
          className='person-img'
          src={starshipImage}
          onError={noImage}
          alt={starshipImage}
        />
        <div className='cart-info'>
          <h3>{starship.name}</h3>
          <ul>
            <li>
              <b>Model:</b> {starship.model}
            </li>
            <li>
              <b>Class:</b> {starship.starship_class}
            </li>
            <li>
              <b>Manufacturer:</b> {starship.manufacturer}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Starships;
