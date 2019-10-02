import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
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

export default function QuoteBox({ quote, author }) {
  return (
    <Box>
      <Quote>
        <QuoteSymbolLeft>
          <FaQuoteLeft />
        </QuoteSymbolLeft>
        <QuoteText>{quote}</QuoteText>
        <QuoteSymbolRight>
          <FaQuoteRight />
        </QuoteSymbolRight>
      </Quote>
      <Author>{author}</Author>
      <ShareButtons>
        <Button>Share</Button>
      </ShareButtons>
    </Box>
  );
}

QuoteBox.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
