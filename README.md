## Red Hot Chili Peppers Album Catalog 1-9

## About the App

This site provides basic details about The Red Hot Chili Peppers or depending on when you 
became a fan, just Red Hot Chili Peppers. On the homepage you’ll see the first 9-Almbums 
the Red Hot Chili Peppers produced along with a slideshow of the cover albums at the bottom of the page. 
You will be able to click on any of the album names listed to find more information out about the album. 

# 
## You’ll see:

- The name of the album 
- specific cover art of the album 
- A description of what went into creating the album 
- The band members 
- The list of songs in the album with their run-time
- The slide show of the cover art

#
## Getting Started

So, you’ve opened this VS Code file from the GitHub repository. Now you’ll see on the left hand side a:
- source file (src) that contains the following;
1) index.css
2) index.html
3) index.css

In addition to a db.json file that is outside the src folder.

The db.json file is the RESTFUL API created. This is the database created with the information that is presented 
on the APP. You can view the db.json file one of two ways. You can easily click on the file on the left and see all 
the information. Or you can follow these steps.  

- At the top of your monitor click the “terminal” tab and select “New Terminal”.  
- You’ll see a terminal pop up at the bottom of your VS Code  Here you can either type or copy & paste * json-server --watch db.json *.
- in your terminal you should see HOME: http://localhost:3000 & RESOURCES: http://localhost:3000/Albums. The RESOURCES http link will
   direct you to the db.json file if you copy & paste it in the url.

The app may be accessed in two ways:

- If you have the live server add-on in your VS Code you can select the "Go Live" button. You will see three (3) folders
to chose from. he src folder, the db.json folder & the README.md folder. Selecting the src folder will direct you to the site.
 
 Or

- You can directly access the app but pasting http://127.0.0.1:5501/src/ into the url.

NOTE: This http link will only work after you take the server live from activating * json-server –watch db.json *

Understanding the http://127.0.0.1:5501/src/ is rather simple when it is broken down. 
   http stands for Hypertext Transfer Protocol.
   The 127.0.0.1 is more like a fake name non-descriptive name for the URL
   The 5501 is the port created when the server goes like. You'll notice down by where the "Go Live" button is, it now says "Port: 5501".
   The src at the end of the URL then access all the information in the src folder (the CSS, HTML & JS code)
   This results in the web page you have before you!

   #

   ## Navigating the Page

   You see before you the app that contains all the information of the db.json. You have:

   - The Title
   - A "Home" button to direct you back to the home page
   - And a slideshow of the Red Hot Chili Peppers first cover art of their first 9 albums

   Pick any of the album titles listed underneath the Home button to find out more infomation about the album. When you are done just click the Home button and select a new album if you wish!

   ## ENJOY!



 