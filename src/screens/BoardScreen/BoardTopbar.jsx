import { AppBar, Toolbar, Stack, Typography, IconButton } from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";

const BoardTopbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        borderBottom: "5px solid",
        borderColor: "green",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack spacing={1} alignItems="center" direction="row">
          <IconButton>
            <BackIcon />
          </IconButton>
          <Typography variant="h6">Board Name</Typography>
        </Stack>
        <Stack spacing={2} alignItems="center" direction="row">
          <Typography variant="body2">
            updated: 04/04/2024, 12:09:00 PM
          </Typography>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default BoardTopbar;
