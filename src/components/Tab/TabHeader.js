import React, { useState } from 'react';

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import SearchBar from "material-ui-search-bar";

import AddProject from "../Project/AddProject";
import AddUser from "../User/AddUser";

const TabHeader = ({ searched, requestSearch, cancelSearch }) => {

    const [openPopup, setOpenPopup] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <Stack marginTop={5} direction="row" justifyContent="left" spacing={2}>
            <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch("")}
            />
            <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={() => setOpen(true)}
            >
                Add User
            </Button>
            <AddUser open={open} setOpen={setOpen} />
            <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={() => setOpenPopup(true)}
            >
                Add Project
            </Button>
            <AddProject openPopup={openPopup} setOpenPopup={setOpenPopup} />
        </Stack>
    );
};

export default TabHeader;