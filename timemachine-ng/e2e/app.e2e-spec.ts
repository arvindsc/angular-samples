import { TimemachineNgPage } from './app.po';

describe('timemachine-ng App', function() {
  let page: TimemachineNgPage;

  beforeEach(() => {
    page = new TimemachineNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
