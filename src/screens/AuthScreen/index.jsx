import { Container, Stack, TextField, Button, Typography } from "@mui/material";
import LogoImg from "../../assets/logo.svg";
import ImageEl from "../../components/utilis/imageEl";

const AuthScreen = () => {
    return (
        <Container
        maxWidth="xs" 
        sx={{
            mt: 10,
        }}
        >
            <Stack mb={6} spacing={4} alignItems ='center' textAlign='center'>
                <ImageEl src={LogoImg} alt="FlowBoard" />
                <Typography color="rgba(255, 255, 255, .6)">
                    Visualize Your Workflow for Increased Productivity. 
                    <br />
                    Access Your Tasks Anytime, Anywhere
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <TextField label="Email"/>
                <TextField label="Password"/>
            </Stack>
        </Container>
    );
};

export default AuthScreen;