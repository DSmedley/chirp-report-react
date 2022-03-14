export class MenuLink {
  constructor(
    public onClick: () => void,
    public name: string = ''
  ) {
  }
}