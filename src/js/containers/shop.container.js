import React, { Component } from "react";
import { connect } from "react-redux";

import Shop from './../../components/shopping/item.list.jsx'


class Shop extends Component {
  render() {
    const { listItem } = this.props
    return (
      <ItemList
        data={listItem}
      />
    )
  }
}

function mapStateToProps ({}) {
  return {
  };
}

export default connect(
  mapStateToProps,
  {  }
)(Shop);