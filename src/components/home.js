import React, {Component} from 'react';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import GppGoodIcon from '@mui/icons-material/GppGood';

export class Home extends Component {


    render (){
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
                >

            <Container maxWidth="md"  >
                <Grid container >
                <Grid container justifyContent="center">
                    <GppGoodIcon
                    sx={{ fontSize: 100 }}
                    color="primary"
                    />
                    </Grid> 
                <Grid>
                    <Typography 
                    variant="h2" 
                    color="primary">
                        Welcome to Insurance 
                        Secure Platform 
                    </Typography>
                    </Grid>
                    
                    <Grid container justifyContent="center">
                        <Button variant="contained" color="primary">
                        ENTER
                        </Button>

                    </Grid>

                    
                </Grid>
            </Container>
            </Grid> 
          
        )

    }
}