import * as React from 'react';
import useStyles  from './styles';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import DateSection from './DateSection/DateSection';
import MonthSection from './MonthSection/MonthSection';
import GraphSection from './GraphSection/GraphSection';
import StatisticSection from './StatisticSection/StatisticSection';
import ReviewSection from './ReviewSection/ReviewSection';

const App = ({}) => {   
   
  const style = useStyles();

  return (
    <div className={style.background}> 
     <Grid container>
        <Grid item xs={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={11}>
          <Header />
          <DateSection />
          <MonthSection />
          <GraphSection />
          <StatisticSection />
          <ReviewSection />
        </Grid>
     </Grid>
    </div>
  )
};
export default App;
