import dayjs from 'dayjs';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "100px",
    width: "100px",
  },
}));


const user = {
  avatar: 'https://1.bp.blogspot.com/-38kV4lz3m3o/XaKa2982W7I/AAAAAAABVjc/OezCnQ8yUP8BC5j-Opl7jg89VultcHjnACNcBGAsYHQ/s400/face_mark_hemehemekukohi.png',
  city: 'Tkyo',
  country: 'JPN',
  name: 'Sample User',
  timezone: 'UTC+0900'
};


const Profile = (props) => {
  const classes = useStyles();

  return (
    <Card {...props}>
      <CardContent>
        <Box
          alignItems='center'
          display='flex'
          flexDirection='column'
        >
          <Avatar
            src={user.avatar}
            className={classes.avatar}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${dayjs().format('YYYY/MM/DD')} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>

      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  )
};


export default Profile;