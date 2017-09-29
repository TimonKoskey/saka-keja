import { SakaKejaPage } from './app.po';

describe('saka-keja App', () => {
  let page: SakaKejaPage;

  beforeEach(() => {
    page = new SakaKejaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
