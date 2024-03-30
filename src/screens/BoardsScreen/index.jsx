import { Grid, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import BoardCard from "./BoardCard";
import CreateBoardModal from "./CreateBoardModal";
import Topbar from "./Topbar";
import NoBoards from "./NoBoards";
import useApp from "../../hooks/useApp";

const BoardsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const { fetchBoards } = useApp();

  useEffect(() => {
    fetchBoards();
  }, []);
  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      <NoBoards />

      <Stack mt={5} px={3}>
        <Grid container spacing={4}>
          {/* <BoardCard />
          <BoardCard />
          <BoardCard /> */}
        </Grid>
      </Stack>
    </>
  );
};

export default BoardsScreen;
