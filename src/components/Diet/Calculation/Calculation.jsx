import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import { useState } from 'react';

function Calculation() {
  const [MWState, setMWState] = useState(1);

    const MWTab = (index) => {
        setMWState(index);
    }
  return (
    <div className={styles.calculation}>
        <div className={styles.header}>
            <h2>Шаг 1 из 2.</h2>
            <h3>Расчет текущих потребностей.</h3>
        </div>
       
       <div className={styles.ManWoman}>
            <h1>Выберите пол</h1>
            <div className={cn([styles.MW, MWState === 1 && styles['MW-active']])} onClick={() => MWTab(1)}>Мужчина</div>
            <div className={cn([styles.MW, MWState === 2 && styles['MW-active']])} onClick={() => MWTab(2)}>Женщина</div>
       </div>

       <div className={styles.parametrs}>
        
          <div className={styles.blocks}>
            <h1 className={styles.text1}>Возраст</h1>
            <input className={styles.input}></input>
          </div>

          <div className={styles.blocks}>
            <h1 className={styles.text2}>Рост</h1>
            <input className={styles.input}></input>
          </div>

          <div className={styles.blocks}>
            <h1 className={styles.text3}>Пол</h1>
            <input className={styles.input}></input>
          </div>
          
      
       </div>
    </div>
  );
}

export default Calculation;