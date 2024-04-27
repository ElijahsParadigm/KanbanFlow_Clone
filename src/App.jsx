import { useEffect } from "react";
import {
  CssBaseline,
  Snackbar,
  SnackbarContent,
  ThemeProvider,
} from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import useStore from "./store";
import AppLoader from "./components/utilis/layout/AppLoader";

// Screens
import AuthScreen from "./screens/AuthScreen";
import BoardsScreen from "./screens/BoardsScreen";
import BoardScreen from "./screens/BoardScreen";

// Routes
import PublicOnlyRoute from "./components/utilis/PublicOnlyRoute";
import PrivateRoute from "./components/utilis/PrivateRoute";
import SnackbarManager from "./components/utilis/layout/SnackbarManager";

const App = () => {
  const { loader, setLoginStatus } = useStore();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoginStatus(!!user);
    });

    return () => unsub();
  }, []);

  if (loader) return <AppLoader />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarManager />
      {/* Pushes user to the BoardsScreen using the Router */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PublicOnlyRoute Component={AuthScreen} />}
          />
          <Route
            path="/boards"
            element={<PrivateRoute Component={BoardsScreen} />}
          />
          <Route
            path="/boards/:boardId"
            element={<PrivateRoute Component={BoardScreen} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
