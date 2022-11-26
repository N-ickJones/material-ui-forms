import React from "react";
import Drawer from "@mui/material/Drawer";
import { Grid, List, Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { NavItem } from "./drawer/NavItem";
import { Home, SubdirectoryArrowRight, ViewList } from "@mui/icons-material";

export type drawerElement = {
  element: JSX.Element;
  count: number;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

export interface IDrawerComponent {
  closeDrawerHandler?: any;
    drawerOpened: boolean;
}

export default function DrawerComponent(props: IDrawerComponent) {
    const classes = useStyles();
    return (
    <Drawer open={props.drawerOpened} onClose={props.closeDrawerHandler}>
        <Grid
            className={classes.list}
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
