# Overview of the Learn CSS Layout tutorial
### [http://learnlayout.com](http://learnlayout.com)

A few things to keep in mind:

- Width is everything. Height is determined container and content.
- Gotta know your pixels. This is a MUST.
- Learning to eyeball pixels makes you much more efficient in building layout.

---

### 1/19: Introduction

*"Having no layout whatsoever is almost ok if all you want is one big column of content."*

---

### 2/19: `block`, `inline`, and other `display` settings

`display` property

- `block`
- `inline`
- `none` (removes an element) vs. `visibility: hidden;` (only conceals an element, leaving it in place)
- [Many others are explained in the MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

---

### 3/19: Do you want to center all the things?

`margin: 0px auto;` centers an element in its container.

*"Setting the `width` of a block element will prevent it from stretching out to the left/right edges of its container. Then, you can set the left and right margins to `auto` to horizontally center that element within its container. The element will take up the width you specify, then the remaining space will be split evenly between the two margins."*

It's all about the container (parent). As it often is with CSS layout.

---

### 4/19: `max-width` gets us some basic responsive design

*"Using `max-width` instead of `width` will improve the browser's handling of small windows. This is important when making a site usable on mobile."*

This is our first exposure to setting a ***breakpoint***, where the behavior of CSS changes depending upon the width of the browser window. In this age of so many devices, like small phones and big phones and phablets and tablets and small laptops and big laptops and a huge variety of desktop monitor sizes and TVs, and the ability to instantly (or carelessly) change the window width by rotating the device 90&deg;, responsive design lets us customize the user experience to our desired specificity, regardless of device or orientation.

---

### 5/19: The box model has a width problem...

*"An element's border and padding will stretch out the element beyond the specified width. This page in the tutorial shows an example where two elements with the same width value end up different sizes in the result."*

*"For generations, the solution to this problem has been extra math. CSS authors have always just written a smaller width value than what they wanted, subtracting out the padding and border. Thankfully, you don't have to do that anymore..."*

---

### 6/19: ...solved by `box-sizing` with `border-box`

*"When you set `box-sizing: border-box;` on an element, the padding and border of that element no longer increase its width."*

This page also introduces the `-webkit` and `-moz` prefixes to account for browser quirks that are artifacts of proprietary design. The more you explore the boundaries of fresh and new CSS ideas, the more you'll see these prefixes.

---

### 7/19:  `position` is complicated... very complicated

 `position: relative;` lets you move/offset an element from the position it would occupy in normal flow

 `position: fixed;` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.

 `position: absolute;` is a monster.

 `absolute` is the trickiest position value. `absolute behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport. If an absolutely-positioned element has no positioned ancestors, it uses the document body, and still moves along with page scrolling. Remember, a "positioned" element is one whose position is anything except static.

---

### 8/19: `position` example

*"This example works because the container is taller than the nav. If it wasn't, the nav would overflow outside of its container."*

We can show this by simply increasing the size of the nav to include more \<li> items. See the example in our class repo. Why does this happen? How do we fix it? We'll see in later examples.

---

### 9/19: `float`

*"Float is intended for wrapping text around images."*

Can you use it for other purposes? Like making text flow around other elements/content? For making elements move around one another? Well, yes, but the farther you move from the intended use case of text flowing around images, the more likely there is to be a better solution for what you are trying to achieve.

Note this declaration on the `img`: `margin: 0 0 1em 1em;` We need to unpack some of what is going on here.

---

### 10/19: `clear`

*"The clear property is important for controlling the behavior of floats."*

This is tricky. If you float an element, and want to make sure that an adjacent **element** does not overlap it (remember... text will flow around the `float`, but other elements will not), apply a `clear` to the adjacent element to prevent the overlap.

Usual box model rules (margin, border, padding) still apply.

---

### 11/19: The `clearfix` hack

Nothing pretty about this. Say you have an image (or an element with a specified height) that needs to be displayed at a certain size, and also that it needs to be floated inside of another element to serve the overall layout and flow of text. But... the image is taller than the container, so it overflows from the container. Applying a 'clearfix' class like this...

`.clearfix { overflow: auto; }`

...to the container will force the container to be no shorter than the element that is floated inside of it.

---

### 12/19: `float` layout example

Yes, it's possible to build layout schemes based on the `float` property. Heck, we used to use HTML tables for layout not too long ago:

`<body>`

`<table>`

`<tr>Here's the header and nav!</tr>`


`<tr>Now some content in the body</tr>`

`<tr>`

`<td>Always.</td>`

`<td>Three.</td>`

`<td>Columns.</td>`

`</tr>`

`<tr>Footer time</tr>`

`</table>`

`</body>`


And we also rode in horse-drawn carriages on our way to get medical treatments that involved the application of leeches.

We still take carriage rides for fun sometimes (maybe because we like front-row seats for pooping horses?), but do not use them as our daily transit.

Such is the case with `float`-based layouts. They have fallen out of favor given the increasing concerns toward layouts that are friendly toward mobile devices (`flex` FTW). We have better tools now. You'll see.

---

### 13/19: Percent `width`

This makes images/elements behave nicely in a layout on different size displays. And, you can apply `min-width` and `max-width` for even greater control.

This is a useful property to get familiar with.

---

### 14/19: Media queries

*"Responsive Design" is the strategy of making a site that "responds" to the browser and device that it is being shown on... Media queries are the most powerful tool for doing this."*

Most displays for desktop computers are wider than they are tall. However, most mobile displays are taller than they are wide. Media queries respond to the pixel width of the display, and typically convert all elements to block layout once a minimum window width has been detected.

---

### 15/19: `inline-block`

*You can create a grid of boxes that fills the browser width and wraps nicely. `inline-block` elements are like `inline` elements but they can have a width and height. Let's look at examples of both approaches.*

With all other inline elements (text, \<img>, \<span>, \<button>, and form elements being the most common) the size of the content determines the size of the element. These inline elements can receive the standard box model size adjustments (margin, padding, border) but generally behave like containers of a specific size.

With `inline-block`, however, we can make boxes with a defined width and height, then adjust them via the box model and give them content, including child elements.

---

### 16/19: `inline-block` layout

It is possible to do full-page layout with `inline-block`, but note that there are some finicky characteristiccs:

- `inline-block` elements are affected by the `vertical-align` property, which you probably want set to top.
- You need to set the width of each column
- There will be a gap between the columns if there is any whitespace between them in the HTML

Generally, there are more modern and better ways to handle this kind of layout.

---

### 17/19: `column`

It is possible to make text (within a container, obviously) display in multiple columns.

Note that this tutorial indicates that the browser prefixes need to be used, which is typical when new CSS features are rolling out. You probably do not need to use the prefixes with `column` at this point, but doing so makes your code compatible with more devices.

---

### 18/19: `flexbox`

`flexbox` is also a fairly recent CSS feature, and although much of what you read about it will caution you about its compatibility, [it now works just fine in most browsers](http://caniuse.com/#search=flexbox).

**[This site](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)** is probably the single best resource for learning `flexbox`. The key thing to remember is that there are different properties for the parent container and the children that define the behaviors and relationships.

As you'll see from the demos in the tutorial, `flexbox` is quite powerful and flexible. It is important to remember that as great as it is to work with `flexbox` (vertical centering FTW!), your skill level in CSS layout will ultimately be determined by your command of the key fundamental principles:

- The CSS box model
- Block vs. inline
- Normal flow vs. relative
- The basics of absolute, fixed, and float

One more thing with `flexbox`: take a look at [Flexbox Froggy](http://flexboxfroggy.com)

---

### 19/19: CSS frameworks

Imagine if someone built a CSS template that you could easily manipulate and just put content into... a template that would set up your basic styles and layouts?

Well, lots of someones have done that, and there's a lot of CSS frameworks out there. At this stage in your development, you'll hinder your growth by relying on CSS frameworks to do your work for you. You need to understand how things work. That said, you should go look at some of the ones listed in this tutorial, and also take a look at Skeleton, which is a personal favorite.

**Note:** You are not allowed to use CSS frameworks for your work in this course, and their use is strongly discouraged in Code 301. But by the time you get to 401, you can use them.
