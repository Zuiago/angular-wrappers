import { AngularWrappersPage } from './app.po';

describe('arq-front App', () => {
  let page: AngularWrappersPage;

  beforeEach(() => {
    page = new AngularWrappersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
