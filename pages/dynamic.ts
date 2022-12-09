import * as faker from '@faker-js/faker';

const { I } = inject();

export = {

  dynamic() {

   I.click('[data-test-id="rating-inactive"]');
   I.wait(2);
   let words = faker.random.words();
   console.log("output",words);
   I.fillField('[data-test-id="feedback-comment"]' , words);
   I.click('[data-testid="save-btn"]');
   I.wait(2);
   I.seeElement('[data-test-id="modal-title"]');
   I.click('[class="text-xmd text-gray-400"]');
   I.wait(2);
   I.click('[href="/logout"]');
   I.wait(2);
   I.seeElement('[src="./pretaa-logo.png"]');
 
   
  }
  };

