const { I } = inject();

module.exports = {
  fields: {
    // Текст "Products" на главной странице
    Title: '#page_wrapper > #contents_wrapper > #header_container > .header_secondary_container > .title',
    // количество товаров в корзине, т.е число рядом с иконкой корзины
    Cartbadge: '#header_container > .primary_header > #shopping_cart_container > .shopping_cart_link > .shopping_cart_badge',
    Sidebar: '#menu_button_container > div > .bm-menu-wrap > .bm-menu > .bm-item-list',
  },

  buttons:{
    // кнопка добавления рюкзака в корзину
    backpackAddBtn: '#add-to-cart-sauce-labs-backpack',
    // кнопка корзины
    cartBtn: '#contents_wrapper > #header_container > .primary_header > #shopping_cart_container > .shopping_cart_link',
    // кнопка удаления рюкзака из корзиныэ
    backpackRemoveBtn: '#remove-sauce-labs-backpack',
    sidebarBtn: '#react-burger-menu-btn',
    logoutBtn: '#logout_sidebar_link',
  },

  async getTitle () {
    const text = await I.grabTextFrom(this.fields.Title);
    return text;
  },

  async addItem () {
    I.click(this.buttons.backpackAddBtn);
  },

  async goToCart () {
    I.click(this.buttons.cartBtn);
  },

  async getCartbadge () {
    const text = await I.grabTextFrom(this.fields.Cartbadge);
    return text;
  },

  async logout () {
    I.click(this.buttons.sidebarBtn);
    I.click(this.buttons.logoutBtn);
  },
};
