export interface Member {
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  login: Record<string, string>
  registered: Record<string, string>
  phone: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
}
