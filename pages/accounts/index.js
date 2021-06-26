import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';


const Account = () => (
  <>
    <Box
        minHeight='100%'
        py={3}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Profile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <ProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);


export default Account;