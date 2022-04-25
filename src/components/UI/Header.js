import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';

import AssignmentIcon from '@mui/icons-material/Assignment';

const Header = () => {
    return (
        <Stack data-testid="header" direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                <AssignmentIcon />
            </Avatar>
        </Stack>
    )
}

export default Header;