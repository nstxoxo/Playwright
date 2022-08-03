import { MainPage } from "./MainPage";
import { Page } from "@playwright/test";

export class MediaPage extends MainPage {
  constructor(page: Page) {
    super(page);
  }

  async getPodcastsText(selector: string) {
    return this.page.locator(selector).innerText();
  }
}
