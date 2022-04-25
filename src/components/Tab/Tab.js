import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import EditProject from "../Project/EditProject";

const StyledTable = styled(Table)(({ theme }) => ({
    marginTop: 50,
    minWidth: 900
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Tab = ({ projects, handleDelete }) => {

    const [openPopup, setOpenPopup] = useState(false);
    const [selectedModal, setSelectedModal] = useState(null);

    const setEdit = (projectId, isOpen) => {
        setOpenPopup(isOpen);
        setSelectedModal(projectId);
    }

    return (
        <StyledTable>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Description</StyledTableCell>
                            <StyledTableCell align="center">Owner</StyledTableCell>
                            <StyledTableCell align="center"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.length ? projects.map((project) => (
                            <StyledTableRow key={project.id}>
                                <StyledTableCell component="th" scope="row">
                                    {project.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{project.description}</StyledTableCell>
                                <StyledTableCell align="center">{project.owner}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Stack direction="row" justifyContent="center" spacing={1}>
                                        <IconButton
                                            aria-label="delete"
                                            color="error"
                                            onClick={() => handleDelete(project.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label="delete"
                                            color="primary"
                                            onClick={() => setEdit(project.id, true)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </Stack>
                                </StyledTableCell>
                            </StyledTableRow>
                        )) : <StyledTableCell>No projects to show</StyledTableCell>}
                        {openPopup && <EditProject projectId={selectedModal} openPopup={openPopup} setOpenPopup={setOpenPopup} />}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledTable>
    );
};

export default Tab;