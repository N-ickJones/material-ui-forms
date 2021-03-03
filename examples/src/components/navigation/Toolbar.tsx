import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/router";
import { createStyles, Grid, Link, makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { ListAlt } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => createStyles({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logoLink: {
    paddingX: 0,
  },
}));

export interface IToolbarComponent {
  openDrawerHandler?: any;
}

export default function ToolbarComponent(props: IToolbarComponent) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          {/* Left side Menu Button */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color={"primary"}
            aria-label="open drawer"
            onClick={props.openDrawerHandler}
          >
            <MenuIcon />
          </IconButton>
          <Link className={classes.logoLink} onClick={() => router.push("/")}>
            <Typography variant="h6" noWrap>
              material-ui-forms
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}