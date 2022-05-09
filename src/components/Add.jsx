import { Fab, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

export const Add = () => {
    return (
        <>
            <Tooltip title="Add" sx={{position:"fixed", bottom:20, left: {xs: "calc(50% - 25)", md: 30}}}>
                <Fab color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>


            </Tooltip>


        </>


    );
}
