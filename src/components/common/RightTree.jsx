import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import tree from '../../../public/img/tree_right.png';

const Container = styled.div`
  position: absolute;
  height: 100vh;
  top: -1rem;
  right: -1rem;
  @media (max-width: ${media.laptopM}px) {
    display: none;
  }
`;

const Tree = styled.img`
  position: absolute;
  overflow: hidden;
  top: -1rem;
  right: -1rem;
  z-index: 3;
  height: 110vh;
  object-fit: contain;
`;

const RightTree = () => {
  return (
    <Container>
      <Tree src={tree} alt="right tree" />
    </Container>
  );
};

export default RightTree;
