# Smart Chair

The goal of this project was to create a user interface for a chair with extra features, making it 'smart'.

I added the following features to this chair:

## Temperature Control:

Adjusts the chair temperature from 40–60 degrees.
If I had more time, this change would also be reflected
on the chair SVG. For now, the temperature change is
shown directly on the control.

## Back Adjustment Control:

Allows the user to push, pull, and rotate the individual
back panels. The controls function independently,
although the changes are not currently reflected on
the chair SVG.

## Device Charging:

Four USB-C ports allow the user to charge their devices.
Click on a port to activate it and watch the corresponding
charge indicator fill up.

## Chair Rotation Control:

Controls the rotational angle of the chair. While the
rotation is not currently reflected on the chair SVG,
the change in angle is displayed here and on the
right armrest angle indicator.

## Chair Angle Indicator:

Displays the chair's current facing angle. Control
over the angle is located on the left side of the chair.

## Chair Height Control:

Displays the current chair height and allows the user
to adjust it. The chair SVG updates to reflect changes
in height.

## Massage Control:

Allows the user to activate a back massage and/or seat
massage and adjust the strength of each. The corresponding
chair sections become progressively darker orange as
the massage strength increases.


# Code Implementation

I used Svelte, JavaScript, HTML, and CSS for this project. I didn't use any external libraries besides Svelte\store, which I used for my writable() variables.

I tried my best to keep everything as modular as possible. Each component was created in a separate .svelte file and then imported into the main page later. Initially I had only 1 page for all of my components, but I ended up making a separate page for each location on the chair to better communicate to the user what each UI block was.

Each component had its own JS imports, HTML structure, and CSS styling. I learned the hard way that every component needs to use the same sizing unit (e.g. view width/ view height or % of screen or pixels) in order to import them properly onto the same page and line them up easily.

All JS scripts were written into a scripts.js file. I did this for my own sake, and in case I needed a JS variable to communicate with multiple different functions communicating with different components.

# Future Plans

There are a lot of things I wanted to do with this project, but unfortunately ran out of time before I could complete them. I didn't get the idea to make an SVG of the chair until the day before the deadline, so a lot of functionality related to it did not get implemented. 

This includes moving the chair back in response to the chair adjustment control being changed and having the chair seat and back rotate when the user rotates the chair.

Additionally I ran out of time to add more things to the left side of the chair, and I didn't add anything to the right side and right front of the chair.

# AI Usage

Since this was my first project using Svelte and CSS, I relied heavily on ChatGPT for syntax. There are a lot of random different ways of styling components in particular that weren't intuitive to me, and ChatGPT helped me learn those things.

I also used ChatGPT for a lot of the lighting effects, since those required a lot of specific hex values and effect names that I didn't know well enough to do all on my own.

I used ChatGPT to help format my Home Page and Information Page.

I used ChatGPT to learn how to create the chair SVG, although the chair itself I made manually. I also used it to help me understand how to change the color / position of the SVG polygons in response to the user's inputs on my UI.
