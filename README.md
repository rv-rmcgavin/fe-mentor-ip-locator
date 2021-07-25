# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- Based off my learnings and notes on the early process of my [Tip Splitter](https://github.com/rv-rmcgavin/fe-mentor-tip-calculator) project for [frontendmentor.io](https://frontendmentor.io), I created some base `.tsx` and `.ts` files and a bash script to get most of the standard work set up quickly. 
- My [setup.sh](https://gist.github.com/rv-rmcgavin/7ec4e5b3dcc0dbda30c343e5fcfdff3f) shell script. It can be pretty easily adapted to any flow.
- Set up theme, fonts, and any other global styles based on [style-guide.md](./style-guide.md)
- I've outlined Inputs & Outputs below separately. Now knowing those, I think the best approach will be a mock up to mostly achieve the mobile design.
- Mocked up basic mobile design with dummy data.
- Small aside. I want to set up airbnb eslint config here...I did it! It wasn't that hard. Go figure.
- Get the ip address from the input, make the get request to ipify, receive data, set it up how we want to display it, and...display it!
- Let's get leaflet working.
- Leaflet is working great! Had a great learning about dynamic imports to check out further below.
- Get the user's ip address, and make the api automatically.
  - Be sure to do this only once.
  - Turned out to be much easier to get the user's ip address by simply sending it to the geo ipify endpoint without an ip. 
- In [/src/components/Form/index.tsx](./src/components/Form/index.tsx) I got a linting error because I needed to put a function I wrote as a dependency of a `useEffect(() => {})`. It led down this whole path of using `useCallback` on the function and adding another dependency array. I did not at all follow why the linter had me do this, and what impact it had. I want to learn more about that.
- Desktop styles
- Active states
- validate data for either ip address or domain to be accepted.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
### What I learned

Dynamic rendering to solve the classic next.js problem of `window is not defined`.

```tsx
import dynamic from 'next/dynamic';

const Map = dynamic(
    () => import('../src/components/Map/index'), // replace '../src/components/Map/index' with your component's location
    { ssr: false }, // This line is important. It's what prevents server-side render
  );
```
In [/src/components/Form/index.tsx](./src/components/Form/index.tsx), I used a pattern I've had to implement a couple times before. Basically this pattern develops out of a need to perform certain state updates, and ensure that those state updates are complete before running the next function. In my experience, it also seems common to creep up when you are updating data relied upon to make an API call. 

Basically, it's a callback pattern, but at the end of it, the function to make the API call is declared later than you want to use it. What I've done in the past, and what I did here was set up a `useEffect()` that would run the API call at the end of the "callback chain" based on updating a boolean piece of state set up just to control whether this api call is made or not. 

While this pattern works, I hate it. I want to look in to better ways to solve this.


### Continued development

- Clean up the code quite a bit. Create hooks for the components that needs their functionality separated out.
- Update to not auto populate the search bar with the user IP, and add placeholder text that you can search by domain or IP.
- Add an error message above input if validation failed and disable button.

### Useful resources

- [SO: Leaflet with next.js?](https://stackoverflow.com/questions/57704196/leaflet-with-next-js) - I had a problem with leaflet loading and crashing because the window was not loaded yet. A fairly common problem with next.js. Until now I had been able to solve it by checking for the `window` object or switching a `bool` in a `useEffect()`. The answer that isn't the accepted answer, but rather the one by FlippingBinary, utilizing next's dynamic imports got me through the most difficult challenge of this project.
## Author

- Website - [Rick McGavin](https://rickmcgavin.github.io)
- Frontend Mentor - [@rickMcGavin](https://www.frontendmentor.io/profile/rickMcGavin)
- Twitter - [@rickmcgavin](https://www.twitter.com/rickmcgavin)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
