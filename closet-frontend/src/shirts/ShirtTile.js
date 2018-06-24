import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../img/blueShirtModel.jpg';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getShirt } from './actions';

class ShirtTile extends Component {
  // getShirt() {
  //   this.props.getShirt(this.props.id);
  // }

  render() {
    const { shirt } = this.props;
    return(
      <TileContainer>
        <img src={img} alt="blue shirt"/>
        <div>{shirt.price}<span>{shirt.brand}</span></div>
      </TileContainer>
    );
  }
}

// const mapStateToProps = state => ({
//   shirt: state.shirts.shirt,
//   isLoaded: state.shirts.shirtLoaded,
// });
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//   getShirt,
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(ShirtTile);
export default ShirtTile;

const TileContainer = styled.div`
  border: 1px solid orange;
  width: 280px;
  height: 490px;
  margin: 3px;
  display: flex;
  flex-direction: column;

  img {
    max-width: 100%;
    height: auto;
    flex-grow: 4;
  }
  div {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items; center;
    border: 1px solid yellow;
  }
`;
