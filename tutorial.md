# Step-by-step guide to creating a webpage using HTML, CSS, and JS

### Goal 1: To outline the process of creating pages in javascript/html/css

- websites are made with **html** first, then css, and finally a dash of js
- first you need a solid idea of how you want to lay out your page (think wireframing and feature list)
- tools like Figma can be useful here but as a developer it is important not to get lost in the process. I recommend using pen/pencil and scrap paper
- then you need to work out how the various parts of your design will be managed
- for something like a static iframe that lets you see slides on the leeds pathology website, simple html will work just fine
- if you have specific needs around the way certain elements in the page look (like the navbar or buttons) then you'll be using html to add classes and then using css to target those classes with custom instructions
- for dynamic elements that need to happen asynchronously, on event (like click or when the user is filling out forms), you'll want to use js as it is faster and simpler to produce interactive elements with than using html
- once you've established the core features of your page and identified the ways you want to manage them you need to write out the basic structure of your page in html
- add divs and page breaks and containers, whatever you need to get the page looking how you're imagining it
- now you can apply any of the custom styling that you want in the css
- it could be that you've got lots of pages and want the user to be able to navigate using a navbar, and that navbar has buttons that should change colour on hover
- you should also write any function descriptions out in js at this stage
- i like to create my functions with just the skeleton and flesh them out later, as a sort of protoyping technique, but how you go about doing this is entirely up to you
- i write out the code part of my skeleton function in comments
- this way i'm able to specify how it might work but not lose sight of how the functions will work together
- most importantly I'm trying to keep my functions within the SOLID principle
- there's [some depth](https://en.wikipedia.org/wiki/SOLID) to this idea but at its most basic level it just means to keep each function single use and modular
- it's also important that the name of a function tell you clearly what it is intended for and it is good practice to pick a naming convention and stick to it (e.g. camelCase)
- and that if nothing else you are clear about what parameters your function will take and what it will return
- an example of what I might normally write inside a function like this one:
```
    function retrieveSlideUrl(entity, case) {
        // call the database.db file with a specific entity and case to pull the next valid slide image
        // return someURL
    }
```
by writing out these 3 things clearly (1. function name 2. parameters 3. return) i ensure that I've captured the minimum necassary information that will either not change at all or change minimally, as there are improvements to the overall program and to the specific code of this function

so now you've got the minimum requirements written out in .html .css and .js files but if you do >>>node server.js nothing of value will happen
so lets write out our functions in full and try and run the server.js

**Iterative testing — checking your page after each significant change — ensures that you can quickly identify and resolve errors. It’s far easier to fix issues when you know exactly what has changed since the last working version.**

since this is a troubleshooting step that requires some patience, repetition, and a keen eye for reading and deciphering error codes, it is important that we make our functions as simple as possible and try to get the page running with the minimum number of functions
if, for example, you have a complex function that makes several other function calls then you could try to create that function using some placeholder inputs where those internal function calls would go

this will allow you to work through each error one at a time, rather than being overwhelmed by many errors that are occuring together

### Goal 2: To carry out the process of creating a page

This is a summary of the steps described above. Try following along in order and we'll find out how good my understanding is!

1. Draw a quick, draft design of how you want your webpage to look on a piece of scrap paper.
2. Make annotations of the page elements for where you want to implement CSS and JS.
3. if you don't already have a working directory then set one up. That could be as simple as running `npm init -y`,
4. Use the boilerplate code provided below to set up your `server.js`, `index.js`, `index.html`, and `app.js` files.
5. Start working on the HTML by making changes to `index.html`, reloading the page and seeing how you like them before adding more.
6. Write out the minimum number of functions required to get a loading version of the page in the comment style I demonstrated above.
7. Flesh out those functions with simple code. It can always be revised later!
8. Reload and test your site to see if there are any errors or if your changes have worked.
9. By going one step at a time and testing in between additions we can ensure that any error messages are new and relevant to the code we are currently working on. Debug any error messages that come your way.
10. That's it! If you repeat this process enough times you will have a website that functions exactly as you've envisioned it.