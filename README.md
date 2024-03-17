# Speed Ads Up!

This mini project stems from a story...

<i>Once upon a time, in a faraway place... <br>
there was a very skilled cook who wanted to cook while listening to YouTube, but advertisements and waiting times for clicks, prevented her from enjoying the content in peace.<br>So, the husband, seeing his wife enslaved by those clicks, decided to automate the process, and they all lived happily ever after.</i>

Jokes aside, it's important to make a premise:<br>
there are valid applications like [Ad Block](https://getadblock.com/it/) that perform this task excellently, but a rainy day and boredom led me to think of an alternative solution in which <u>Ads are not blocked but 'accelerated'</u>.<br>

It's essential to explain that this code only functions in the presence of another very valid extension: [Video Speed Project](https://github.com/igrigorik/videospeed).

## How it works
When you are on YouTube, the system detects DOM mutations with an observer and identifies the advertisement banner.<br>
In that moment, the video playback speed is increased by about x2.5, and the Ad is hardly perceived but still executed.<br>
In the presence of the "SKIP AD" button, however, the system immediately clicks it.<br>
Using popup you can follow history:<br>
![PopUp](images/PopUp%20example.jpg)

#### Please read
- [Chrome DOCS for Extensions](https://developer.chrome.com/docs/extensions?hl=it)
- [Chrome DOCS to start develop Extensions](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world?hl=it)
- Remember that the correct structure for an Extansion is:<br>
<img src="https://developer.chrome.com/static/docs/extensions/get-started/tutorial/hello-world/image/the-contents-an-extensio-fc9e4690df76c_856.png?hl=it" alt="Extension Structure" width="600" height="350">