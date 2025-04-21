'use client';

import { DndContext } from "@dnd-kit/core";
import {
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon } from "@mui/material";
import { Box, Button, Container, Stack, Paper } from '@/src/app/components/index'
import { useState } from 'react';

function SortableItem({ id, children }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      padding: "12px",
      marginBottom: "8px",
      background: "#f3f3f3",
      border: "1px solid #ddd",
      borderRadius: "4px",
      cursor: "grab",
    };
  
    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {children}
      </div>
    );
  }

const PDFEdit = () => {
    const [dragActive, setDragActive] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragActive(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        const files = e.dataTransfer.files;
    };
    const handleChange = (e) => {
        const files = e.target.files;
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
                        className="flex flex-col relative"
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        sx={{
                            width: '300px',
                            height: '500px',
                            borderRadius: 5,
                            bgcolor: dragActive ? '#f0f0f0' : "white",
                            border: "2px solid #1976d2",
                            padding: "20px",
                        }}>
                            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/2 gray-600 opacity-50 pointer-events-none whitespace-nowrap">
                                PDF 파일을 여기다 끌어놓아주세요
                            </p>
                            <List sx={{ height: 400 }}>
                                <ListItem>TEST</ListItem>
                            </List>
                            <input type="file" multiple style={{ display: 'none'}} id="fileInput" onChange={handleChange} />
                            <Button className='' htmlFor='fileInput' style={{ cursor: 'pointer', color: '#0070f3' }}> 파일 선택 </Button>
                    </Box>
            </Box>
        </Container>
    </div>
    )
}

export default PDFEdit;