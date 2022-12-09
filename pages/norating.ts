const { I } = inject();

export = {

  norating() {

  I.see('Feedback');
  I.wait(2);
  I.fillField('[data-test-id="feedback-comment"]' , 'test comment');
  I.click('[data-testid="save-btn"]');
  I.wait(2);
  I.see('Feedback value is a required field');
  
  
}
};