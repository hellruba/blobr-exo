import * as React from 'react';
import useStyles from './styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Account = ({}) => {

    const styles = useStyles();
    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.title}>
                Pearson Specter Litt
            </div>
            <div className={styles.container}>
                <div className={styles.userName}>Mike Ross</div>
                <div className={styles.arrowContainer}>
                    <ArrowDropDownIcon />
                </div>
            </div>
        </div>
    )
}
export default Account; 