import React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

function Tabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
     <div className={styles.block}>
        <div className={styles.header}>
            <div className={cn([styles.step, toggleState === 1 && styles['step-active']])} onClick={() => toggleTab(1)}>Шаг 1</div>
            <div className={cn([styles.step, toggleState === 2 && styles['step-active']])} onClick={() => toggleTab(2)}>Шаг 2</div>
            <div className={cn([styles.step, toggleState === 3 && styles['step-active']])} onClick={() => toggleTab(3)}>Шаг 3</div>
        </div>
        
        <div className={styles.content}>
            <div className={cn([styles.element, toggleState === 1 && styles['element-active']])}>
                <h1>Для кого-то это будет открытием, но вы можете осознанно, самостоятельно регулировать свой вес, снижать или увеличивать его по желанию и все, что для этого нужно – грамотно составленный план питания и сила воли, чтобы его придерживаться. Нет никаких уловок, чудо-средств или магии, только суровые законы природы. Это будет нелегко, потребуется немало времени и усилий. Но, следуя простым рекомендациям, вы добьётесь своего. Эта страница создана специально для того, чтобы каждый смог самостоятельно составить собственный план питания, идеально подходящий именно ему. На самом деле, это вовсе не так долго и сложно, как может показаться сначала. Просто следуйте инструкциям на этой странице – и у вас все получится!</h1>
            </div>
            <div className={cn([styles.element, toggleState === 2 && styles['element-active']])}><h1>3143</h1></div>
            <div className={cn([styles.element, toggleState === 3 && styles['element-active']])}>21ws22s1</div>
        </div>

     </div>
  );
}

export default Tabs;
