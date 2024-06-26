import { Snackbar } from "@mui/material";
import useStore from "../../../store";

// Provides the user with error messages.
const SnackbarManager = () => {
  const { toastrMsg, setToastr } = useStore();
  return (
    <Snackbar
      message={toastrMsg}
      open={!!toastrMsg}
      autoHideDuration={5000}
      onClose={() => setToastr("")}
    />
  );
};

export default SnackbarManager;
