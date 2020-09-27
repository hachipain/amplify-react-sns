describe("Authenticator:", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  describe("Sign In:", () => {
    it("allows a user to signin", () => {
      cy.get(selectors.usernameInput).type("testuser");
      cy.get(selectors.signInPasswordInput).type("testuserpass");
      cy.get(selectors.signInSignInButton).contains("Sign In").click();
      cy.get(selectors.root).contains("Global");
    });
  });
});
export const selectors = {
  usernameInput: '[data-test="username-input"]',
  signInPasswordInput: '[data-test="sign-in-password-input"]',
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  root: "#root",
};
