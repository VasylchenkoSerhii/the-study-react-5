import { Box } from "components/Box/Box";
import { NavLink, Outlet } from "react-router-dom";

export default function SharedLayout() {
    return (
        <Box
            p={3}
        >
            <Box as="header">
                <Box as="nav" display="flex">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/Movies">Movies</NavLink>
                </Box>
            </Box>
            <Outlet />
        </Box>
    );
};
