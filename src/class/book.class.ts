export default class Book {
  private _id: number;
  private _name: string;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  public get id(): number {
    return this._id;
  }

  public set id(v: number) {
    this._id = v;
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }
}
