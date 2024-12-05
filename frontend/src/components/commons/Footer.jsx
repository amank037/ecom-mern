import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function Footer() {
  const [color, setColor] = React.useState('neutral');
  return (
    <Sheet color={color}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'centre' }} className=" pt-2 icons">
      <IconButton variant="plain">
        <FacebookRoundedIcon />
      </IconButton>
      <Divider orientation="vertical" />
      <IconButton variant="plain">
        <GitHubIcon />
      </IconButton>
      <Divider orientation="vertical" />
      <IconButton>
        <TwitterIcon />
      </IconButton>
      <Divider orientation="vertical" />
      <IconButton>
        <InstagramIcon />
      </IconButton>
    </Box>
    <Divider sx={{ my: 2 }} />
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { md: 'flex-start' },
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
      }}
      className="ps-3 pe-3"
    >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
          }}
          className="ms-3"
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: 'initial' } }}
          >
           <SportsEsportsIcon />
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Regex ecomerce pvt ltp</Typography>
          </CardContent>
        </Card>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Home</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Products</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Contact us</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    <Divider sx={{ my: 2}} />
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'centre' }} className="icons">
      <h6>CopyRight @ 2023 <CopyrightIcon /></h6>
    </Box>
    </Sheet>
  );
}
