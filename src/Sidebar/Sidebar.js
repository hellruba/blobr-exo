import * as React from 'react';
import useStyles from './styles';
import Account from '../Account/Account';

const Sidebar = ({}) => {

    const styles = useStyles();
    return (
        <div className={styles.backgroundSidebar}>
            <Account />
        </div>
    )
}
export default Sidebar;