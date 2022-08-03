import { MainPage } from "./MainPage";
import { Page } from "@playwright/test";

export class SubscriptionPage extends MainPage {
  constructor(page: Page) {
    super(page);
  }

  async getSubscriptionText(selector: string) {
    return this.page.innerText(selector);
  }
}
