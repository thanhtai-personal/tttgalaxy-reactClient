import React, { PureComponent } from "react";
import _ from 'lodash'

import './list.scss'


class ItemList extends PureComponent {
  constructor(props) {
    super(props)
    this.renderItemList = this.renderItemList.bind(this)
  }

  renderItemList() {
    const { props: { data } } = this
    let itemInRow = []
    let ItemListElement = []
    const countItem = data.length, maxItemInRow = 6
    data.forEach((item, index) => {
      itemInRow.push(item)
      if ((index + 1) % maxItemInRow === 0 || index + 1 === countItem) {
        if (index + 1 === countItem && countItem % maxItemInRow !== 0) {
          let missingItem = maxItemInRow - countItem % maxItemInRow
          for (let i = 0; i < missingItem; i++) {
            itemInRow.push({
              id: index - i + maxItemInRow,
              imageUrl: null
            })
          }
        }
        ItemListElement.push(
          <div className="row row-item" key={`shopping-item-row${item.id}`}>
            {itemInRow.map((it) => {
              return (
                <div className={`col-sm-${12 / maxItemInRow}`} key={`shopping-item-${it.id}`}>
                  {!_.isNil(it.imageUrl) && <div className="card custom-card-size">
                    <div className="card-body">
                      <h5 className="card-title">{it.name}</h5>
                      <div className="card-image-wrapper">
                        {/* eslint-disable-next-line */}
                        <img className="card-image" src={it.imageUrl} alt={`item-image-${it.id}`} />
                      </div>
                      <p className="card-text">{it.description}</p>
                    </div>
                  </div>
                  }
                </div>
              )
            })}
          </div>
        )
        itemInRow = []
      }
    });
    return ItemListElement
  }

  render() {
    const {
      renderItemList
    } = this
    return (
      <div className="container-fluid" id="item-list">
        {
          renderItemList()
        }
      </div>
    )
  }
}

export default ItemList