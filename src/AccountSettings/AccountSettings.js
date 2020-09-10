import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import { ReactComponent as User } from '../icons/user.svg';
import { ReactComponent as Logout } from '../icons/logout.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';

const SettingsValues = [
    'Account settings',
    'New organization',
    'Log out'
];
const AccountSettings = ({toShow = []}) => {


    const styles = useStyles();

    const getIcons = (values) => {
        if (values === 'Account settings') {
            return <User />
        }
        if (values === 'New organization') {
            return <Plus />
        }
        if (values === 'Log out') {
            return <Logout />
        }
    }
    return toShow ? <div className={styles.container}>
        <Card className={styles.cardContainer}>
            {
            
                SettingsValues.map((values) => {
                    
                    const icon = getIcons(values);
                    return <div className={styles.contentContainer}>
                        {icon}
                        <div className={styles.textContainer}>
                            {values}
                        </div>
                    </div>
                })
            }
        </Card>
    </div> : <div />
}

export default AccountSettings;