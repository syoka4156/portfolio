'use client';

import { Button, Typography, Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import { useState } from 'react';
import { PostItem } from '@app/types';

dayjs.extend(relativeTime);

export function getFaviconSrcFromOrigin(hostname: string) {
  return `https://www.google.com/s2/favicons?sz=32&domain_url=${hostname}`;
}

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { authorId, title, isoDate, link, dateMiliSeconds } = props.item;
  const member = 'syoka4156';
  if (!member) return null;

  const { hostname, origin } = new URL(link);

  return (
    <Grid item>
      <Button
        variant='outlined'
        sx={{ textTransform: 'none', width: '400px', height: '100%' }}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Box sx={{ width: '50px', justifyContent: 'left' }}>
            {hostname && (
              <Image src={getFaviconSrcFromOrigin(origin)} alt={hostname} width={32} height={32} />
            )}
          </Box>
          <Box sx={{ width: '300px', textAlign: 'left' }}>
            <Typography variant='body1' color='black'>
              {title}
            </Typography>
            <Typography variant='body2' sx={{ textAlign: 'left' }}>
              {dayjs(isoDate).fromNow()}
            </Typography>
          </Box>
        </Box>
      </Button>
    </Grid>
  );
};

export const PostList: React.FC<{ items: PostItem[] }> = (props) => {
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(32);
  const totalItemsCount = props.items?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  if (!totalItemsCount) {
    return <div className='post-list-empty'>No posts yet</div>;
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {props.items.slice(0, displayItemsCount).map((item, i) => (
          <PostLink key={`post-item-${i}`} item={item} />
        ))}
      </Grid>
      {canLoadMore && (
        <Button onClick={() => setDisplayItemsCount(displayItemsCount + 32)}>LOAD MORE</Button>
      )}
    </Box>
  );
};
