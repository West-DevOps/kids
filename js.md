# JavaScript 101

This page will cover a few ways to get up and running with `JavaScript`.  As it is the language of the web 
all modern internet browsers (chrome/firefox/edge/etc.) have interpreters for it already baked-into them. 

## Executing javaScript in a web-browser

* Open up chrome (or whatever browser you use)
* Navigate to a website, I'll use [google search](https://www.google.com/) in this example

![Google](./assets/google_search.png)

* Now press `F12` this will open up the "developer console" and if you click the `console` tab at the top: 

![Console](./assets/google_console.png)

The empty screen on the right is now an interactive `JavaScript` console, so we can type into that box some `JavaScript`:

```javascript
let message = 'Hello World!';
alert(message);
```

This will create a pop-up alert in the screen: 

![Alert](./assets/google_alert.png)

This is how many people start as it requires no additional downloading of runtimes or anything other than an internet
browser which nearly everyone already has.  However there will come a point where you probably want to write your own 
programs which have nothing to do with internet websites/pages so you will need your own runtime installing on your 
machine, then we need to move onto: 

## Using NodeJs

