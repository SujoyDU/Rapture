import { RapturePage } from './app.po';

describe('rapture App', () => {
  let page: RapturePage;

  beforeEach(() => {
    page = new RapturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
