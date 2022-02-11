import {
  List,
  ListItem,
  Typography,
  Container,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Star } from '@material-ui/icons';
import React from 'react';

const WelcomeTour = () => (
  <Container>
    <Typography gutterBottom variant="h5">
      Welcome to Finding Spaces Guided Tour
    </Typography>
    <Typography variant="overline">
      Prototype Version 0.1.3
    </Typography>
    <div sx={{ m: 3 }}>
      {' '}
      <Typography variant="body2">
        This prototype has been built to explore some of the most
        fundamental actions a blockchain based marketplace needs and
        to demo what this marketplace will eventually support, such
        as:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Convert Deed to an NFT" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Spend Space Tokens on Services" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText
            primary="Manage Buying, Selling Homes
       Close Home in a virtual room"
          />
        </ListItem>
      </List>
    </div>
  </Container>
);

export default WelcomeTour;
