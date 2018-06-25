import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShirts } from './actions';
import { addBrandFilter, removeBrandFilter } from './actions';

class SearchFilter extends Component {

  handleBrandFilter(e) {
    let brandType = e.target.value
    if (e.target.checked) {
      this.props.addBrandFilter(brandType);
    } else {
      this.props.removeBrandFilter(brandType);
    }
  }

  render() {
    return(
      <Wrapper>
        <h4>SEARCH SHIRTS HERE</h4>
        <form>
          <div className='field'>
            {this.props.brands.map(brand =>
              <div>
                <input type="checkbox" key={brand} value={brand} onClick={(e) => this.handleBrandFilter(e)}/>
                <label>{brand}</label>
              </div>
            )}
          </div>
          <div className='field'>
            {/* <input type="range" min="1" max="100" value="50" class="slider" id="myRange" /> */}
          </div>
          <button>RESET</button>
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
`;
