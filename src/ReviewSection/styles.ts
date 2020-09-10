import {  makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        width: '100%'
    },
    title_section: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '10px',
        marginLeft: '30px',
        marginBottom: '10px'
    },
    date_container:{
        width: '200px',
        padding: '5px',
        fontWeight: 'bold'
    },
    date_title_container:
    {
        width: '200px',
        padding: '5px',
        color: 'grey',
        fontSize: '11px'
    },
    first_card: {
        display: 'flex',
        marginLeft: '30px',
        width: '875px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
    },
    last_card: {
        display: 'flex',
        marginLeft: '30px',
        width: '875px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px'
    },
    cardContainer: {
        display: 'flex',
        marginLeft: '30px',
        width: '875px',
        borderRadius: '0px'
    },
    transactions_font: {
        color: 'grey',
        fontSize: '11px',
        fontWeight: 'normal'
    },
    revenue_container: {
        display: 'flex',
        fontWeight: 'bold',
        width: '200px',
        fontFamily: 'Inter',
        padding: '5px', 
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    nb_container: {
        color: 'grey',
        fontSize: '11px',
        paddingRight: '17px',
        fontWeight: 'normal'
    },
    refunds_container: {
        display: 'flex',
        width: '200px',
        fontWeight: 'bold',
        fontFamily: 'Inter',
        padding: '5px',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    chargebacks_container: {
        alignItems: 'center',
        display: 'flex',
        width: '200px',
        padding: '5px',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        justifyContent: 'space-around'
    }
});

export default useStyles;