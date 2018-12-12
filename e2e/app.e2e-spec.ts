import { TPANPage } from './app.po';

describe('tpan App', function() {
  let page: TPANPage;

  beforeEach(() => {
    page = new TPANPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
