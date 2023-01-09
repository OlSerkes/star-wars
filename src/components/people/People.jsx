import React, { useEffect, useState } from 'react';
import { getPerson } from '../../services/sw-service';

const People = () => {
  const [person, setPerson] = useState({});
  const [personImage, setPersonImage] = useState(null);
  const [listNumber, setListNumber] = useState(1);

  useEffect(() => {
    getPerson(listNumber).then((res) => {
      setPerson(res.data.result.properties);
    });
    setPersonImage(
      `https://starwars-visualguide.com/assets/img/characters/${listNumber}.jpg`
    );
  }, [listNumber]);

  const nextCart = () => {
    setListNumber(listNumber + 1);
  };

  const noImage = () => {
    setPersonImage(
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
          src={personImage}
          alt={personImage}
          onError={noImage}
        />
        <div className='cart-info'>
          <h3>{person.name}</h3>
          <ul>
            <li>
              <b>Gender:</b> {person.gender}
            </li>
            <li>
              <b>Birth year:</b> {person.birth_year}
            </li>
            <li>
              <b>Eye color:</b> {person.eye_color}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default People;
