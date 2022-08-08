import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { FilmsPage } from "../pages/FilmsPage";
import { SearchPage } from "../pages/SearchPage";
import { SubscriptionPage } from "../pages/SubscriptionPage";
import { selectors } from "../constants/locators";
import {
  buttonText,
  greenBook,
  login,
  podcastText,
  topTitle,
} from "../constants/strings";
import { MediaPage } from "../pages/MediaPage";

test.describe("Tests for kinopoisk.ru", async () => {
  test("Test login page", async ({ page }) => {
    await page.goto("/");
    const loginPage = new LoginPage(page);
    await loginPage.enterLogin(selectors.loginButton);
    await loginPage.typeLogin(selectors.loginInput, login);
    await loginPage.pressEnter();
    const checkResult = await loginPage.getPasswordPromptElement(
      selectors.passwordInput
    );
    expect(checkResult).toBeVisible();
  });

  test("Test search page", async ({ page }) => {
    await page.goto("/");
    const searchPage = new SearchPage(page);
    await searchPage.typeSearchQuery(selectors.searchInput, greenBook);
    await searchPage.pressEnter();
    const searchResult = await searchPage.getFilmElement(
      selectors.searchResult
    );
    expect(searchResult).toContain(greenBook);
  });

  test("Test subscription page", async ({ page }) => {
    await page.goto("/");
    const subscribtionPage = new SubscriptionPage(page);
    await subscribtionPage.enterSubscription(selectors.subscribtionLink);
    const checkResult = await subscribtionPage.getSubscriptionText(
      selectors.subscribtionButton
    );
    expect(checkResult).toContain(buttonText);
  });

  test("Test media page", async ({ page }) => {
    await page.goto("/");
    const mediaPage = new MediaPage(page);
    await mediaPage.enterMedia(selectors.mediaButton);
    const checkResults = await mediaPage.getPodcastsText(
      selectors.mediaPodcastButton
    );
    expect(checkResults).toContain(podcastText);
  });

  test("Test top films page", async ({ page }) => {
    await page.goto("/");
    const filmsPage = new FilmsPage(page);
    await filmsPage.enterFilms(selectors.films);
    await filmsPage.enterTopFilms(selectors.filmsTop);
    const checkResults = await filmsPage.getTitle(selectors.topTitle);
    expect(checkResults).toContain(topTitle);
  });
});
