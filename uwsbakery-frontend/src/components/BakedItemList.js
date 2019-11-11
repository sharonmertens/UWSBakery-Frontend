import React, { Component } from 'react'

import BakedItem from './BakedItem'

class BakedItemList extends Component {
  render() {
    return (
      <div className="baked-item-list">
      this is the baked item list component
      <BakedItem />
      </div>
    )
  }
}

export default BakedItemList
