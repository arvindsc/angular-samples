import { HandsonNgPage } from './app.po';

describe('handson-ng App', function() {
  let page: HandsonNgPage;

  beforeEach(() => {
    page = new HandsonNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
