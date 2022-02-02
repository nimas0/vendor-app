import { Container } from '@material-ui/core';
import React from 'react';
import Questions from '../../components/widgets/grid-lists/Questions';

const QuestionsPage = () => (
  <Container sx={{ p: 7 }}>
    <Questions />
  </Container>
);

export default QuestionsPage;
