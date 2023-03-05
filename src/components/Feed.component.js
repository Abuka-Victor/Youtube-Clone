import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';

import { apiFeedSearch } from './../utils/apiFeed.utils';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const categoryControls = { selectedCategory, setSelectedCategory };

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    apiFeedSearch(selectedCategory).then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar categoryControls={categoryControls} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023 Abuka Victor
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: '#fff',
          }}
        >
          {selectedCategory}{' '}
          <span
            style={{
              color: '#fc1503',
            }}
          >
            Videos
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
