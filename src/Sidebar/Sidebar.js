import * as React from 'react';
import useStyles from './styles';
import Account from '../Account/Account';
import MenuSection from '../MenuSection/MenuSection';

const Sidebar = ({}) => {

    const styles = useStyles();
    return (
        <div className={styles.backgroundSidebar}>
            <Account />
            <MenuSection />
        </div>
    )
}
export default Sidebar;