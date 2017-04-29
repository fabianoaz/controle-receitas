import { ControleReceitasPage } from './app.po';

describe('controle-receitas App', () => {
  let page: ControleReceitasPage;

  beforeEach(() => {
    page = new ControleReceitasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
