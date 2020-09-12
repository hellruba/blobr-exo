import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    backgroundContainer:
    {
        backgroundColor: 'black',
    },
    title: {
        color: 'white',
        fontSize: '15px',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '24px',
        paddingTop: '10px'
    },
    container: {
        display: 'flex',
    },
    userName: {
        color: '#39a34b',
        fontSize: '12px',
        paddingLeft: '15px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500
    },
    arrowContainer: {
        color: '#b3b3b3',
        position: 'relative',
        left: '40%',
        top: '-3px',
        cursor: 'pointer'
    }

});

export default useStyles;