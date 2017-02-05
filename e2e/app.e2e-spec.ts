import { Unrav0103Page } from './app.po';

describe('unrav0103 App', function() {
  let page: Unrav0103Page;

  beforeEach(() => {
    page = new Unrav0103Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
