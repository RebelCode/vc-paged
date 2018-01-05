import {Selector} from 'testcafe'

fixture(`Index page`)
    .page('http://localhost:8082');

test('First page rendered correct and contains "Hello World!"', async testController => {
    const paragraphSelector = await new Selector('body h1:first-child');
    await testController.expect(paragraphSelector.innerText).eql('Hello World!');
});

test('Second page with vue component rendered correct and contains "John Doe"', async testController => {
    const paragraphSelector = await new Selector('body div h2:first-child');
    await testController.expect(paragraphSelector.innerText).eql('John Doe');
});