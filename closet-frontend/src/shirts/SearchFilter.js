import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShirts } from './actions';
import { addBrandFilter, removeBrandFilter, changeMaxPrice, resetFilter } from './actions';

class SearchFilter extends Component {

  handleBrandFilter(e) {
    let brandId = e.target.value
    if (e.target.checked) {
      this.props.addBrandFilter(brandId);
    } else {
      this.props.removeBrandFilter(brandId);
    }
  }

  state = {
    value: 50,
  }
  handlePriceFilter = (e) => {
    this.setState({value: e.target.value});
    this.props.changeMaxPrice(e.target.value);
  }

  render() {
    return(
      <Wrapper>
        <h4>SEARCH SHIRTS HERE</h4>
        <form>
          <div className='field brands'>
            {this.props.brands.map(brand =>
              <div key={brand.id}>
                <input type="checkbox" value={brand.id} onClick={(e) => this.handleBrandFilter(e)} />
                <label>{brand.name}</label>
              </div>
            )}
          </div>
          <div className='field'>
            <input type="range" min="0" max="100" step="5"
              value={this.state.value}
              onChange={this.handlePriceFilter}
            />
            <p>Max $: {this.state.value}</p>
            {/* <output for="price" onforminput="value = price.valueAsNumber;"></output> */}
          </div>
          <button onClick={this.props.resetFilter}>RESET</button>
        </form>
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
  addBrandFilter,
  removeBrandFilter,
  changeMaxPrice,
  resetFilter
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);


const Wrapper = styled.div`
  min-width: 280px;
  display:flex;
  flex-direction: column;
  border: 1px solid green;
  padding-left: 20px;
  padding-right: 10px;

  .field {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin-bottom: 10px;
  }

  .brands {
    align-items: flex-start;
    padding-left: 30px;

    div {
      margin-bottom: 10px;
    }
  }
`;
