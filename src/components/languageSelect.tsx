import React, { useState } from 'react';
import { languages } from '../constants/languages'; 
import { Box, Menu, MenuItem, List, ListItem, ListItemText, CardMedia, Typography } from '@mui/material'

const LanguageSelect = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  interface Languages {
    id: number;
    flagIcons: string;
    options: string;
  }

  return (
    <>
      <List
        component="nav"
        aria-label="Device settings">
          <ListItem
            button
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              primary = {
                languages.map((lang: Languages) => (
                  lang.id === selectedIndex 
                  ? <Box key={lang.id}>
                      <CardMedia component="img" src={lang.flagIcons}/> 
                      <Typography >{lang.options}</Typography>
                    </Box> 
                  : ''
                ))
              }
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {languages.map((lang: { id: number; flagIcons: string; options: string; }) => (
            <MenuItem
              key={lang.id}
              selected={lang.id === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, lang.id)}
            >
              
              <CardMedia component="img" src={lang.flagIcons}/>
              
              {lang.options}
            </MenuItem>
          ))}
        </Menu>
      </>
  )
}
export default LanguageSelect;