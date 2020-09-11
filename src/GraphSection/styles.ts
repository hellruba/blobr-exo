import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

    container: {
        display: 'flex',
        backgroundColor: 'white',
        marginTop: '30px',
        marginBottom: '20px',
        height: '300px',

    },
    circle_style: {
        borderRadius: '50%',
        color: '#59BBFF',
        width: '7px',
        height: '7px',
        border: '1px solid',
        display: 'flex'
    }
});

export default useStyles;