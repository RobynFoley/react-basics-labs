import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';


const Task = (props) => {
        return (
<Grid
  key={props.id}
  size={{ xs: 12, md: 4 }}
>
  <Card
    sx={{
      backgroundColor: props.done ? 'lightgrey' : '#f7d2e1',
      padding: '20px',
      boxShadow: '10px 10px',
      transition: 'transform 0.2s ease',

      '&:hover': {
      transform: 'scale(1.05)',
    },

    }}
  >
    <CardHeader
      title={props.title}
      sx={{
        backgroundColor: 'white',
        borderRadius: '3px',
        padding: '20px',
        textAlign: 'center'
      }}
    />

    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          mb: 2,
          padding: '20px'
        }}
      >
        <Typography
          component="p"
          variant="subtitle2"
          color="text.primary"
        >
          Due: {props.deadline}
        </Typography>
      </Box>

      <Typography
        component="p"
        variant="subtitle1"
        align="center"
        sx={{ fontStyle: 'italic' }}
      >
        {props.description}
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
        align="center"
        sx={{ fontStyle: 'italic',
              backgroundColor: props.priority === "low" ? "#d5f7d2" : props.priority === "medium" ? "#f7f5d2" : "#f7ccc1",
              marginTop: '1em'
         }}
      >
        {props.priority}
      </Typography>
    </CardContent>

    <CardActions
      sx={{
        justifyContent: 'space-between',
        padding: '15px'
      }}
    >
      <Button
        variant="contained"
        size="small"
        color="success"
        onClick={props.markDone}
      >
        Done
        <CheckIcon />

      </Button>

      <Button
        variant="contained"
        size="small"
        color="error"
        onClick={props.deleteTask}
      >
        Delete
        <DeleteIcon />
      </Button>
    </CardActions>
  </Card>
</Grid>



    )
}

export default Task;


