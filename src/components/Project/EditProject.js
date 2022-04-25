import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';

import { getSingleProject, updateProject } from "../../redux/actions/projectActions";

const EditProject = ({ projectId, openPopup, setOpenPopup }) => {

    let dispatch = useDispatch();

    const { project } = useSelector((state) => state.data);
    const { users } = useSelector((state) => state.user);

    const [state, setState] = useState({});
    const [error, setError] = useState("");

    const {name, description, owner} = state;

    useEffect(() => {
        dispatch(getSingleProject(projectId));
    },[dispatch, projectId]);

    useEffect(() => {
        if(project) {
            setState({...project});
        }
    },[project])

    const handleClose = () => {
        setOpenPopup(false);
        setError("");
    };

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !description || !owner) {
            setError("Please fill all the fields");
            setOpenPopup(true);
        }
        else {
            dispatch(updateProject(state, projectId));
            setError("");
            setOpenPopup(false);
        }
    }

    if(project.owner){
        return (
            <Dialog maxWidth="xs" open={openPopup} onClose={handleClose}>
                <DialogTitle>Edit Project</DialogTitle>
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
                            value={name || ""}
                            onChange={handleInputChange}
                        />
                        <TextField
                            id="standard-basic"
                            label="Description"
                            variant="standard"
                            type="text"
                            name="description"
                            value={description || ""}
                            onChange={handleInputChange}
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            name="owner"
                            value={project.owner}
                            label="Select Owner"
                            onChange={handleInputChange}
                        >
                            {users.map((user) => (
                                <MenuItem key={user.id} name={user.name} value={user.name}>
                                    {user.name || ""}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button
                            size="medium"
                            type="submit"
                            variant="outlined"
                            startIcon={<AddIcon />}
                        >
                            Edit Project
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        );
    }
};

export default EditProject;