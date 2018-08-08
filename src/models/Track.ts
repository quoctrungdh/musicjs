export default class Address {
  constructor(
    private title: string,
    private length: number,
  ) {}

  get getTitle(): string {
    return this.title;
  }

  get getLength(): number {
    return this.length;
  }
}