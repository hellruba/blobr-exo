import { makeStyles } from '@material-ui/styles';

const menuItemStyle = {
    display: 'flex',
    paddingLeft: '7px',
    paddingTop: '6px',
    paddingBottom: '5px'
}
const useStyles = makeStyles({

    iconContainer: {
        top: '-3px',
    },
    menuItems: {
        ...menuItemStyle
    },
    menuItemsOver: {
        ...menuItemStyle,
        backgroundColor: '#0071f2'
    },
    text: {
        color: 'white',
        paddingLeft: '10px',
        fontSize: '12px',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontStyle: 'normal'
    }
});

export default useStyles;