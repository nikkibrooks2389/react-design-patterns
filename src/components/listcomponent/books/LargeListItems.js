import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background-color: #f9f9f9;
`;

const Heading = styled.h2`
  color: #333;
`;

const Paragraph = styled.p`
  margin: 8px 0;
  color: #666;
`;

export const LargeBookListItem = ({ book }) => {
  const { name, price, title, pages } = book;

  return (
    <Container>
      <Heading>{name}</Heading>
      <Paragraph>Price: {price}</Paragraph>
      <Heading>Title:</Heading>
      <Paragraph>{title}</Paragraph>
      <Paragraph># of Pages: {pages}</Paragraph>
    </Container>
  );
};