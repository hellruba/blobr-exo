import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import MonthData from './data';
import { useHorizontalScroll } from '../HorizontalScroll/HorizontalScroll';

const MonthSection =  ({}) => {

    const styles = useStyles();

    
    const leftArrow ='<';
    const rightArrow = '>';
    const scrollRef = useHorizontalScroll();
    const onClickLeft = () => {
        console.log(scrollRef.current.scrollLeft)
        scrollRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    };
    const onClickRight = () => {
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeftMax,
            behavior: 'smooth'
        })
    }
    return <div className={styles.flex_display}>
        <div className={styles.leftArrow} onClick={onClickLeft}>{leftArrow}</div>
        <div className={styles.container} ref={scrollRef}>
            {MonthData.map((months, id) => {

        const cardStyle = id === MonthData.length - 1 ? styles.lastCard : styles.card;
        return <Card className={cardStyle}>
            <div className={styles.textMonthStyle}>
                {months.month}
            </div>
            <div className={styles.textYeartStyle}>
                {months.year}
            </div>
        </Card>
        })}
        
        </div>
        <div className={styles.rightArrow} onClick={onClickRight}>{rightArrow}</div>
    </div>
}
export default MonthSection;