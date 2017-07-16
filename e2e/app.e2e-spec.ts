import { BookstoreExamplePage } from './app.po';

describe('bookstore-example App', () => {
  let page: BookstoreExamplePage;

  beforeEach(() => {
    page = new BookstoreExamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
