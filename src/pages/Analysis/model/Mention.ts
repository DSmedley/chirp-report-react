export class Mention {
  constructor(
    public id: number = 0,
    public analysis_id = 0,
    public screen_name: string = '',
    public occurs: number = 0,
    public profile_image: string = ''
  ) {

  }
}