# FrontendMentors

These repo contains all the solutions to the [Frontend Mentor Challenges](https://www.frontendmentor.io/challenges) i have participated in 

**Each project challenge is in a different branch of its own**


## Table of Content 

- [Overview](#overview)
  - [The challenges](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Difficulty](#Difficulty)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview 

### The Challenges 

- A Chat app 
- Comment section app


### Screenshot 
- This is a screenshot of my progress so far 

![Annotation 2022-04-15 155213](https://user-images.githubusercontent.com/67446930/163585667-52c5b202-29fc-4a88-b6a6-6cd78b363f5e.jpg)


### Link
- Here is the link to this project [Comment Section App] (https://commentt-section.netlify.app/) 


## MY PROCESS 

### Built With 

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS Library
- [MaterialUI](https://mui.com/) - ReactJS Library


### What i learned
  - Mapping through Json Object string was a bit difficult as it was my first time but i scaled through
  - Had lots of difficulty mapping through the images but i finally did it.
  - After mapping through from the json using the ``` .map() ``` method

```
    <div>
      <img src={data.currentUser.image.webp} alt="user-img"/>
     <div/>
 ```
 - I went ahead to use the ``` .require() ``` method inside the ```json``` file so the images can parse

  ``` "currentUser": {
    "image": {
      "webp": require("./images/avatars/image-juliusomo.webp")
    },
    "username": "juliusomo"
  } 
  ```
  
  - Used [MaterialUI](https://mui.com/) for the first time without difficulty 
  - Hosted on [Netlify](https://app.netlify.com/) For the first time with this being the first project i am ever hosting


### Difficulties 
 
  
- Making the comment textarea active 
- Creating a modal for the delete button 
