import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from '@mui/material/Dialog';

import { loadUsers } from "../../redux/actions/userActions";
import { addUser } from "../../redux/actions/userActions";
import Alert from "@mui/material/Alert";


const AddUser = ({ open, setOpen }) => {

    const { users } = useSelector((state) => state.user);

    let dispatch = useDispatch();

    const [error, setError] = useState("");
    const [state, setState] = useState({
        name: "",
        email: "",
    });

    const handleClose = () => {
        setOpen(false);
        setError("");
    };

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let validateEmail = users.some( user => user?.email === state?.email);

        if(!name || !email) {
            setError("Please fill all the fields!");
            setOpen(true);
        }

        else if(validateEmail) {
            setError("Email already in use!");
            setOpen(true);
        }

        else {
            dispatch(addUser(state));
            setError("");
            setOpen(false);
            setState({});
        }
    }

    const {name, email} = state;

    useEffect(() => {
        dispatch(loadUsers());
    },[dispatch]);

    return (
        <Dialog maxWidth="xs" open={open} onClose={handleClose}>
            <DialogTitle>Add User</DialogTitle>
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
                        type="text" name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={handleClose}
                    >
                        Add User
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AddUser;