import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

    container: {
        display:'flex',
        position: 'absolute',
        top: '50px',
        left: '5px'
    },
    cardContainer: {
        display: 'block',
        width: '145px'
    },
    contentContainer: {
        display: 'flex',
        padding: '5px'
    },
    textContainer: {
        fontSize: '14px',
        paddingLeft: '5px'
    }
});
export default useStyles;