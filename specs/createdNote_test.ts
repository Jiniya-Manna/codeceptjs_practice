import loginPage from "../pages/login";
import noteCreatedPage from "../pages/noteCreated";
Feature('creatNote');
Scenario('note create', ({ I  }) => {
loginPage.login();
noteCreatedPage.noteCreated()
});