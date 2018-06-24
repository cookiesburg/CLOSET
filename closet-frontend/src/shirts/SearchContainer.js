import React, { Component } from 'react';
import styled from 'styled-components';

class SearchContainer extends Component {
  render() {
    return(
      <Wrapper>
        <h4>SEARCH SHIRTS HERE</h4>
        <input />
        <input />
        <input />
        <input />
        <button>clear</button>
      </Wrapper>
    );
  }
}

export default SearchContainer;

const Wrapper = styled.div`
  min-width: 280px;
  display:flex;
  flex-direction: column;
  border: 1px solid green;

  input {
    text-align: center;
    margin: 10px;
  }
`;
