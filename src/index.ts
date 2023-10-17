import { posts } from './data'
import { Data, NormalizedData } from './types'

const normalizeData = (data: Data): NormalizedData => {
  const byId = data.reduce((res, post) => ({ ...res, [post.id]: post }), {})
  const allIds = data.map(post => post.id)
  return { byId, allIds }
}

console.log(normalizeData(posts))