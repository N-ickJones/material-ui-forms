import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { Grid, Link } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material";
import { ListAlt } from "@mui/icons-material";

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
            size="large">
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