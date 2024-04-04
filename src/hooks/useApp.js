import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import useStore from "../store";

const useApp = () => {
  const {
    currentUser: { uid },
  } = getAuth();
  const boardsColRef = collection(db, `users/${uid}/boards`);
  const { setBoards, addBoard } = useStore();

  // Create the boards screen tajt will allow user to create a board name, pick a color
  // and has a time stamp of board creation.
  const createBoard = async ({ name, color }) => {
    try {
      await addDoc(boardsColRef, {
        name,
        color,
        createdAt: serverTimestamp(),
      });
      addBoard({ name, color, createdAt: new Date().toLocaleDateString() });
    } catch (err) {
      // TODO showing the msg in toastr
      console.log(err);
      throw err;
    }
  };

  // Create function to fetch boards
  const fetchBoards = async (setLoading) => {
    try {
      const q = query(boardsColRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const boards = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.data().createdAt.toDate().toLocaleDateString(),
      }));

      setBoards(boards);
    } catch (err) {
      // TODO showing the msg in toastr
      console.log(err);
    } finally {
      if (setLoading) setLoading(false);
    }
  };

  return { createBoard, fetchBoards };
};

export default useApp;
