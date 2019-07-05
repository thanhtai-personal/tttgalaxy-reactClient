import React, { PureComponent } from "react";
import _ from 'lodash'

import './common.scss'

class DetailProductItemFactory extends PureComponent {

  render () {
    const {
      dataDetail,
      customRenderItemDetail,
      onClickItem,
      maxItemInRow
    } = this.props
    let detailElement = ""
    if (!_.isNil(customRenderItemDetail) && typeof customRenderItemDetail === 'function') {
      detailElement = customRenderItemDetail(dataDetail)
    } else {
      detailElement = (
        <div className={`col-sm-${12 / maxItemInRow}`} key={`shopping-item-detail-${dataDetail.id}`}>
          {!_.isNil(dataDetail.imageUrl) && <div className="card custom-card-size">
            <div className="card-body"
              onClick={() => { !_.isNil(onClickItem) && typeof onClickItem === 'function' && onClickItem(dataDetail.id) }}
            >
              <h5 className="card-title">{dataDetail.name}</h5>
              <div className="card-image-wrapper">
                {/* eslint-disable-next-line */}
                <img className="card-image" src={dataDetail.imageUrl} alt={`item-image-${dataDetail.id}`} />
              </div>
              <p className="card-text">{dataDetail.description}</p>
            </div>
          </div>
          }
        </div>
      )
    }
    return detailElement
  }
}

export default DetailProductItemFactory