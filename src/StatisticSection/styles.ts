import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

    container: {
        marginTop: '10px'
    },
    title: {
        fontSize: '21px',
        color: 'black',
        marginTop: '10px',
        marginLeft: '30px',
        marginBottom: '10px',
        fontWeight: 'bold'
    },
    gridContainer: {
        display: 'flex',
    },
    flex_container: {
        display:'flex',
        width: '100%',
        flexDirection: 'row-reverse'
    },
    gridItems: {
        marginLeft: '30px'
    },
    transactionText: {
       color: 'grey',
       fontWeight: 'normal',
       fontSize: '11px'
    },
    bottomCard: {
        padding: '7px',
        maxWidth: '300px',
        borderTopRightRadius: '0px',
        borderTopLeftRadius: '0px',
        fontSize: '14px',
        fontWeight: 'bold'
    },
    dataContainer: {
        fontSize: '11px',
        fontWeight: 'normal',
        color: 'gray',
        display: 'flex'
    },
    title_container: {
        color: 'black',
        display: 'flex',
        fontWeight: 'bold',
        padding: '7px',
        maxWidth: '300px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        fontSize: '13px'
    },
    values_container: {
        display: 'flex',
        padding: '7px',
        maxWidth: '300px',
        borderRadius: '0px',
        fontSize: '20px',
        fontWeight: 'bold'
        
    },
    nombre_container: {
        fontWeight: 'normal'
    },
    nombre_data_compared: {

    },
    compared_container: {
        backgroundColor: 'white'
    }
});

export default useStyles;