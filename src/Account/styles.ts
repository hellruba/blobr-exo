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
        paddingTop: '10px'
    },
    container: {
        display: 'flex',
    },
    userName: {
        color: '#39a34b',
        fontSize: '12px',
        paddingLeft: '15px',

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