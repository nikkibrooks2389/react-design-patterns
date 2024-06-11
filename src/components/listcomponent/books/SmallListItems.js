import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  color: #333;
  margin: 8px 0;
  font-size: 16px;
`;

export const SmallBookListItem = ({ book }) => {
  const { name, price } = book;
  return (
    <Heading>
      {name} / {price}
    </Heading>
  );
};