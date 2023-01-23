import React, { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { addCarReduser } from '../../../features/garageSlice';
import { createCar } from '../../../services/services';
import styles from './Fieldset.module.css';

type BtnProps = {
  props: string;
};
export function Fieldset({ props }: BtnProps) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#ffffff');
  const dispatch = useAppDispatch();
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const changeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };
  const addCar = () => {
    createCar({ name, color });
  };
  console.log(addCar);
  return (
    <fieldset className={styles.fieldset}>
      <input value={name} onChange={changeName} className={styles.input__text} />
      <input type="color" value={color} onChange={changeColor} className={styles.form__color} />
      <button
        type="button"
        onClick={() =>
          dispatch(
            addCarReduser({
              color,
              name
            })
          )
        }
        className={styles.form__btn}
      >
        {props}
      </button>
    </fieldset>
  );
}
