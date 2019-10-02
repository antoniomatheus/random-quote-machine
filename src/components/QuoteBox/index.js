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
  ShareLink,
} from './styles';

export default function QuoteBox({ quote, author, color }) {
  const tweetText = encodeURIComponent(`${quote} - ${author}.`);

  return (
    <Box id="quote-box">
      <Quote>
        <QuoteSymbolLeft color={color}>
          <FaQuoteLeft />
        </QuoteSymbolLeft>
        <QuoteText color={color} id="text">
          {quote}
        </QuoteText>
        <QuoteSymbolRight color={color}>
          <FaQuoteRight />
        </QuoteSymbolRight>
      </Quote>
      <Author color={color} id="author">
        {author}
      </Author>
      <ShareButtons>
        <ShareLink
          id="tweet-quote"
          backgroundColor={color}
          href={`https://twitter.com/intent/tweet?text=${tweetText}`}
          target="_blank"
        >
          <FaTwitter />
        </ShareLink>
      </ShareButtons>
    </Box>
  );
}

QuoteBox.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
