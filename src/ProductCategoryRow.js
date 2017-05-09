import React from 'react'

export default class ProductCategoryRow extends React.Component {
  render () {
    return <tr>
      <th colSpan='2'>{this.props.category}</th>
    </tr>
  }
}

ProductCategoryRow.propTypes = {
  category: React.PropTypes.string
}
