import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import MonthData from './data';


const MonthSection =  ({}) => {

    const styles = useStyles();

    return <div className={styles.container}>
        {MonthData.map((months) => {

    return <Card className={styles.card}>
        <div className={styles.textMonthStyle}>
            {months.month}
        </div>
        <div className={styles.textYeartStyle}>
            {months.year}
        </div>
    </Card>
    })}
    </div>
}
export default MonthSection;