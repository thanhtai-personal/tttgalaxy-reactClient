import _ from 'lodash'

export const getParamFromUrl = (path, url) => {
  let paramsStrings = url.split('?')[1].split('&')
  let paramString = paramsStrings.find((ps) => ps.includes(path))
  if (_.isNil(paramString)) return ''
  return paramString.split('=')[1] || ''
}