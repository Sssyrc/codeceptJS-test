const { I } = inject();

module.exports = {
  fields: {
    // Добавленный рюкзак в корзине
    cartItem: '.cart_list > .cart_item > .cart_item_label > #item_4_title_link > .inventory_item_name',
    // поля для оформления заказа
    firstName: '#first-name',
    lastName: '#last-name',
    zipCode: '#postal-code',
    checkoutInfo: '#page_wrapper > #contents_wrapper > #header_container > .header_secondary_container > .title',
    checkoutView: '.cart_list > .cart_item > .cart_item_label > #item_4_title_link > .inventory_item_name',
    checkoutComplete: '#root > #page_wrapper > #contents_wrapper > #checkout_complete_container > .complete-header',
  },

  buttons:{
    // кнопки оформления заказа
    checkoutBtn: '#checkout',
    continueBtn: '#continue',
    finishBtn: '#finish'
  },

  async getItemName () {
    const text = await I.grabTextFrom(this.fields.cartItem);
    return text;
  },

  async Order (firstName, lastName, zipCode) {
    I.click(this.buttons.checkoutBtn);
    I.see('CHECKOUT: YOUR INFORMATION', this.fields.checkoutInfo)
    I.click(this.fields.firstName);
    I.fillField(this.fields.firstName, firstName);
    I.click(this.fields.lastName);
    I.fillField(this.fields.lastName, lastName);
    I.click(this.fields.zipCode);
    I.fillField(this.fields.zipCode, zipCode);
    I.click(this.buttons.continueBtn);
    I.see('Sauce Labs Backpack', this.fields.checkoutView)
    I.click(this.buttons.finishBtn);
  },

  async finishOrder () {
    const text = await I.grabTextFrom(this.fields.checkoutComplete);
    return text;
  },
};
