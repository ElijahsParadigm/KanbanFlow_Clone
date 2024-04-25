import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  doc,
  getDoc,
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

  const fetchBoard = async (boardId) => {
    const docRef = doc(db, `users/${uid}/boardsData/${boardId}`);
    try {
      const doc = await getDoc(docRef);
      if (doc.exists) {
        return doc.data();
      } else return null;
    } catch (err) {
      console.log(err);
    }
  };

  // Create the boards screen that will allow user to create a board name, pick a color
  // and has a time stamp of board creation.
  const createBoard = async ({ name, color }) => {
    try {
      const doc = await addDoc(boardsColRef, {
        name,
        color,
        createdAt: serverTimestamp(),
      });

      addBoard({
        name,
        color,
        createdAt: new Date().toLocaleString("en-US"),
        id: doc.id,
      });
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
        createdAt: doc.data().createdAt.toDate().toLocaleDateString("en-US"),
      }));

      setBoards(boards);
    } catch (err) {
      // TODO showing the msg in toastr
      console.log(err);
    } finally {
      if (setLoading) setLoading(false);
    }
  };

  return { createBoard, fetchBoards, fetchBoard };
};

export default useApp;
