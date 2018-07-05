import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, editUser } from './users/actions';

class ClosetContainer extends Component {
  state = {
    id: this.props.user.id,
    name: this.props.user.name || '',
    neck: this.props.user.neck,
    l_sleeve: this.props.user.l_sleeve,
    w_sleeve: this.props.user.w_sleeve,
    sldr: this.props.user.sldr,
    chest: this.props.user.chest,
    mid: this.props.user.mid,
    cuff: this.props.user.cuff,
    length: this.props.user.length,
  }
  componentDidMount() {
    this.props.getUser(5);
    console.log('mount',this.state);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateUser = (e) => {
    e.preventDefault();
    const altUser = this.state;
    console.log(altUser);
    this.props.editUser(altUser);
  };

  render() {
    return(
      <Container>
        {/* <p>neck: {this.props.user.neck}</p>
        <p>sleeve length: {this.props.user.l_sleeve}</p>
        <p>sleeve width: {this.props.user.w_sleeve}</p>
        <p>shoulder: {this.props.user.sldr}</p>
        <p>chest: {this.props.user.chest}</p>
        <p>midsection: {this.props.user.mid}</p>
        <p>cuff: {this.props.user.cuff}</p>
        <p>length: {this.props.user.length}</p> */}
        <form>
          <div>neck: <span><input type='text' defaultValue={this.props.user.neck} onChange={this.update('neck')} /></span></div>
          <div>neck: <span><input type='text' defaultValue={this.props.user.l_sleeve} onChange={this.update('l_sleeve')} /></span></div>
          <div>neck: <span><input type='text' defaultValue={this.props.user.w_sleeve} onChange={this.update('w_sleeve')} /></span></div>
          <div>neck: <span><input type='text' defaultValue={this.props.user.sldr} onChange={this.update('sldr')} /></span></div>
          <div>neck: <span><input type='text' defaultValue={this.props.user.mid} onChange={this.update('mid')} /></span></div>
          <div>neck: <span><input type='text' defaultValue={this.props.user.chest} onChange={this.update('chest')} /></span></div>
          <div>neck: <span><input type='text' defaultValue={this.props.user.cuff} onChange={this.update('cuff')} /></span></div>
          <div>neck: <span><input type='text' defaultValue={this.props.user.length} onChange={this.update('length')} /></span></div>
          <button onClick={ this.updateUser}>ADJUST MEASUREMENTS</button>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser, editUser,
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
