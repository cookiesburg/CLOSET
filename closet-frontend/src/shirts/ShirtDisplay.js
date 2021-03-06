import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../img/blueShirtModel.jpg';


class ShirtDisplay extends Component {
  componentDidMount() {
    const { shirt } = this.props;
    const { user } = this.props;
    const shirtArr = [ shirt.neck, shirt.l_sleeve, shirt.w_sleeve, shirt.slder, shirt.chest, shirt.mid, shirt.cuff, shirt.length];
    const userArr = [ user.neck, user.l_sleeve, user.w_sleeve, user.sldr, user.chest, user.mid, user.cuff, user.length];


    const diffs = userArr.map((e, i) => {
      return (Math.abs(e - shirtArr[i]))/e;
    });

    const combMatch = diffs.reduce((a,b) => a + b, 0);
    const match = (1 - combMatch/8)*100;
    console.log(match);

  }

  render() {
    const { shirt, user } = this.props;
    return(
      <DisContainer>
        <div className='top'>
          <img src={img} alt="blue shirt"/>

          <div>
            <p></p>
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
      width: 320px;
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
    text-transform: uppercase;
    font-size: 12px;
    padding: 10px;
  }

`;
