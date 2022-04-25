import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Grid from '@mui/material/Grid';
import store from "../redux/store";

import { loadProjects, deleteProjects } from "../redux/actions/projectActions";

import Tab from '../components/Tab/Tab';
import TabHeader from "../components/Tab/TabHeader";

store.dispatch((dispatch) => {
    dispatch(loadProjects());
});

const Home = () => {
    let dispatch = useDispatch();
    const selectorData = useSelector(state => state.data.projects)

    const[projects, setProjects] = useState(selectorData);
    // eslint-disable-next-line
    const[searched, setSearched] = useState("")

    useEffect(() => {
        setProjects(selectorData)
    }, [selectorData])

    const requestSearch = (searchedVal) => {
        const filteredRows = selectorData.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal?.toLowerCase())
                || row.description.toLowerCase().includes(searchedVal?.toLowerCase());
        });
        setSearched(searchedVal);
        setProjects(filteredRows);
    };

    const cancelSearch = (searched) => {
        setSearched("");
        requestSearch(searched);
    };

    const handleDelete = (id) => {
        dispatch(deleteProjects(id))
    }

    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <TabHeader  setSearched={setSearched} cancelSearch={cancelSearch} requestSearch={requestSearch}/>
                <Tab projects={projects} handleDelete={handleDelete} />
            </Grid>
        </Grid>

    );
};

export default Home;