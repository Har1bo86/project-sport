import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import Calculation from './Calculation/Calculation';
import Table from './Table/Table';

function Diet() {
  return (
    <div className={styles.diet}>
        <Calculation/>
        <Table/>
    </div>
  );
}

export default Diet;