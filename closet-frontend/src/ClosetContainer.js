import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from './users/actions';

class ClosetContainer extends Component {
  componentDidMount() {
    this.props.getUser(5);
  }

  render() {
    return(
      <Container>
        <button>ADJUST MEASUREMENTS</button>
        <p>neck: {this.props.user.neck}</p>
        <p>sleeve length: {this.props.user.l_sleeve}</p>
        <p>sleeve width: {this.props.user.w_sleeve}</p>
        <p>shoulder: {this.props.user.sldr}</p>
        <p>chest: {this.props.user.chest}</p>
        <p>midsection: {this.props.user.mid}</p>
        <p>cuff: {this.props.user.cuff}</p>
        <p>length: {this.props.user.length}</p>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClosetContainer);

const Container = styled.div`
  margin-left:60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-size: 15px;
  }

  button {
    padding: 12px;
    border-radius: 15px;
    letter-spacing: 2px;
    background-color: blue;
    color: white;
  }
`;
