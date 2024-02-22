import { Typography, Box } from '@mui/material';
import posts from '@.contents/posts.json';
import { PostList } from '@app/components/postList';
import { PostItem } from '@app/types';

export default function Page() {
  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto' }}>
      <Typography sx={{ marginTop: 2, textAlign: 'left' }} variant='h5'>
        Blog
      </Typography>
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          justifyContent: 'center',
          marginLeft: 3,
        }}
      >
        <PostList items={posts as PostItem[]} />
      </Box>
    </Box>
  );
}
