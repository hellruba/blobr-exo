import * as React from 'react';
import { ReactComponent as House } from './icons/house.svg';
import { ReactComponent as Help } from './icons/help.svg';
import { ReactComponent as Transactions} from './icons/transactions.svg';
import { ReactComponent as Settings } from './icons/settings.svg';
import { ReactComponent as Statistics } from './icons/statistics.svg';

import useStyles from './styles';

const menuItems = [
    'Get started',
    'Transactions',
    'Statistics',
    'Settings',
    'Help center'
];

const getIcons = (menuItem) => {

    if (menuItem == 'Get started')
    {
        return <House />
    }
    if (menuItem == 'Transactions')
    {
        return <Transactions />
    }
    if (menuItem == 'Statistics')
    {
        return <Statistics />
    }
    if (menuItem == 'Settings')
    {
        return <Settings />
    }
    if (menuItem == 'Help center')
    {
        return <Help />
    }
}
const MenuSection = ({}) => {

    const styles = useStyles();

   

    return (
        
        <div className={styles.Menucontainer}>
            {menuItems.map((menuItem) => {

                const Icon = getIcons(menuItem);
                return (
                <div className={styles.menuItems}>
                    {Icon}
                    <div className={styles.text}>
                    {menuItem}
                    </div>
                </div>
                );
            })}
        </div>
    )
}
export default MenuSection;