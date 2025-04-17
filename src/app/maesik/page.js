'use client'
import { Button } from '@/src/app/components/index'
import { Container } from '@/src/app/components/index'
import { Box } from '@/src/app/components/index'
import { BACKEND_URL } from '../constants/backendUrl'


const Maesik = () => {
    const handleClick = async () => {
        const res = await fetch(`${BACKEND_URL}maesik/`);
        const data = await res.json();
        alert(data.message);
    }
    return(
        <div>
            <Container maxWidth="lg" sx={{height: 735, padding: '25px'}} fixed>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 5,
                        bgcolor: "#e3f2fd",
                        display: 'flex', 
                        padding: '20px',
                        
                    }}>
                        <Box
                        sx={{
                            width: '300px',
                            height: '500px',
                            borderRadius: 5,
                            bgcolor: "white",
                            border: "2px solid #1976d2",
                            padding: "20px",
                        }}>
                            <Button onClick={handleClick} variant='contained'> 매식비 계산 </Button>
                        </Box>
                    
                </Box>
            </Container>
        </div>
    )
}

export default Maesik;