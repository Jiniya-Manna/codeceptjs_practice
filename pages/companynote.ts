const { I } = inject();

export = {
    companynote() {
      I.click('[data-test-id="pop-over-trigger-el"]');
      I.seeElement('[clip-rule="evenodd"]:nth-child(1)');
      I.click('[data-test-id="options"]');
      I.see('New Note');
      I.fillField('[name="subject"]' , '');
      I.click('[type="submit"]');
      I.see('This field is required');
    }
    }
  

