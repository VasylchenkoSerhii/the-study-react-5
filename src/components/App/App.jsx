import { Box } from "components/Box/Box";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        </Route>
      </Routes>
    </Box>
  );
};

