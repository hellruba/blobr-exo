import React from 'react';
import useStyles from './styles';
import StatisticData from './StatisticData';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const StatisticSection = ({}) => {

    const styles = useStyles();

    return <div className={styles.container}>
        <div className={styles.title}>
            Statistics
        </div>

        <Grid className={styles.gridContainer}>
        {StatisticData.map((data) => {

        return <Grid item xs={3} className={styles.gridItems}>
            <Card className={styles.title_container}>
                {data.title}
                <div className={styles.flex_container}>
                <div className={styles.transactionText}>
                    Transactions
                </div>
                </div>
            </Card>
            <Card className={styles.values_container}>
                {data.prix}
                <div className={styles.flex_container}>
                    <div className={styles.nombre_container}>
                        {data.nombre_transaction}
                    </div>
                </div>
            </Card>
            <Card className={styles.bottomCard}>
                {data.compare_title}
                <div className={styles.dataContainer}>
                    {data.compared_value}
                    <div className={styles.flex_container}>
                        <div className={styles.nombre_data_compared}>
                            0
                        </div>
                    </div>
                </div>
            </Card>
        </Grid>
        })}
    </Grid>
    </div>
};

export default StatisticSection;