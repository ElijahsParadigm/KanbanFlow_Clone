import { Grid, Stack } from "@mui/material";
import { useState } from "react";
import BoardCard from "./BoardCard";
import CreateBoardModal from "./CreateBoardModal";
import Topbar from "./Topbar";

const BoardsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      {/* <NoBoards /> */}

      <Stack mt={5} px={3}>
        <Grid container spacing={4}>
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </Grid>
      </Stack>
    </>
  );
};

export default BoardsScreen;
