
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
const books = [
  {
    title: 'Tactics Time! 1001 Chess Tactics from the Games of Everyday Chess Players',
    coverImage: 'https://cdn.pdfdrive.com/assets/thumbs/527/52758a5f34745aaac0a2d009418d0c4a.jpg',
    pdfUrl: 'https://drive.google.com/file/d/10JFgBYDRqPAMFLGF_JtcgxEnd2wkWM7l/view?usp=sharing',
  },
  {
    title: 'Chess: The Complete Guide To Chess - Master: Chess Tactics, Chess Openings, and Chess Strategies',
    coverImage: 'https://cdn.pdfdrive.com/assets/thumbs/2c5/2c584888ab731a52241d7ee43be2a3ba.jpg',
    pdfUrl: 'https://drive.google.com/file/d/13vKofzHpHsh4Rjn8UBNUGaAnalw-tbxV/view?usp=sharing',
  },
  {
    title: 'Chess: The Ultimate Chess Playing Guide: The Best Openings, Closings, Strategies & Learn To Play Like A',
    coverImage: 'https://cdn.pdfdrive.com/assets/thumbs/103/103a091f8aba8add97039775c340e61a.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1JYDsuoqo1Xe4QaaJ2USSo-qENTWT_yE1/view?usp=sharing',
  },
  {
    title: 'Modern Chess Openings - Bellaire Chess Club',
    coverImage: 'https://cdn.pdfdrive.com/assets/thumbs/c3d/c3d1df8eaa966c75ea58d063064227fd.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1b2e0r1vibSoj3fxLnKDpXWP7ISRQDM5N/view?usp=sharing',
  },
  {
    title: 'Play Winning Chess: An Introduction to the Moves, Strategies and Philosophy of Chess from the',
    coverImage: 'https://cdn.pdfdrive.com/assets/thumbs/392/392e9609174a701e9c5f695cfd8e0959.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1BCp7eC15E6TEefUxrPmznn2eMgjn5bxC/view?usp=sharing',
  },
  {
    title: 'Tactics Time Newsletters. Vol.2 Chess tactics from the Real Games of Everyday Chess Players',
    coverImage: 'https://cdn.pdfdrive.com/assets/thumbs/7a9/7a9321aa24b5e484fc0f95a445fab738.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1j9rWjnhWyaciXbNxMq_Pch1sKUmviccm/view?usp=sharing',
  },
  {
    title: 'Tactics Time Newsletters. Vol.1 Chess tactics from the Real Games of Everyday Chess Players',
    coverImage: 'https://cdn.pdfdrive.com/assets/thumbs/11d/11de2037555a0a6ef463f9218bc8f3d0.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1GGvMvlN92UdpVtUZ7Plx95mXG1aauBy7/view?usp=sharing',
  },
  {
    title: 'Tactics Time! 1001 Chess Tactics from the Games of Everyday Chess Players',
    coverImage: 'https://cdn.pdfdrive.com/assets/thumbs/527/52758a5f34745aaac0a2d009418d0c4a.jpg',
    pdfUrl: 'https://drive.google.com/file/d/10JFgBYDRqPAMFLGF_JtcgxEnd2wkWM7l/view?usp=sharing',
  },
  
];

const Learn = () => {
  const handleReadPdf = (pdfUrl) => {
    window.open(pdfUrl, '_blank'); 
  };

  const handleDownloadPdf = (pdfUrl) => {
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = ''; 
    a.click();
  };

  return (
    <div className="h-screen p-4 border-2 border-gray-500">
      <Grid container spacing={2}>
        {books.map((book, index) => (
          <Grid item xs={10} sm={5} md={3} key={index}>
            <Card
              className="border border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <CardMedia
                component="img"
                alt={book.title}
                height="200"
                image={book.coverImage}
              />
              <CardContent>
                <Typography variant="h6" className="text-lg font-bold">
                  {book.title}
                </Typography>
                <div className="mt-4 flex space-x-2">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleReadPdf(book.pdfUrl)}
                  >
                    Read
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDownloadPdf(book.pdfUrl)}
                  >
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Learn;
