import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  drawerState: boolean;
  toggleDrawer: (value: boolean) => (event: any) => void;
  pages: { name: string; href: string , icon: any}[];
}

export default function MobileSwipeableDrawer({
  drawerState,
  toggleDrawer,
  pages,
}: Props) {
  const list = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const router = useRouter();

    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number
    ) => {
      setSelectedIndex(index);
    };

    return (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List component="nav">
          {pages.map((page, index) => (
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => {
                event.preventDefault();
                handleListItemClick(event, index);
                router.push(page.href)
              }}
            >
              <ListItemIcon>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <div>
      <React.Fragment key={"left"}>
        <SwipeableDrawer
          anchor="left"
          open={drawerState}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
