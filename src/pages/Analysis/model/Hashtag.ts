export class Hashtag {
  constructor(
    public id: number = 0,
    public analysis_id = 0,
    public hashtag: string = '',
    public occurs: number = 0
  ) {
  }
}