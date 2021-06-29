// import React from 'react';
// import GroupCard from './GroupCard';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';


// const useStyles = makeStyles((theme) => ({
//   grid: {
//     flexGrow: 1,
//   },
// }));

// export default function GlidList() {
//   const classes = useStyles();

//   function FormRow() {
//     return (
//       <React.Fragment>
//         <Grid item xs={4}>
//           <GroupCard/>
//         </Grid>
//         <Grid item xs={4}>
//         <GroupCard/>
//         </Grid>
//         <Grid item xs={4}>
//         <GroupCard/>
//         </Grid>
//       </React.Fragment>
//     );
//   }

//   return (
//     <div className={classes.grid}>
//       <Grid container spacing={1} justify='space-evenly'>
//         <Grid container item xs={12} spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item xs={12} spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item xs={12} spacing={3}>
//           <FormRow />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }