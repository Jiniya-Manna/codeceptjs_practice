const { I } = inject();

export = {
feedback() {
I.see('Events');
I.click('[data-testid="feedback-link"]');
I.see('Feedback');
I.wait(1);
}
};
