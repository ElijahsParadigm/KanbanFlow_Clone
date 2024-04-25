import { Grid, Stack, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import Task from "./Task";

const BoardTab = ({ name, addTask }) => {
  return (
    <Grid item xs={4}>
      <Stack p={3} bgcolor="#365">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight={400} variant="h6">
            {name}
          </Typography>
          <IconButton onClick={addTask}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Stack mt={3} spacing={2}>
          <Task />
          <Task />
          <Task />
        </Stack>
      </Stack>
    </Grid>
  );
};

export default BoardTab;
