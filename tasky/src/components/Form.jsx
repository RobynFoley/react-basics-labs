import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const AddTaskForm = (props) => {

  return (
    <div>
   <Box
  component="form"
  sx={{
    '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
  }}
  onSubmit={props.submit}
>
    <div>
  <TextField
    required
    id="outlined-required"
    name="title"
    label="Task Title"
    slotProps={{ inputLabel: { shrink: true } }}
    onChange={(event) => props.change(event)}
  />
</div>
<div>
  <TextField
    required
    name="deadline"
    label="Deadline"
    slotProps={{ inputLabel: { shrink: true } }}
    type="date"
    onChange={(event) => props.change(event)}
  />
</div>
<div>
  <TextField
    name="description"
    label="Task Details"
    slotProps={{ inputLabel: { shrink: true } }}
    multiline
    rows={4}
    onChange={(event) => props.change(event)}
  />
</div>
 <div>
          <TextField
            name="priority"
            label="Task Priority"
            slotProps={{ inputLabel: { shrink: true } }}
            select
            defaultValue=""
            onChange={(event) => props.change(event)}
          >
            <MenuItem value="">
              
            </MenuItem>
            <MenuItem value="low">
              Low
            </MenuItem>
            <MenuItem value="medium">
              Medium
            </MenuItem>
            <MenuItem value="high">
              High
            </MenuItem>
          </TextField>
        </div>
<div>
  <Button
    type="submit"
    variant="contained"
    color="primary"
    sx={{
      m: 1,
      p: 1,
      width: '95%'
    }}
  >
    Add Task
  </Button>
</div>

</Box>

    </div>
  )
};

export default AddTaskForm;
