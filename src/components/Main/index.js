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

    console.log(data);

    this.setState({
      quote: data.content,
      author: data.author,
    });
  }

  render() {
    const { quote, author } = this.state;

    return (
      <Container>
        <QuoteBox quote={quote} author={author} />
        <Button onClick={this.fetchNewQuote}>New Quote</Button>
      </Container>
    );
  }
}

export default Main;
