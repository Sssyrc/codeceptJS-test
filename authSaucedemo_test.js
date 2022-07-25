const assert = require ('assert');

Feature('auth');
Before(({I}) => {
    I.amOnPage('https://www.saucedemo.com/');
});

Scenario('Авторизация на сайте', async({ I, loginPage, mainPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    const title = await mainPage.getTitle();
    assert.deepStrictEqual(title, 'Products', 'Вход не выполнен');
});

Scenario('Добавить товар в корзину, проверка через корзину', async({ I, loginPage, mainPage, cartPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await mainPage.addItem();
    await mainPage.goToCart();
    const cartBackpack = await cartPage.getItemName();
    assert.deepStrictEqual(cartBackpack, 'Sauce Labs Backpack', 'Продукт не добавлен в корзину');
});

Scenario('Добавить товар в корзину, проверка через главную страницу', async({ I, loginPage, mainPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await mainPage.addItem();
    const Badge = await mainPage.getCartbadge();
    assert.deepStrictEqual(Badge, '1', 'Товар не добавлен в корзину');
});

Scenario('Оформление заказа', async({ I, loginPage, mainPage, cartPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await mainPage.addItem();
    await mainPage.goToCart();
    await cartPage.Order('CustomerFirstName', 'CustomerLastName', '123')
    const Finish = await cartPage.finishOrder();
    assert.deepStrictEqual(Finish, 'THANK YOU FOR YOUR ORDER', 'Заказ не оформлен');
});

Scenario('Выход из аккаунта', async({ I, loginPage, mainPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await mainPage.logout();
    const logUsernames = await loginPage.logScreen();
    assert.deepStrictEqual(logUsernames, 'Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitch_userPassword for all users:secret_sauce', 'sdasd');
});