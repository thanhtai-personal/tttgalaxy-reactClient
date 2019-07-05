import React, { PureComponent } from "react";
import ItemDetail from './detail'
import _ from 'lodash'

import './common.scss'

class ListProductFactory extends PureComponent {

  constructor (props) {
    super(props)
    this.renderItemList = this.renderItemList.bind(this)
  }

  renderItemList () {
    const { props: { dataList, maxItemInRow, onClickItem } } = this
    let itemInRow = []
    let ItemListElement = []
    const countItem = dataList.length
    dataList.forEach((item, index) => {
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
                <React.Fragment key={`item-detail-wrapper-${it.id}`}>
                  <ItemDetail
                    dataDetail={it}
                    onClickItem={onClickItem}
                    maxItemInRow={maxItemInRow}
                  />
                </React.Fragment>
              )
            })}
          </div>
        )
        itemInRow = []
      }
    });
    return ItemListElement
  }

  render () {
    const {
      props: {
        dataList,
        customRenderList
      },
      renderItemList
    } = this
    return (
      <div className="container-fluid" id="item-list">
        {!_.isNil(customRenderList) && typeof customRenderList === 'function' ? customRenderList(dataList) : renderItemList()}
      </div>
    )
  }
}

export default ListProductFactory