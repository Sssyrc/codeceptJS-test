const { I } = inject();

module.exports = {
  fields: {
    username: '#user-name',
    password: '#password',
    botColumn: '#root > div > .login_wrapper > .login_wrapper-inner > .bot_column',
    logCred: '#root > div > .login_wrapper > .login_credentials_wrap > .login_credentials_wrap-inner',
  },
  buttons: {
    loginBtn: '#login-button',
  },
  async login (username, password) {
    I.click(this.fields.username);
    I.fillField(this.fields.username, username);
    I.click(this.fields.password);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.loginBtn);
  },
  async logScreen () {
    const text = await I.grabTextFrom(this.fields.logCred);
    return text;
  },
};