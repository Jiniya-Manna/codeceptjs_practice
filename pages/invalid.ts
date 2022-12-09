const { I } = inject();
var faker = require ('faker')
export = {

  invalid() {
    I.click('[href="/companies/list"]');
    I.wait(3)
    let  words = faker.random.words();
    console.log("output",words);
    I.fillField('[data-testid="search-input"]' , words);
    I.see("No results");
    I.click('[href="/logout"]');
    I.wait(2);
  }
}
