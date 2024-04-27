import { Stack, Grid, Typography, IconButton, Box } from "@mui/material";
import OpenIcon from "@mui/icons-material/Launch";
import { colors } from "../../theme";
import { useNavigate } from "react-router-dom";

const BoardCard = ({ name, color, createdAt, id }) => {
  const navigate = useNavigate();
  return (
    // Make adjustment to the board card for mobile device. Add xs={12}
    <Grid item xs={12} sm={3}>
      <Stack
        p={2}
        bgcolor="background.paper"
        borderLeft="5px solid"
        borderColor={colors[color]}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width="50%">
            <Typography
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              fontWeight={400}
              variant="h6"
            >
              {name}
            </Typography>
          </Box>

          <IconButton onClick={() => navigate(`/boards/${id}`)} size="small">
            <OpenIcon />
          </IconButton>
        </Stack>
        <Typography variant="caption"> Created at: {createdAt}</Typography>
      </Stack>
    </Grid>
  );
};

export default BoardCard;
