import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaTwitter } from 'react-icons/fa';
import PropTypes from 'prop-types';

import {
  Box,
  Quote,
  QuoteSymbolLeft,
  QuoteSymbolRight,
  QuoteText,
  ShareButtons,
  Author,
  Button,
} from './styles';

export default function QuoteBox({ quote, author, color }) {
  return (
    <Box>
      <Quote>
        <QuoteSymbolLeft color={color}>
          <FaQuoteLeft />
        </QuoteSymbolLeft>
        <QuoteText color={color}>{quote}</QuoteText>
        <QuoteSymbolRight color={color}>
          <FaQuoteRight />
        </QuoteSymbolRight>
      </Quote>
      <Author color={color}>{author}</Author>
      <ShareButtons>
        <Button backgroundColor={color}>
          <FaTwitter />
        </Button>
      </ShareButtons>
    </Box>
  );
}

QuoteBox.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
