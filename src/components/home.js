import React from 'react';


import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../temaConfig'


function Home(){
    return (
        <ThemeProvider theme= {theme}>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
         >

        <Grid 
        container justifyContent="center">

            <Typography 
            align="left" 
            variant="h2"

            >
            <Box sx={{  fontWeight: 'regular'  }}>Security  </Box>

            <Box sx={{ fontWeight: 'light' }}>is a </Box>

            <Box sx={{  fontWeight: 'bold', color: '#0054B4' }}>priority,</Box>

            <Box sx={{ fontWeight: 'light' }}>not an option.</Box>
            <Box sx={{ fontWeight: 'bold',  color: '#0054B4'}}>INSURANCES</Box>
           
            
            </Typography>

            <Grid container justifyContent="center">
                <Button variant="contained" color="secondary">
                ENTER
                </Button>
            </Grid>
            <span className="font-link">
              This is with Font Link. We are linking the fonts from the Google Fonts.
            </span>
        

            </Grid>
        </Grid>
        </ThemeProvider>

    );    
}


export { Home } ;

// import Typography fr om '@mui/material/Typography'
// import Container from '@mui/material/Container'
// import Grid from '@mui/material/Grid'
// import Button from '@mui/material/Button'
// import GppGoodIcon from '@mui/icons-material/GppGood';

// export class Home extends Component {

//     render (){
//         return (
//             <Grid
//                 container
//                 spacing={0}
//                 direction="column"
//                 alignItems="center"
//                 justifyContent="center"
//                 style={{ minHeight: '100vh' }}
//                 >

//             <Container maxWidth="md"  >
//                 <Grid container >
//                 <Grid container justifyContent="center">
//                     <GppGoodIcon
//                     sx={{ fontSize: 100 }}
//                     color="primary"
//                     />
//                     </Grid> 
//                 <Grid>
//                     <Typography 
//                     variant="h2" 
//                     color="primary">
//                         Welcome to Insurance 
//                         Secure Platform 
//                     </Typography>
//                     </Grid>
                    
                    // <Grid container justifyContent="center">
                    //     <Button variant="contained" color="primary">
                    //     ENTER
                    //     </Button>

                    // </Grid>

                    
//                 </Grid>
//             </Container>
//             </Grid> 
          
//         )

//     }
// }