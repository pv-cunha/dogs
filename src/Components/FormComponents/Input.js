import React from 'react';
import styles from '../../Styles/FormComponents/Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input type={type} id={name} name={name} className={styles.input} />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
