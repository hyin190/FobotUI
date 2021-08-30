import clsx from 'clsx';
import PageSkeleton from '../../layouts/drawerHeader';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({


  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function HomePage() {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const content = () => {
    return (
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <p>Home</p>
        </Paper>
      </Grid>
    </Grid>
  );
  };

  return(
    <PageSkeleton content={content}/>
  );
}