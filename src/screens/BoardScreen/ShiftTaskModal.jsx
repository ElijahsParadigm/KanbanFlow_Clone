import { Dialog, Typography, Stack, Chip, Button } from "@mui/material";
import ModalHeader from "../../components/utilis/layout/ModalHeader";
import { statusMap } from "./BoardInterface";
import { useState } from "react";

const ShiftTaskModal = ({ onClose, statusList, task, shiftTask }) => {
  const [taskStatus, setTaskStatus] = useState(task.status);
  return (
    <Dialog open fullWidth maxWidth="xs">
      <Stack p={2}>
        <ModalHeader title="Shift task" onClose={onClose} />
        <Stack my={3} spacing={3}>
          <Stack spacing={1}>
            <Typography>Task:</Typography>
            <Typography p={1.5} bgcolor="black">
              {task.text}
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography>Status</Typography>
            <Stack direction="row" spacing={1}>
              {Object.entries(statusMap).map(([status, label]) => (
                <Chip
                  onClick={() => setTaskStatus(status)}
                  variant={taskStatus === status ? "filled" : "outlined"}
                  key={status}
                  label={label}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Button onClick={() => shiftTask(taskStatus)} variant="contained">
          Shift Task
        </Button>
      </Stack>
    </Dialog>
  );
};

export default ShiftTaskModal;
