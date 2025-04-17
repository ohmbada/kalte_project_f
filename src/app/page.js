'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Button, Container } from './components/index'
import { Grid } from './components/index'

const cardData = [
  {
    href: "/maesik",
    title: "매식비 계산",
    description: "식당 장부를 관리하고 매식비를 계산하자",
  },
  {
    href: "/pdfedit",
    title: "PDF 편집",
    description: "PDF를 합치거나 나누자",
  },
  {
    href: "/exceledit",
    title: "Excel 편집",
    description: "Excel을 합치거나 나누자",
  },
  // 필요하면 더 추가
];

function CardButton({ href, title, description }) {
  return (
    <Button
      sx={{ width: '100%', height: '100%' }}
      component={Link}
      href={href}
      variant='outlined'
    >
      <div className='flex flex-col items-center h-full w-full'>
        <div className='flex items-center h-1/2'>
          <h1>{title}</h1>
        </div>
        <div className='h-1/2'>
          <h3>{description}</h3>
        </div>
      </div>
    </Button>
  );
}

const Home = () => {
  return (
    <div className='flex h-full w-full justify-center items-center'>
      <Container maxWidth="lg"> {//</div>maxWidth={{xs: 'xs', sm: 'sm'}}>}
}
        <Grid 
          container
          spacing={10}
          columns={3}
        >
          {cardData.map((card, idx) => (
            <Grid size={{ xs: 3, sm: 3, md: 1 }} key={card.href}>
              <CardButton
                href={card.href}
                title={card.title}
                description={card.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;