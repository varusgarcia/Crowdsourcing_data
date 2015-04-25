
##Crowdsourcing data

In this part we were intoduced to the power of code in the web and data visualisation. For that, we had to collect data ourselves and find a way of  visualising it on a website. 

We were also intoduced to [P5.js](http://p5js.org), that works similar to Processing, but allows to visualise the result in a website.

For the data visualisation topic I picked a guess game. It consisted of five white images with black poits on them (generated in Processing). This was the first one:

![9](http://i.imgur.com/Tty1ZvR.jpg?1)

The participants would have to guess the number of points on them and intoduce them in the form. Also, they had to give me basic information about them, like The continent they were living in, thier age, gender and if they would consider themselves a more artistic or scientific person.

[Here][link2] you can see the form.

As I didn't have that much experience programming, I chose to make it with P5.js. The idea for the web was that the user could choose between each possible option. So, for example, he could choose North America and would see, first, the average guess of all north americans, and then, the average for each guess:

![10](http://i.imgur.com/MVvf4rK.png)

In this case, we can see that the total average is just under the perfect guess,but really noly the first one was near.

Like this, we can click on each option and it would show the result as here. If we click on the total or the individual guesses, we get to see each option compared:

![10](http://i.imgur.com/T6Ls94c.png)

In this case, the user has clicked on "Guess1", and now he can compare the first guess for each option given in the form.

[Here][link3] you can see it for yourself.

The coding part resulted to be a little bit of a hustle, as I intended the transitions between each selection to be animated.
I finished with lots of variables and almost 2000 lines of code. [Here][link4] you can check it out.