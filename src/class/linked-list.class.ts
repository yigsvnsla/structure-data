import Node from "./node.class";

export default class LinkedList<T> {
  private _head: Node<T> | null;
  private _size: number;

  constructor() {
    this._head = null;
    this._size = 0;
  }

  public add(value: T): Node<T> {
    const node = new Node(value, null);
    if (!this.head) this._head = node;
    else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }
    this._size++;
    return node;
  }

  public contains(predicate: (value: T) => boolean): T | null {
    let current = this._head;
    while (current !== null) {
      if (predicate(current.value)) return current.value;
      current = current.next;
    }
    return null;
  }

  public delete(predicate: (value: T) => boolean) {
    let current = this._head;
    if (!current) return null;
    if (predicate(current.value)) {
    }
  }

  // remove(value: T): boolean {
  //   if (!this.head) {
  //     return false;
  //   }

  //   let n = this.head;

  //   if (n.value === value) {
  //     if (this.head === this.tail) {
  //       this.head = null;
  //       this.tail = null;
  //     } else {
  //       this.head = this.head.next;
  //     }
  //     return true;
  //   }

  //   while (n.next !== null && n.next.value !== value) {
  //     n = n.next;
  //   }

  //   if (n.next !== null) {
  //     if (n.next === this.tail) {
  //       this.tail = n;
  //     }
  //     n.next = n.next.next;
  //     return true;
  //   }

  //   return false;
  // }

  public get size(): number {
    return this._size;
  }

  public get head(): Node<T> | null {
    return this._head;
  }
}
