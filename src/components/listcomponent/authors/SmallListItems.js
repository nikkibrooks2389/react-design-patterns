import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  color: #333;
  margin: 8px 0;
  font-size: 16px;
`;

export const SmallAuthorListItem = ({ author }) => {
  const { name, age } = author;
  return (
    <Paragraph>
      Name: {name}, Age: {age}
    </Paragraph>
  );
};