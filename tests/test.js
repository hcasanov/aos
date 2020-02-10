const puppeteer = require("puppeteer")

async function test_success() {
    console.log('Test 1 (success) start')
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("http://localhost:3000")
    await page.type('#email_input', 'test@test.fr')
    await page.type('#password_input', 'mypassword') // Right password
    await page.click('#submit_btn')
    console.log('Try to connect...')
    await page.waitFor(2000)
    if (page.url() === 'http://localhost:3000/success')
        console.log('--- Successful connection ---')
    else
        console.log('--- Connection failed ---')
    await browser.close()
}

async function test_fail() {
    console.log('Test 2 (fail) start')
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("http://localhost:3000")
    await page.type('#email_input', 'test@test.fr')
    await page.type('#password_input', 'wrongpassword') // Wrong password
    await page.click('#submit_btn')
    console.log('Try to connect...')
    await page.waitFor(2000)
    if (page.url() === 'http://localhost:3000/success')
        console.log('--- Successful connection ---')
    else
        console.log('--- Connection failed ---')
    await browser.close()
}

async function test_start() {
    await test_success()
    await test_fail()
    console.log('Exit')
}

test_start()