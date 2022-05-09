import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import Stack from '@mui/material/Stack';
import { Navbar } from "./components/Navbar";
import { Box, flexbox } from "@mui/system";
import Add from "@mui/icons-material/Add";
import { Avatar, Fab, Modal, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",

  alignItems: "center",

  gap: "20px",
  marginBottom: "20px"

}))

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }
  const handleClick = () => {
    setOpen(true);

  }
  console.log(open)
  return (
    <Box m={-1}>
      <Navbar />
      <Stack direction="row"  justifyContent="space-between">
        <Sidebar />
        <Feed />
        {/* <Rightbar /> */}
      </Stack>

      {/* <Add /> */}
      <Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
        <Fab color="secondary" aria-label="add" onClick={handleClick}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={200} bgcolor="white" p={3} >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>

          <UserBox>
            <Avatar alt="Remy Sharp" src="https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg" />
            <Typography>Hoang</Typography>
          </UserBox>

          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={2}
            placeholder="what do you think"
            sx={{width: "100%"}}
          />

          <Stack direction="row" gap={1} mt={2}>
                <EmojiEmotionsIcon color="primary"/>
                <EmojiEmotionsIcon color="primary"/>
                <EmojiEmotionsIcon color="primary"/>
                <EmojiEmotionsIcon color="primary"/>             
          </Stack>

        </Box>
      </StyledModal>

    </Box>

  );
}

export default App;
