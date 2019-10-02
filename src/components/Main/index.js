import React, { Component } from 'react';

import QuoteBox from '../QuoteBox';

import api from '../../config/api';

import { Container, Button } from './styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };

    this.fetchNewQuote = this.fetchNewQuote.bind(this);
  }

  async componentDidMount() {
    this.fetchNewQuote();
  }

  async fetchNewQuote() {
    const { data } = await api.get('/random');

    this.setState({
      quote: data.content,
      author: data.author,
    });
  }

  render() {
    const { quote, author } = this.state;

    const centralHue = Math.floor(Math.random() * 360);
    const primaryColor = `hsl(${centralHue}, 50%, 50%)`;
    const leftColor = `hsl(${centralHue + 30}, 50%, 50%)`;
    const rightColor = `hsl(${centralHue - 30}, 50%, 50%)`;

    return (
      <Container leftColor={leftColor} rightColor={rightColor}>
        <QuoteBox quote={quote} author={author} color={primaryColor} />
        <Button
          id="new-quote"
          onClick={this.fetchNewQuote}
          color={primaryColor}
        >
          New Quote
        </Button>
      </Container>
    );
  }
}

export default Main;
