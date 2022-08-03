import { MainPage } from "./MainPage";
import { Page } from "@playwright/test";
import { selectors } from "../constants/locators";

export class FilmsPage extends MainPage {
  constructor(page: Page) {
    super(page);
  }

  async enterTopFilms(locator: string) {
    this.page.locator(locator).click();
  }

  async getTitle(locator: string) {
    return this.page.locator(locator).innerText();
  }
}
