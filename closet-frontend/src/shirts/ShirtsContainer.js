import React, { Component } from 'react';
import Shirt from './Shirt';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShirts } from './actions';
import ShirtTile from './ShirtTile';
import SearchFilter from './SearchFilter';
//on mount grabs full shirt list and user
//has filterSearch action that resets shirtlist

class ShirtsContainer extends Component {
  componentDidMount() {
    this.props.getShirts();
  }

  render() {
    const { isLoaded, shirts, brands, filter, filteredList } = this.props;
    if (!isLoaded) return <h1>loading...</h1>;
    return (
        <Wrapper>
          <SearchFilter />
          <ShirtGrid>
            {
              (!filter) ?
              shirts.map(shirt => <ShirtTile key={shirt.id} shirt={shirt}/>) :
              filteredList.map(shirt => <ShirtTile key={shirt.id} shirt={shirt}/>)
            }
          </ShirtGrid>
        </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  shirts: state.shirts.shirts,
  isLoaded: state.shirts.shirtsLoaded,
  brands: state.shirts.brands,
  filter: state.shirts.filter,
  filteredList: state.shirts.filteredList,
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
