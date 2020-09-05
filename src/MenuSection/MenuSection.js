import React, {useState} from 'react';
import useStyles from './styles';
import MenuItem from '../MenuItem/MenuItem';

const menuItems = [
    'Get started',
    'Transactions',
    'Statistics',
    'Settings',
    'Help center'
];


const MenuSection = ({}) => {

    const styles = useStyles();

    return (
        
        <div className={styles.Menucontainer}>
            {menuItems.map((menuText) => {
                return <MenuItem menuText={menuText} />
            })}
        </div>
    )
}
export default MenuSection;