import React from 'react';
import styles from './Stepper.module.css';

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className={styles.stepperContainer}>
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div className={styles.stepWrapper} key={index}>
            <div
              className={`${styles.circle} ${
                isCompleted ? styles.completed : isActive ? styles.active : ''
              }`}
            >
              {index + 1}
            </div>
            <div
              className={`${styles.label} ${
                isActive ? styles.activeLabel : ''
              }`}
            >
              {step}
            </div>
            {index !== steps.length - 1 && (
              <div className={styles.connector} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
