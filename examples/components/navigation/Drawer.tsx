import React from "react";
import Drawer from "@mui/material/Drawer";
import { Grid, List} from "@mui/material";
import { NavItem } from "./drawer/NavItem";
import { Home, ViewList } from "@mui/icons-material";

export type drawerElement = {
  element: JSX.Element;
  count: number;
}

export interface IDrawerComponent {
  closeDrawerHandler?: any;
    drawerOpened: boolean;
}

export default function DrawerComponent(props: IDrawerComponent) {
    return (
    <Drawer open={props.drawerOpened} onClose={props.closeDrawerHandler}>
        <Grid
            sx={{width: 250}}
            role="presentation"
            onClick={props.closeDrawerHandler}
            onKeyDown={props.closeDrawerHandler}
        >
          <List>
            <NavItem label="Home" icon={<Home />} pathname={"/"}  />
            <NavItem label="FormView" icon={<ViewList />} pathname={"/views/form-view"}  />
          </List>
        </Grid>
    </Drawer>
    );
}
