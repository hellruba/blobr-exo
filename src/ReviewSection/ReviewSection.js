import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import ReviewData from './ReviewData';

const ReviewSection = ({}) => {

    const styles = useStyles();

    return <div className={styles.container}>
        <div className={styles.title_section}>
            Per day
        </div>
        {ReviewData.map((data, id) => {
        
        const card_style = id === 0 ? styles.first_card 
        : (id === ReviewData.length - 1 ? styles.last_card: styles.cardContainer);
        
        const first = id === 0 ? styles.transactions_font : styles.nb_container;
        const date_font = id === 0 ? styles.date_container : styles.date_title_container;
        return <Card className={card_style}>
           <div className={date_font}>
            {data.Date}
            </div>
            <div className={styles.revenue_container}>
                {data.Revenue}
                <div className={first}>
                    {data.nb_revenu}
                </div>    
            </div> 
            <div className={styles.refunds_container}>
                {data.refunds}
                <div className={first}>
                    {data.nb_refunds}
                </div>
            </div>
            <div className={styles.chargebacks_container}>
                {data.chargebacks}
                <div className={first}>
                    {data.nb_chargebacks}
                </div>
            </div>
        </Card>}
        )}

    </div>
}

export default ReviewSection;