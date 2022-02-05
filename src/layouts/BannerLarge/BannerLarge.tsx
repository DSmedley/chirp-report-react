import React, {FormEvent, useState} from 'react';
import styles from './BannerLarge.module.css';
import {Divider, FormControl, InputAdornment, OutlinedInput} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function BannerLarge() {
    const [screenName, setScreenName] = useState("");
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setScreenName(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        navigate(`/analysis/${screenName}`);
    }
    return (
        <div className={styles.BannerLarge} data-testid="BannerLarge">
            <Box
                sx={{
                    backgroundImage: "linear-gradient(to bottom right,rgba(16 57 92/96%),rgba(0 0 0/.9)),url(/banner-bg-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    color: 'primary.contrastText'
                }}
            >
                <Container maxWidth={"sm"} sx={{pt: "5em", pb: "5em"}}>
                    <Box
                        sx={{
                            textAlign: 'center',
                            pb: '1em'
                        }}
                    >
                        <Typography sx={{fontWeight: 'bold'}} variant="h2" gutterBottom component="div">
                            Chirp Report
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
                            Twitter Analytics
                        </Typography>
                        <Divider sx={{bgcolor: 'primary.contrastText', height: '.25em', width: '4em', margin: 'auto'}}/>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth>
                            <OutlinedInput
                                sx={{
                                    borderColor: 'primary.contrastText',
                                    color: 'primary.contrastText'
                                }}
                                inputProps={{
                                    classes: {
                                        root: 'primary.contrastText',
                                    },
                                }}
                                color={"primary"}
                                placeholder={"Analyze Twitter User"}
                                value={screenName}
                                onChange={handleChange}
                                startAdornment={<InputAdornment position="start">@</InputAdornment>}
                            />
                        </FormControl>
                    </form>
                </Container>
            </Box>
        </div>
    )
}
