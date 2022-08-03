import { MainPage } from "./MainPage";
import { Page } from "@playwright/test";

export class LoginPage extends MainPage {
  constructor(page: Page) {
    super(page);
  }

  async typeLogin(selector: string, login: string) {
    await this.page.type(selector, login);
  }

  async getPasswordPromptElement(selector: string) {
    return this.page.locator(selector);
  }
}
