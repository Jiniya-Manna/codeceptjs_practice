const { I } = inject();

export = {

  emailBlank () {
  I.refreshPage('/login')
  I.click('[data-testid="continue-btn"]');
  I.wait(2);
  I.seeElement('[data-testid="email-error"]')
  I.wait(2)

}
}
;