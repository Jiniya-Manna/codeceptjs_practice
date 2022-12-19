import loginPage from "../pages/login";
import noteCreatedPage from "../pages/noteCreated";
Feature('invalidSearch');
Scenario('valid company search', ({ I  }) => {
loginPage.login();
noteCreatedPage.noteCreated()
});