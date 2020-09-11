import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

    dateFilterContainer: {
        display: 'flex',
        justifyContent: 'right',
        marginTop: '50px',
        marginRight: '60px'
    },
    leftCard: {
        borderBottomRightRadius: '0px',
        borderTopRightRadius: '0px'
    },
    card: {
        borderRadius: '0px'
    },
    rightCard: {
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
    },
    textStyle: {
        fontSize: '14px',
        color: '#4D4D4D',
        padding: '6px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'Inter'
    },
    textSelectedStyle: {
        color: '#0071f2',
        fontSize: '14px',
        padding: '6px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'Inter'
    }
});

export default useStyles;
