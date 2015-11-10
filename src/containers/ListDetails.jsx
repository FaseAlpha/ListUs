import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListTasks from '../components/ListTasks';

function mapStateToProps(state) {
  return {
    list: state.list[state.router.params.index]
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTasks);