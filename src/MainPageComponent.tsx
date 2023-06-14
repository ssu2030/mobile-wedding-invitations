import React from 'react';

import IntroPageComponent from 'page/IntroPageComponent';
import styles from 'style/MainPage.module.scss';

const MainPageComponent:React.FC = () => {


    return <div className={styles.mainWrapper}> 
        <div className={styles.centerDivision}>
            <IntroPageComponent/>
        </div>
    </div>;
}

export default MainPageComponent;