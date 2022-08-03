import { MainPage } from "./MainPage";
import { Page } from "@playwright/test";

export class SearchPage extends MainPage {
  constructor(page: Page) {
    super(page);
  }

  async getFilmElement(selector: string) {
    return this.page.locator(selector).textContent();
  }
}
