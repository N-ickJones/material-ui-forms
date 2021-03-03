import React, { useState } from 'react';
import ToolbarComponent from './Toolbar';
import DrawerComponent from './Drawer';
import { Grid } from '@material-ui/core';

export default function Navigation() {
    const [drawerOpened, setDrawerOpened] = useState(false);
    return (
        <Grid>
            <ToolbarComponent 
                openDrawerHandler={() => setDrawerOpened(true)}
            />
            <DrawerComponent
                drawerOpened={drawerOpened}
                closeDrawerHandler={() => setDrawerOpened(false)}
            />
        </Grid>
    )
}
