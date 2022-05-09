import React from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'



export const Rightbar = () => {
    return (

        <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box bgcolor="red" position="fixed">
                RightBar
            </Box>

        </Box>



    )
}
