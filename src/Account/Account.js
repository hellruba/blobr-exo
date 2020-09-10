import React, { useState } from 'react';
import useStyles from './styles';
import { ReactComponent as ArrowDown }  from '../icons/angle-down.svg';
import AccountSettings from '../AccountSettings/AccountSettings';

const Account = ({}) => {

    const [toShow, SettoShow] = useState(false);
    const styles = useStyles();

    const onClick = () => {
        SettoShow(!toShow);
    }
    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.title}>
                Pearson Specter Litt
            </div>
            <div className={styles.container}>
                <div className={styles.userName}>Mike Ross</div>
                <div className={styles.arrowContainer}>
                    <ArrowDown onClick={onClick}/>
                </div>
            </div>
            <AccountSettings toShow={toShow}/>
        </div>
    )
}
export default Account; 