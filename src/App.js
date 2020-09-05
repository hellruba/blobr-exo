import * as React from 'react';
import useStyles  from './styles';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar/Sidebar';
const App = ({}) => {   
   
  const style = useStyles();

  return (
    <div className={style.background}> 
     <Grid container>
        <Grid item xs={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={11}>

        </Grid>
     </Grid>
    </div>
  )
};
export default App;
