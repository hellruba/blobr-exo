import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

    container: {
        marginTop: '10px'
    },
    title: {
        fontSize: '22px',
        color: 'black',
        marginTop: '10px',
        marginLeft: '85px',
        marginBottom: '10px',
        fontWeight: 'bold',
        fontFamily: 'Inter',
        lineHeight: '27px'

    },
    gridContainer: {
        display: 'flex',
        justifyContent: 'space-around'
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
       fontSize: '12px',
       fontFamily: 'Inter',
       lineHeight: '15px'
    },
    bottomCard: {
        padding: '7px',
        borderTopRightRadius: '0px',
        borderTopLeftRadius: '0px',
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '19px',
        fontFamily: 'Inter',
        fontStyle: 'normal'
    },
    dataContainer: {
        fontSize: '12px',
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 'normal',
        color: 'grey',
        
        display: 'flex',
    },
    title_container: {
        color: 'black',
        display: 'flex',
        fontWeight: 'bold',
        padding: '7px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        fontSize: '16px',
        fontStyle: 'normal',
        fontFamily: 'Inter',
        lineHeight: '19px'
    },
    values_container: {
        display: 'flex',
        padding: '7px',
        fontStyle: 'normal',
        fontFamily: 'Inter',
        borderRadius: '0px',
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '29px'
        
    },
    nombre_container: {
        fontWeight: 'normal',
        lineHeight: '29px'
    
    },
    nombre_data_compared: {

    },
    compared_container: {
        backgroundColor: 'white'
    }
});

export default useStyles;