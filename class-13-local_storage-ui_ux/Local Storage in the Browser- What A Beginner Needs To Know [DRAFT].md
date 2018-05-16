# Local Storage in the Browser: What A Beginner Needs To Know
### Sam Hamm, PhD

This article on using local storage (in other words, storage within a single user's browser) vs. remote storage (which exists elsewhere and can be shared by other users) emerged from my experiences teaching **Code 201: Foundations of Software Development** at Code Fellows in Seattle, WA.

Code 201 is focused on techniques of web development, so interaction with the browser environment is central. For this article, as in Code 201, we are using Chrome and its built-in Developer Tools for examples, but these techniques work in other browsers.

This article assumes knowledge of JavaScript fundamentals and also the basic principles of Object Oriented Programming (OOP), familiarity with how JavaScript handles browser events, as well as the `window` and `document` objects that are native to web browsers.

## Why We Study Local Storage in Code 201

Our aim with study of local storage in Code 201 is to introduce our students to JavaScript Object Notation (JSON) and persistence concepts, and to develop an understanding of the basic techniques for storing data. Even though the term feels dated to us now, the internet remains as the "information superhighway," and ultimately, it is data persistence that facilitates the actual storage and sharing of the information upon which the internet is built.

Via study of local storage, Code 201 students are guided through a simple and self-contained exposure to persistence than that of managing the more complex mechanics of remote storage, which we cover in subsequent courses.

In Code 301, our students learn to consume data from a remote storage context using Structured Query Language (SQL), Asynchronous Javascript and Extensible Markup Language (AJAX), and interaction with Application Programming Interfaces (APIs).

In our code Code 401 courses in JavaScript and Python, our students learn to build APIs that provide users with access points to data, as well as techniques in data modeling and the use of data structures.

Thus, our study of local storage and persistence in Code 201 is designed to provide the best possible foundation for our students to prepare them for the courses that follow.

## What Is Persistence?

In the simplest terms, persistence refers to the methods and techniques of how information is stored and retrieved. Technical definitions, however, provide richer context and also show that the definition of persistence in computer science carries all the way down to the physical layer of how computers are built. Consider this definition of persistence that comes from [Techopedia](https://www.techopedia.com/definition/8842/persistence-computing):

> Persistence refers to object and process characteristics that continue to exist even after the process that created it ceases or the machine it is running on is powered off. When an object or state is created and needs to be persistent, it is saved in a non-volatile storage location, like a hard drive, versus a temporary file or volatile random access memory (RAM).

Let's simplify this and look at the use case for web developers. What exacty does *"object and process characteristics that continue to exist even after the process that created it ceases or the machine it is running on is powered off"* refer to in a web application? For starters, we can use the term *state* to represent the aforementioned "object and process characteristics."

Or, consider the [Wikipedia](https://en.wikipedia.org/wiki/State_(computer_science)) technical definition of state:

> In computer science and automata theory, the state of a digital logic circuit or computer program is a technical term for all the stored information, at a given instant in time, to which the circuit or program has access.[1] The output of a digital circuit or computer program at any time is completely determined by its current inputs and its state.

In the simplest terms, as applied to web development, ***state*** holds the artifacts of user interaction, such as which elements a user has clicked on a webpage, or what text a user entered into a form. These artifacts, these pieces of information about user interaction, are initially stored in browser memory through use of JavaScript. But, upon refreshing the browser window -- whether by doing a page refresh, navigating to a different page, or by shutting down the browser or computer -- state is lost unless it is stored in a non-volatile location, such as local storage, session storage, or a database in a remote storage context.

This caputuring of state is often referred to as the *persistence layer* of a web application.

## Different Kinds of Persistence

There are several different techniques and approaches to capturing the state of a web application. They differ by the location of the stored data, how long the data lasts, who can access it, and the use case of the application. The following approaches to persistence are generally ordered from the least persistent to the most persistent.

- **No Persistence**: There is no capturing of any user input; every time the page reloads it is exactly the same. The initial load state of the page is determined by whatever information is in the source code for the page.
- **Session Storage**: This approach allows for capturing of user interaction, and lasts as long as the browser application is open, including through page refreshes and navigation from/to the page. This is only accessible to an individual user in a single browser.
- **Local Storage**: This approach allows for capturing of user interaction, and lasts beyond the closing of a browser application or a restart of a computer, because the data is written to dedicated space of the user's hard drive. The data will remain until it is deliberately cleared. This is only accessible to an individual user in a single browser.
- **Remote Storage**: In this approach, state is captured and stored in a remote database that is accessible to multiple users from multiple computers in distributed locations. This shared storage is how we think of the internet working as a conduit and repository for information.

## Why Use Local Storage?

There are many possible use cases for local storage, which can function similar to how cookies are used in a browser to provide a user-specific experience. For instance, a stored login for an ecommerce site, or a site that allows a user to preserve settings or "favorites" options that are unique not only to a user, but also to a specific browser.

How have Code 201 students used local storage in their final projects?

- Sharing of data between multiple pages on a single website
- Giving a user the option to return to a quiz or questionnaire where the user left off previously
- Storing the high scores for a game

The possibilities for using local storage to provide a customized user experience are only limited by the imagination and resourcefulness of the individual developer.


## How to Use Local Storage

Once a developer has decided upon a use case for which local storage is the best solution, the next task is to add the necessary components to the code.

There are a few basic questions that must be addressed first:

- What data to store?
- When to store data?
- When to retrieve data?

After addressing these questions in a general way, we'll take a look at the necessary code.

**What data to store?**

In general, the goal should be to store the unique data artifacts of user interaction that are captured in memory and typically stored in a JavaScript data structure such as an array or object (or an array of objects, which is also how many APIs deliver data to users, showing that working with local storage is a useful foundational skill for web developers).

Note that the storage/retrieval process does have the potential to modify JavaScript objects, so care should be taken to avoid these two pitfalls:

1. When objects are passed through local storage, they lose any methods (functions) that are attached to them. Care should be taken to insure that only objects containing strictly data are sent to local storage, or that only the data-containing properties of the objects are stored.
2. When objects that are made from a constructor function are passed through local storage, they lose their inheritance link to the constructor. Although the properties and data stored in them are preserved, the ability to update/modify the objects by manipulating the constructor's prototype is lost.

**When to store data?**

When capturing state, the common approach (but not the only one) is to store any changes to state at the time the change happens. A simple way to think about is that whenever a user interacts with a webpage in a way that changes the value of any JavaScript variables that need to be retained, write the new information to local storage then.

Once the storage mechanism is set up, the process of writing to local storage requires only a single line of code at the point where the data is changed, such as an incrementer on a click counter or the event handler for a form.

**When to retrieve data?**

This is the simplest part: Since web pages can use JavaScript to maintain state in active memory in the browser, the only time that data needs to be retrieved and loaded from local storage is on page load or page refresh.

## Code!

Time to get more technical!

An important characteristic to understand about local storage is that it stores all data as a JavaScript string primitive data type. So, before we can place a JavaScript data structure such as an array into local storage, we have to make it into  a string by stringifying it.

Really. Stringify. We do that with a browser feature called `JSON.stringify()`. 

JSON stringify/parse
Tip: make a button that will clear Local Storage. Just makes things easier.

```
getItem()
setITem()
clear() - set up a button!
stringify()
parse()
Show all of the possible errors
localStorage. to see all possibilities in console
```

## The Docs & Highly Technical Stuff

Local Storage is specific to a domain, or in other words, a single project.

https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

Local storage is a JavaScript object; as such, it has properties and methods that we can utilize.
(Screenshot of console showing all of them)

## Acknowledgements

Brook Riggio, VP of Education at Code Fellows, and my Code 201 co-instructors: Nicholas Hunt-Walker, Duncan Marsh, Brian Nations, Scott Schmidt, and Dan Schwartz. (Go ahead and add everyone, and ask them to preview the article?)

