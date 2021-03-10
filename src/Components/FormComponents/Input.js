import React from 'react';
import styles from '../../Styles/FormComponents/Input.module.css';

const Input = ({ label, type, name, value, onChange, onBlur, error }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
