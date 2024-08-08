export default class Node<T> {
  private _value: T;
  private _next: Node<T> | null;

  constructor(
    value: T,
    next: Node<T> | null
  ) {
    this._value = value;
    this._next = next;
  }

  public get value(): T {
    return this._value;
  }

  public set value(v: T) {
    this._value = v;
  }

  public get next(): Node<T> | null {
    return this._next;
  }

  public set next(v: Node<T> | null) {
    this._next = v;
  }

  *[Symbol.iterator]() {
    let node: Node<T> | null = this;
    while (node !== null) {
      yield node.value;
      node = node.next;
    }
  }
}
