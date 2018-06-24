import React, { Component } from 'react';
import Shirt from './Shirt';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShirts } from './actions';
import ShirtTile from './ShirtTile';
import SearchContainer from './SearchContainer';
//on mount grabs full shirt list and user
//has filterSearch action that resets shirtlist

class ShirtsContainer extends Component {
  componentDidMount() {
    this.props.getShirts();
  }

  render() {
    const { isLoaded, shirts } = this.props;
    if (!isLoaded) return <h1>loading...</h1>;
    return (
        <Wrapper>
          <SearchContainer />
          <ShirtGrid>
            {shirts.map(shirt => <ShirtTile key={shirt.id} shirt={shirt}/>)}
          </ShirtGrid>
        </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  shirts: state.shirts.shirts,
  isLoaded: state.shirts.shirtsLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getShirts,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShirtsContainer);

const Wrapper = styled.div`
  display: flex;
`;

const ShirtGrid = styled.div`
  display:flex;
  flex-wrap: wrap;
  border: 3px solid black;
`;
