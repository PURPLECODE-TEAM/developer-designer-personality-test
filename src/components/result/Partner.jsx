import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getCharacterImg from '../../lib/util/getCharacterImg';

const PartnerTitle = styled.h3`
  margin: 5px 0;
  font-size: 16px;
`;

const PartnerImg = styled.img`
  height: 7rem;
  padding: 7px 0 5px 0;
  object-fit: contain;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const PartnerName = styled.h3`
  margin: 5px 0;
  font-size: 14px;
`;

const PartnerWrapper = styled.div`
  background-color: #eeeeee;
  text-align: center;
  padding: 10px 0;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Partner = ({ title, name, shortBio, alt }) => {
  return (
    <PartnerWrapper>
      <PartnerTitle>{title}</PartnerTitle>
      <Link to={`/result/developer/${name}`}>
        <PartnerImg src={getCharacterImg(name)} alt={alt} />
        <PartnerName>{shortBio}</PartnerName>
      </Link>
    </PartnerWrapper>
  );
};

Partner.propType = {
  borderRadius: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  shortBio: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Partner;
