import loginPage from "../pages/login";
import invalidPage from "../pages/invalid"
Feature('invalidSearch');
Scenario('invalid company search', ({ I  }) => {
    loginPage.login() 
    invalidPage.invalid()
    // I.click('[href="/companies/list"]');
    // I.wait(3)
    // let  words = faker.random.words();
    // console.log("output",words);
    // I.fillField('[data-testid="search-input"]' , words);
    // I.see("No results");
    // I.click('[href="/logout"]');
    // I.wait(2);
});