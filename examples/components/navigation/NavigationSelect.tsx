import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

export interface INavigationSelectProps {
    index: number,
    selectedIndex: number;
    href: string;
    icon: IconProp,
    text: string,
    size?: SizeProp,
    className?: string,
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>,

}

export default function NavigationSelect (props: INavigationSelectProps) {
    const router = useRouter();
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        props.setSelectedIndex(index);
        router.push(props.href);
    };
    return (
        <ListItem
            button
            selected={props.selectedIndex === props.index}
            onClick={(event) => { 
                handleListItemClick(event, props.index);
            }}
        >
            <ListItemIcon>
                <FontAwesomeIcon icon={props.icon} size={props.size ? props.size : "lg"} className={props.className ? props.className : "text-primary" }/>
            </ListItemIcon>
            <ListItemText primary={props.text} />
        </ListItem>
    );
}
