import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { education } from '@app/components/education';
import { experience } from '@app/components/experience';
import Profile from '@app/components/profile';
import { qualification } from '@app/components/qualification';

export default function Home() {
  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto' }}>
      <Profile />
      <Typography sx={{ marginTop: 2, textAlign: 'left' }} variant='h5'>
        Education
      </Typography>
      <List>
    {education.map((item, i) => (
      <ListItem component='div' sx={{ display: 'flex' }} key={`${item.content}-${i}`}>
        <div style={{ flexGrow: 1 }}>
          <ListItemText primary={item.content} />
          <List>
            {item.supplement?.map((supplement, j) => (
              <ListItem key={`${supplement}-${j}`}>
                <ListItemText primary={supplement} sx={{color: 'text.secondary' }}/>
              </ListItem>
            ))}
          </List>
        </div>
        <ListItemText
          sx={{ textAlign: 'right', color: 'text.secondary' }}
          primary={item.period}
        />
      </ListItem>
    ))}
  </List>
      <Divider />
      <Typography sx={{ marginTop: 2, textAlign: 'left' }} variant='h5'>
        Experience
      </Typography>
      <List>
        {experience.map((item: any, i) => (
          <ListItem component='a' sx={{ display: 'flex' }} key={i}>
            <ListItemText sx={{ flexGrow: 1 }} primary={item.content} />
            <ListItemText
              sx={{ textAlign: 'right', color: 'text.secondary' }}
              primary={item.period}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography sx={{ marginTop: 2, textAlign: 'left' }} variant='h5'>
        Licenses & Certifications
      </Typography>
      <List>
        {qualification.map((item: any, i) => (
          <ListItem component='a' sx={{ display: 'flex' }} key={i}>
            <ListItemText sx={{ flexGrow: 1 }} primary={item.content} />
            <ListItemText
              sx={{ textAlign: 'right', color: 'text.secondary' }}
              primary={item.period}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
