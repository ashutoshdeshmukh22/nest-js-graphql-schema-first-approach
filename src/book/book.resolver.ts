import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Book')
export class BookResolver {
  @Query('books')
  getAllBooks() {
    // Return Books
    return [
      { id: 1, title: 'Harry Potter', price: 499 },
      { id: 2, title: 'Stranger Thing', price: 699 },
      { id: 3, title: 'Robin Hood', price: 299 },
    ];
  }
}
