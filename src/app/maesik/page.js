'use client'

import { useState, useRef } from 'react';
import { Button, Container, Box } from '@/src/app/components/index'
import { BACKEND_URL } from '../constants/backendUrl'



const Maesik = () => {
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        inputRef.current.click();
    }

    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setResult(null);
    
        if (!selectedFile) return;
        const formData = new FormData();
        formData.append('file', selectedFile);
    
        const res = await fetch(`${BACKEND_URL}maesik/upload/`, {
            method: 'POST',
            body: formData,
        });

        const data = await res.json();
        setResult(data);

    };

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
                            <form encType='multipart/form-data'>
                                <input type="file" accept=".xlsx,.xls" style={{ display: 'none' }} ref={inputRef} onChange={handleFileChange} />
                                    <Button type="button" onClick={handleButtonClick} variant="contained" color="primary">
                                        엑셀 업로드
                                    </Button>
                            </form>
                            {result && (
                                <div>
                                    <p>파일명: {result.file_name}</p>
                                    <p>
                                        파일 URL: <a href={result.file_url} target="_blank" rel="noopener noreferrer">{result.file_url}</a>
                                    </p>
                                </div>
                            )}
                        </Box>
                    
                </Box>
            </Container>
        </div>
    )
}

export default Maesik;