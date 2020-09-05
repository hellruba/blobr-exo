import React from 'react';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';

const Header = ({}) => {

    const styles = useStyles();
    return <Paper className={styles.container} elevation={0} square>
        <div className={styles.title}>
        Statistics
        </div>
    </Paper>
}
export default Header;