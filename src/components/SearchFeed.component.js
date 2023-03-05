import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { useParams } from 'react-router-dom';

import { apiFeedSearch } from './../utils/apiFeed.utils';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    apiFeedSearch(searchTerm).then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
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
        Search Results For:{' '}
        <span
          style={{
            color: '#fc1503',
          }}
        >
          {searchTerm}
        </span>{' '}
        Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
