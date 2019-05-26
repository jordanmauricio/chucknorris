# Chuck Norris API 

Frontmen coding assignment to query a Chuck Norris Joke API.

Resource in question: http://api.icndb.com/jokes/random/10



### Requirements

- Run in Chrome

- Fetch 10 jokes and organize them in a favorite list

- Store jokes in storage

- Document choices made through Git

- Code clarity is important

- Focus on engineering, design/animation are secondary

   

### Tasks

- [x] Setup project
- [x] Fetch 10 jokes
- [x] Fetch on button press
- [x] Add joke to favorites list
- [x] Favorite list has max 10 **unique** jokes
- [x] Remove joke from favorite list
- [x] Add favorites list to browser storage
- [x] Activate timer to fetch 1 random joke every 5 seconds to be added to favorites list
- [x] Make it look nice



### Design

###### Colors
Reference: <https://colorhunt.co/palette/1504>

Dark color: #48466d  --- hsl(243, 22%, 35%)

Dark blue: #3d84a8  ---  hsl(200, 47%, 45%)

Light blue: #46cdcf  --  hsl(181, 59%, 54%)

Aquamarine: #abedd8  --  hsl(161, 65%, 80%)



###### Font

Kaushan Script

Roboto



### Considerations Made (TBD, WIP)

-  **Hapi vs Express**

  Before this project, I had never worked with Hapi before. Before I had recently heard about it and decided to give it a try. It is [slower than Express](https://raygun.com/blog/hapi-vs-express/) according to reports, but also (in my personal opinion) easier and faster to get up and running. As this project wasn't heavily focused on back-end programming, I figured I'd give Hapi a try and I'm positively surprised.

- **Fetch vs XHR**

  Another point of relevance is my usage of the `node-fetch` npm package, as opposed to simply using XHR. I personally find fetch considerably nicer to work with, albeit you have less control of each individual steps in comparison to XHR. In this use case, I believe using `node-fetch` allowed the code to be cleaner and more readable, not to mention a lot less verbose.

- **CSS-in-JS**

  There has a lot of [debate](https://css-tricks.com/the-fragmented-but-evolving-state-of-css-in-js/) surrounding CSS-in-JS / CSS Modules etc. lately. I've experimented with styled-components in the past, I've also looked into JSS and Glamorous, but I must say I've really grown to like Emotion the most. I haven't gotten the hang of it yet (especially not how to make it look good...) but it's been fun working with it, which is why I decided to use it in this project.

- **LocalStorage vs Cookie**

  LocalStorage I've found to be super easy and nice to work with, that being said, cookies are still really nice as they can automatically delete themselves after a certain point in time. But with the help of the `store` package, writing and fetching to LocalStorage has become trivial.

- **Why not Axios**

  I've seen Axios get a lot of fan-fare lately, a lot of articles I see posted use it. However, I think Fetch is just as good, albeit maybe a bit more work and complicated to get working. In my next project I think I might finally bite the bullet and throw in Axios and see what all the hubbub is about.

- **Accessibility (a11y) is neglected**

  Usually I have an ESLint extension installed to help me catch most a11y issues that there might be, alongside the AirBnB rules and a Prettier extension by Wes Bos. But in order to show my usual coding style without it being affected by ESLint rules, I opted to not use those in this project.

- **Animations**

  To be honest, I ran out of time for this haha. I installed the `react-transition-group` package in the beginning, but I'm reaching 5-6 hours of coding now or so, and I simply ran out of time.


