import React, { useState } from 'react'
import ActionMenu from './actionMenu'
import { NewsStyled } from './styled.js'

const NewsComponent = (props) => {
  const [dataKey, setDataKey] = useState('24h')
  const { news = [] } = props
  const data = news.find(n => n.key === dataKey) || { title: '24h', src: 'https://www.24h.com.vn/' }
  return (
    <NewsStyled>
      <ActionMenu
        setData={setDataKey}
      />
      <iframe title={data.title} src={data.src}>
      </iframe>
    </NewsStyled>
  )
}

export default NewsComponent