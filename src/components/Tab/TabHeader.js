import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import SearchBar from "material-ui-search-bar";

const TabHeader = () => {

    return (
        <Stack marginTop={5} direction="row" justifyContent="left" spacing={2}>
            <SearchBar/>
            <Button
                variant="outlined"
                startIcon={<AddIcon />}
            >
                Add User
            </Button>
            <Button
                variant="outlined"
                startIcon={<AddIcon />}
            >
                Add Project
            </Button>
        </Stack>
    );
};

export default TabHeader;