import { Page } from "@playwright/test";

export class MainPage {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async typeSearchQuery(selector: string, text: string) {
    await this.page.type(selector, text);
  }

  async pressEnter() {
    await this.page.keyboard.press("Enter");
  }

  async enterMedia(locator: string) {
    const enterMedia = this.page.locator(locator);
    await enterMedia.click();
  }

  async enterFilms(locator: string) {
    const enterFilms = this.page.locator(locator);
    await enterFilms.click();
  }

  async enterSubscription(locator: string) {
    const enterSubscription = this.page.locator(locator);
    await enterSubscription.click();
  }

  async enterLogin(locator: string) {
    const enterLogin = this.page.locator(locator);
    await enterLogin.click();
  }
}
