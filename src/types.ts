interface Post {
  id: string
  title: string
  body: string
}

export type Data = Array<Post>

export interface NormalizedData {
  byId: {
    [key: string]: Post
  }
  allIds: Array<string>
}