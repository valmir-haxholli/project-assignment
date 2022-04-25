import Grid from '@mui/material/Grid';

import Tab from '../components/Tab/Tab';
import TabHeader from "../components/Tab/TabHeader";

const Home = () => {
    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <TabHeader />
                <Tab />
            </Grid>
        </Grid>

    );
};

export default Home;