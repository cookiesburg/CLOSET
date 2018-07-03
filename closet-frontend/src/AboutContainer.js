import React, { Component } from 'react';
import styled from 'styled-components';

class AboutContainer extends Component {
  render() {
    return(
      <Wrapper>
        <h1>About Us</h1>
        <p>
          Closet is a clothing application that lets users use thier own custom
          sizes as an attribute in their search for well-fitting shirts. We take the
          guessing game out of online shopping and use our own algorithm to help match
          you with the shirt fits best across all of our brands and sizes.
        </p>
      </Wrapper>
    );
  }
}

export default AboutContainer;

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 100px;
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-left: 100px;

  h1 {
    display: flex;
    justify-content: flex-start;
  }
  p {
    font-size: 16px;
    display: block;
    justify-content: flex-start;
    line-height: 25px;
  }
`;
