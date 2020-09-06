import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';

const filterDateData = [
    'Days',
    'Weeks',
    'Months',
    'Quarters',
    'Years',
    'Custom'
]
const DateSection = ({}) =>  {

    
    const styles = useStyles();
    return <div className={styles.dateFilterContainer}>
        {filterDateData.map((filterText, id) => {

            let  end = filterDateData.length - 1;
            const cardStyle = id === 0 ? styles.leftCard 
            : (id === end ? styles.rightCard : styles.card);

            const selectedText = filterText === 'Months' ? 
            styles.textSelectedStyle : styles.textStyle;
            return <Card className={cardStyle}>
                <div className={selectedText}>
                    {filterText}
                </div>
            </Card>
        })}
    </div>
};

export default DateSection;