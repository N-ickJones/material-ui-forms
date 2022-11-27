import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { Link, useTheme } from "@mui/material";

export interface IToolbarComponent {
  openDrawerHandler?: any;
}

export default function ToolbarComponent(props: IToolbarComponent) {
  const theme = useTheme();
  const router = useRouter();
  return (
    <div style={{flexGrow: 1}}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          {/* Left side Menu Button */}
          <IconButton
            edge="start"
            sx={{ marginRight: theme.spacing(2)}}
            color={"primary"}
            aria-label="open drawer"
            onClick={props.openDrawerHandler}
            size="large">
            <MenuIcon />
          </IconButton>
          <Link sx={{paddingX: 0,}} onClick={() => router.push("/")}>
            <Typography variant="h6" noWrap>
              material-ui-forms
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}