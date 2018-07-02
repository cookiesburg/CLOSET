import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../img/blueShirtModel.jpg';
import Toggle from '../utilities/Toggle';
import Modal from '../utilities/Modal';
import ShirtDisplay from './ShirtDisplay';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getShirt } from './actions';

class ShirtTile extends Component {
  // getShirt() {
  //   this.props.getShirt(this.props.id);
  // }


  render() {
    const { shirt, user } = this.props;
    return(
      <Toggle>
        {({on, toggle}) => (
          <div>
            <Modal on={on} toggle={toggle}>
              <ShirtDisplay user={user} shirt={shirt} />
            </Modal>
            <TileContainer onClick={toggle}>
              <img src={img} alt="blue shirt"/>
              <div>${shirt.price}<span>{shirt.brand.name}</span></div>
            </TileContainer>
          </div>
        )}
      </Toggle>
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
  width: 270px;
  height: 490px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 3px;

  :hover {

    box-shadow: 0 0 8px gray;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    flex-grow: 4;
    border: 3px solid gray;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
  }
  div {
    border-radius: 0 0 5px 5px;
    border:3px solid gray;
    border-top: none;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items; center;
    background: white;
    color: gray;
    padding: 10px;
  }
`;
