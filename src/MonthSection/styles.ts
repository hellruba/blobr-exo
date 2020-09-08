import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

    container: {
        display: 'flex',
        overflowX: 'auto',
        marginTop: '30px',
    },
    card: {
        borderRadius: '0px',
        paddingLeft: '10px',
        paddingRight: '10px',
        
        minWidth: '50px',
        minHeight: '10px'
    },
    textMonthStyle: {
        color: 'black',
        fontSize: '12px',
    },
    textYeartStyle: {
        color: 'grey',
        fontSize: '10px'
    }
});

export default useStyles;