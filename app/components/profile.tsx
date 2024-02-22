import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import { Card, CardContent, List, Typography, ListItem, Link } from '@mui/material';
import NoteIcon from './icons/noteIcon';
import ProfileIcon from './icons/profileIcon';
import QiitaIcon from './icons/qiitaIcon';

export default function Profile() {
  return (
    <Card>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ProfileIcon sx={{ fontSize: 200, color: 'primary' }} />
        <Typography sx={{ fontSize: 28 }} color='text.secondary' gutterBottom>
          syoka4156
        </Typography>
        <List sx={{ display: 'flex', justifyContent: 'center' }}>
          <ListItem>
            <Link href='https://github.com/syoka4156' target='_blank' rel='noopener noreferrer'>
              <GithubIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://twitter.com/syoka4156' target='_blank' rel='noopener noreferrer'>
              <XIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://qiita.com/syoka4156' target='_blank' rel='noopener noreferrer'>
              <QiitaIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://note.com/syoka4156' target='_blank' rel='noopener noreferrer'>
              <NoteIcon />
            </Link>
          </ListItem>

          <ListItem>
            <Link href='mailto:syoka4156@gmail.com'>
              <EmailIcon />
            </Link>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
