import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Box, Card, CardContent, IconButton, Typography, Select, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: '15px',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: '#f3f3f7',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
}));

const StyledSelect = styled(Select)({
    '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
    },
});

const CompositionSequence = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Choco', image: '/path/to/choco.jpg', duration: 10, size: '1024x2048' },
        { id: 2, name: 'Fries', image: '/path/to/fries.jpg', duration: 10, size: '1024x2048' },
        { id: 3, name: 'Choco', image: '/path/to/choco.jpg', duration: 10, size: '1024x2048' },
        { id: 4, name: 'Choco', image: '/path/to/choco.jpg', duration: 10, size: '1024x2048' },
        { id: 5, name: 'Choco', image: '/path/to/choco.jpg', duration: 10, size: '1024x2048' }
    ]);
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {
        if (items.length >= 20) {
            setHasMore(false);
            return;
        }

        const newItems = Array.from({ length: 5 }).map((_, i) => ({
            id: items.length + i + 1,
            name: 'Choco',
            image: '/path/to/choco.jpg',
            duration: 10,
            size: '1024x2048'
        }));
        setItems([...items, ...newItems]);
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Composition Sequence
            </Typography>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<Typography textAlign="center">Loading...</Typography>}
                height={400}
                endMessage={<Typography textAlign="center">You have seen it all</Typography>}
            >
                {items.map((item, index) => (
                    <StyledCard key={item.id}>
                        <Typography variant="body1" sx={{ mx: 2, color: '#757575' }}>{index + 1}.</Typography>
                        <Avatar src={item.image} alt={item.name} sx={{ width: 40, height: 40, mr: 2 }} />
                        <CardContent sx={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
                            <Box>
                                <Typography variant="body1" fontWeight="bold">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.size}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <StyledSelect
                                    value={item.duration}
                                    onChange={(e) => {
                                        const updatedItems = items.map((itm) =>
                                            itm.id === item.id ? { ...itm, duration: e.target.value } : itm
                                        );
                                        setItems(updatedItems);
                                    }}
                                    size="small"
                                    sx={{
                                        mr: 1,
                                        minWidth: '60px',
                                        backgroundColor: '#ffffff',
                                        '& .MuiSelect-select': { padding: '4px 8px' },
                                    }}
                                >
                                    {[5, 10, 15, 20].map((sec) => (
                                        <MenuItem key={sec} value={sec}>
                                            {sec} SEC
                                        </MenuItem>
                                    ))}
                                </StyledSelect>
                                <IconButton
                                    onClick={() => {
                                        setItems(items.filter((itm) => itm.id !== item.id));
                                    }}
                                    sx={{ color: '#757575' }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </StyledCard>
                ))}
            </InfiniteScroll>
        </Box>
    );
};

export default CompositionSequence;
