import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useRouter } from "next/router";
import { Home } from "@material-ui/icons";

export interface INavItem {
    label: string;
    icon?: React.ReactNode;
    pathname?: string;
    onClick?: () => void;
  }
  
  export function NavItem(props: INavItem) {
    const router = useRouter();
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (props.pathname) {
        router.push(props.pathname);
      }
      else {    
        props.onClick && props.onClick()
      } 
    };
  
    return (
      <ListItem button selected={props.pathname ? router.pathname === props.pathname : false} onClick={handleClick}>
        {props.icon &&
          <ListItemIcon>
            {props.icon}
          </ListItemIcon>
        }
        <ListItemText primary={props.label} />
      </ListItem>
    )
  }