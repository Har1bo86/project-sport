import React from "react";
import icon from '../../items/icon.jpg';
import logo from '../../items/photo.png';
import cn from 'classnames';
import styles from './index.module.scss';
function Header() {
    return (
      <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.main}>
        <img src={icon} alt="icon" className={styles.icon} />
          <p className={styles.p}>Спорт как образ жизни</p>
        </div>
      <h1 className={styles.text}>Стань атлетом</h1>
      <h1 className={styles.text1}> с Haribo</h1>
        <button className={styles.racion}>Рацион питания</button>
        <button className={styles.plan}>План Тренировок</button>
      </div>
      <div className={styles.right}>
      <img src={logo} alt="logo" className={styles.img} />
        <div className={styles.krug}></div>
      </div>
      </div>
    );
  }
  
  export default Header;
  