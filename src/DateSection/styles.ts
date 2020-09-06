import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

    dateFilterContainer: {
        display: 'flex',
        justifyContent: 'right',
        marginTop: '50px',
        marginRight: '30px'
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
        fontSize: '11px',
        color: 'grey',
        padding: '6px'
    },
    textSelectedStyle: {
        color: '#0071f2',
        fontSize: '11px',
        padding: '6px'
    }
});

export default useStyles;
