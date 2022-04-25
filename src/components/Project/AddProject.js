import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';

import { loadUsers } from "../../redux/actions/userActions";
import { addProject } from "../../redux/actions/projectActions";
import Alert from "@mui/material/Alert";

const AddProject = ({ openPopup, setOpenPopup }) => {

    let dispatch = useDispatch();
    const {users} = useSelector(state => state.user);

    const [error, setError] = useState("");
    const [state, setState] = useState({
        name: "",
        description: "",
        owner: ""
    });

    const handleClose = () => {
        setOpenPopup(false);
        setError("");
    };
    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !description || !owner) {
            setError("Please fill all the fields");
            setOpenPopup(true);
        }
        else {
            dispatch(addProject(state));
            setError("");
            setOpenPopup(false);
            setState({})
        }
    }

    const {name, description, owner} = state;

    useEffect(() => {
        dispatch(loadUsers());
    },[dispatch]);

    return (
        <Dialog maxWidth="xs" open={openPopup} onClose={handleClose}>
            <DialogTitle>Add Project</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        '& > :not(style)': { m: 2, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    {error && <Alert severity="error">{error}</Alert>}
                    <TextField
                        id="standard-basic"
                        label="Name"
                        variant="standard"
                        type="text"
                        name="name"
                        value={ name }
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="standard-basic"
                        label="Description"
                        variant="standard"
                        type="text"
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="outlined-select-currency"
                        select
                        name="owner"
                        defaultValue=""
                        label="Select Owner"
                        onChange={handleInputChange}
                    >
                        {users.map((user) => (
                            <MenuItem key={user.id} name={user.name} value={user.name}>
                                {user.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button
                        type="submit"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={handleClose}>
                        Add Project
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AddProject;