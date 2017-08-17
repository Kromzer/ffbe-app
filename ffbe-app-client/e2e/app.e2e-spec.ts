import { FFBEAppClientPage } from './app.po';

describe('ffbe-app-client App', () => {
  let page: FFBEAppClientPage;

  beforeEach(() => {
    page = new FFBEAppClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
