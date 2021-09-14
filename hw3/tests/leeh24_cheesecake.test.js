//Henry Lee

const console = require('console');

global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const { JSDOM } = require("jsdom"); // ****

var fs = require('fs');
test('test selectEvent', () => {

    //Read the index.html file into a string
    var html = fs.readFileSync('public/index.html', 'utf8');
    //console.log(html);

    expect(html).toEqual(expect.anything()); //any non-null value is okay

    //put the HTML into a testing DOM and do a sanity check
    const { window } = new JSDOM(html);  // ****

    console.log(window.document.getElementById("pageHeader").textContent);


    const $ = require('jquery')(window); //**** 
    //require("../public/javascripts/cheesecake");

    // check by dom obj
    expect(window.document.getElementById("pageHeader").textContent).toBe("Cheesecake Order Form");

    // check by jquery get element by ID
    expect($("#pageHeader").html()).toBe("Cheesecake Order Form");

    // check by jquery get element by tag
    expect($('h1').html()).toBe("Cheesecake Order Form");
});