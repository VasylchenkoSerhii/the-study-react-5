import { Box } from "components/Box/Box";
import { Outlet } from "react-router-dom";
import { Link } from "./SharedLayout.styled";

export default function SharedLayout() {
    return (
        <Box
            p={3}
        >
            <Box
                as="header"
                pt={5}
                pb={5}
                bg="rgb(185,56,244)"
                borderBottom="2px solid #9202d4"
                borderRadius="normal"
                boxShadow="5px 11px 5px 0px rgba(146,2,212,1)"
            >
                <Box
                    as="nav"
                    display="flex"
                    justifyContent="start"
                >
                    <Link to="/" end>Home</Link>
                    <Link to="/Movies">Movies</Link>
                </Box>
            </Box>
            <Outlet />
        </Box>
    );
};
