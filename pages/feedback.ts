import login from "./login";

const { I } = inject();

export = {

  locator: {
    feedbackBtn:'[data-testid="feedback-link"]',
    ratingBtn:`[data-test-id="star-rating"] [data-test-id="rating-inactive"]:nth-child`,
    feedbackComment:'[data-test-id="feedback-comment"]',
    feedbackSaveBtn:'[data-testid="save-btn"]',
    thankYou:'[data-test-id="modal-title"]',
    crossBtn:'[class="text-xmd text-gray-400"]',
    PretaaScn:'[src="./pretaa-logo.png"]'
  },
    feedback ()  {
    I.see('Events');
    I.click(this.locator.feedbackBtn);
    I.wait(1);
    I.see('Feedback');
    I.wait(2);
    let ratingstar = Math.floor((Math.random() * 5) + 1);
    console.log('value',ratingstar)
    I.click(`[data-test-id="star-rating"] [data-test-id="rating-inactive"]:nth-child(${ratingstar})`);
    I.wait(2);
    I.fillField(this.locator.feedbackComment , 'test comment');
    I.click(this.locator.feedbackSaveBtn);''
    I.wait(2);
    I.seeElement(this.locator.thankYou);
    I.click(this.locator.crossBtn);
    I.wait(2);
    I.see('Events');
    I.click(login.locator.logout);
    I.wait();
    I.seeElement(this.locator.PretaaScn);
}
}
