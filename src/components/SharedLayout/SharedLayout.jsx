import { Box } from "components/Box/Box";
import { NavLink } from "react-router-dom";

export default function SharedLayout() {
    return (
        <Box as="header">
            <Box as="nav" display="flex">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Movies">Movies</NavLink>
            </Box>
        </Box>
    );
};
