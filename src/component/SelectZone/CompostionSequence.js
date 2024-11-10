import React, { useState, useEffect } from 'react';
import { Avatar, Box, Card, CardContent, IconButton, Typography, Select, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/system';
import { List, arrayMove } from "react-movable";
import { MdDragIndicator } from "react-icons/md";

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

const CompositionSequence = ({ selectcampaign, setselectcampaign, selectingzones = 1 }) => {

     console.log(selectcampaign)
    return (
        <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Composition Sequence
            </Typography>
            <List
                values={selectcampaign[selectingzones-1]?.media_sequence || []}
                onChange={({ oldIndex, newIndex }) => {
                    const updatedSequence = arrayMove(selectcampaign[selectingzones - 1]?.media_sequence, oldIndex, newIndex)
                        .map((media, index) => ({
                            ...media,
                            order: index + 1 // Update order based on index position
                        }));
                
                    const updatedCampaign = selectcampaign.map((campaign, index) =>
                        index === selectingzones - 1 ? { ...campaign, media_sequence: updatedSequence } : campaign
                    );
                
                    setselectcampaign(updatedCampaign);
                }}
                renderList={({ children, props }) => <ul {...props} className='px-0'>{children}</ul>}
                renderItem={({ value, props }) => (
                    <StyledCard key={value.media_id} {...props}>
                        <Typography variant="body1" sx={{ mx: 2, color: '#757575' }}>
                            {Boolean(props.key + 1) ? props.key + 1 : <MdDragIndicator />} .
                        </Typography>
                        <Avatar src={value.asset_url} alt={value.name} sx={{ width: 40, height: 40, mr: 2 }} />
                        <CardContent sx={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
                            <Box>
                                <Typography variant="body1" fontWeight="bold">
                                    {value.media_id}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {value.size}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <StyledSelect
                                    value={value.duration || 5}
                                    onChange={(e) => {
                                        const updatedItems = selectcampaign.map((campaign, index) =>
                                            index < selectingzones
                                                ? {
                                                    ...campaign,
                                                    media_sequence: campaign.media_sequence.map((itm) =>
                                                        itm.media_id === value.media_id ? { ...itm, duration: e.target.value } : itm
                                                    )
                                                }
                                                : campaign
                                        );
                                        setselectcampaign(updatedItems);
                                    }}
                                    size="small"
                                    sx={{
                                        mr: 1,
                                        minWidth: '60px',
                                        backgroundColor: '#ffffff',
                                        '& .MuiSelect-select': { padding: '4px 8px' },
                                    }}
                                >
                                    {[5, 10, 15, 20, 30, 40].map((sec) => (
                                        <MenuItem key={sec} value={sec}>
                                            {sec} SEC
                                        </MenuItem>
                                    ))}
                                </StyledSelect>
                                <IconButton
                                    onClick={() => {
                                        const updatedItems = selectcampaign.map((campaign, index) =>
                                            index < selectingzones
                                                ? {
                                                    ...campaign,
                                                    media_sequence: campaign.media_sequence.filter((itm) => itm.media_id !== value.media_id)
                                                }
                                                : campaign
                                        );
                                        setselectcampaign(updatedItems);
                                    }}
                                    sx={{ color: '#757575' }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </StyledCard>
                )}
            />
        </Box>
    );
};

export default CompositionSequence;
