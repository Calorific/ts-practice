import { Data } from './types'

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

const getData = async (url: string): Promise<Data> => {
  return new Promise((resolve, reject) => {
    fetch(url)
        .then(data => data.json())
        .then(json => resolve(json))
        .catch(e => reject(e))
  })
}

getData(COMMENTS_URL)
    .then(data => data.forEach(comment =>
          console.log(`ID: ${comment.id}, Email: ${comment.email}`)))
    .catch(e => console.log(e.message))
