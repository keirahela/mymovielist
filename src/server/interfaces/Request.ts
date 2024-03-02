export interface Request {
    type: string;
    provider: string;
    id: string | number;
}

export interface MovieData {
    rating: number
    title: string
    description: string
    thumbnail: string
}
  