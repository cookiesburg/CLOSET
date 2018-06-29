import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../img/blueShirtModel.jpg';

class ShirtDisplay extends Component {
  render() {
    const { shirt } = this.props;
    return(
      <DisContainer>
        <div className='top'>
          <img src={img} alt="blue shirt"/>

          <div>
            <p>{shirt.price}</p>
            <p>{shirt.brand.name}</p>
          </div>
        </div>
        <div className='bottom'>
          <p>{shirt.desc}</p>
        </div>
      </DisContainer>
    );
  }
}

export default ShirtDisplay;

const DisContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  .top {
    height: 75%;
    display: flex;
    border: 1px solid red;
    align-items: stretch;

    img {
      width: 350px;
      height: 100%;
    }

    div {
      border: 1px solid blue;
      height: 100%;
      justify-content: flex-end;
    }
  }
  .bottom {
    height:25%;
  }

`;
