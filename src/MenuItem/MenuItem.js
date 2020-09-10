/* module import */
import React , { useState } from 'react';

/* extern files import */
import useStyles from './styles';

/* images imports */
import { ReactComponent as House } from './../icons/house.svg';
import { ReactComponent as Help } from './../icons/help.svg';
import { ReactComponent as Transactions} from './../icons/transactions.svg';
import { ReactComponent as Settings } from './../icons/settings.svg';
import { ReactComponent as Statistics } from './../icons/statistics.svg';

const MenuItem = ({
    menuText=[]
}) => {


    
    const styles = useStyles();
  
    const onHover = menuText === 'Statistics';
    const getIcons = () => {

        if (menuText === 'Get started')
        {
            return <House />
        }
        if (menuText === 'Transactions')
        {
            return <Transactions />
        }
        if (menuText === 'Statistics')
        {
            return <Statistics />
        }
        if (menuText === 'Settings')
        {
            return <Settings />
        }
        if (menuText === 'Help center')
        {
            return <Help />
        }
    }
    const Icon = getIcons();

    return (
    <div className={onHover ? styles.menuItemsOver : styles.menuItems}
    >
        <div className={styles.iconContainer}>
        {Icon}
        </div> 
        <div className={styles.text}>
        {menuText}
        </div>
    </div>
    );
}
export default MenuItem;