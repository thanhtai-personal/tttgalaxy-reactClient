// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle, titleForbidden } from "../actions/index";
import _ from 'lodash'


class ConnectedForm extends Component {
  constructor () {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    const forbiddenWords = ['spam', 'money'];
    const foundWord = forbiddenWords.filter(word => title.includes(word) )
    if (!_.isEmpty(foundWord)) {
      return this.props.titleForbidden();
    }
    this.props.addArticle({ title, id });
  }

  render () {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}


function mapStateToProps(state) {
  return {
    
  };
}

export default connect(
  mapStateToProps,
  { 
    addArticle,
    titleForbidden
  }
)(ConnectedForm);