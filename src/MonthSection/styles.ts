import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

    flex_display: {
        justifyContent: 'right',
        display: 'flex',
        marginRight: '50px'
    },
    container: {
        display: 'flex',
        overflowX: 'auto',
        marginTop: '30px',
        width: '1650px',
        scrollbarWidth: 'none'
    },
    card: {
        borderRadius: '0px',
        paddingLeft: '30px',
        paddingRight: '30px',
        textAlign: 'center',
        minWidth: '60px',
        minHeight: '10px'
    },
    textMonthStyle: {
        fontSize: '14px',
        fontWeight: 600,
        fontStyle: 'normal',
        fontFamily: 'Inter'
    },
    textYeartStyle: {
        color: '#4D4D4D',
        fontSize: '12px',
        fontWeight: 'normal',
        fontFamily: 'Inter',
        fontStyle: 'normal'
    },
    leftArrow: {
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        left: '15px',
        top: '13px',
        color: 'grey',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    rightArrow: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        right: '15px',
        top: '13px',
        color: 'grey',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    lastCard: {
        color: '#0071F2',
        fontSize: '14px',
        fontWeight: 600,
        fontStyle: 'normal',
        fontFamily: 'Inter',
        borderRadius: '0px',
        paddingLeft: '30px',
        paddingRight: '30px',
        textAlign: 'center',
        minWidth: '60px',
        minHeight: '10px'
    }
});

export default useStyles;