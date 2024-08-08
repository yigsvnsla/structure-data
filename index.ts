import Book from "./src/class/book.class";
import LinkedList from "./src/class/linked-list.class";

const linkedList = new LinkedList<Book>();

linkedList.add(new Book(0, " book 1"));
linkedList.add(new Book(1, " book 2"));
linkedList.add(new Book(2, " book 3"));

console.log(linkedList.contains((node) => node.id === 3));

