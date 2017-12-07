# tource
1.125 Final Project JM

uses node.js, google firebase database, aws e2, bootstrap, and postmark
domain purchased from namecheap

when user hits tsource.org, they have the ability to enter the emails of all their teammates who will be ordering jerseys.
once all emails are entered, using postmark, an email is sent to each person.
each person hits the url (tsource.org/static/orderform3.html)
each person fills in the url which writes to the firebase database
the person coordinating can access the order form through a redirect located on tsource.org which takes them to tsource.org/static/readdata.html

within the zip file there are a few main files needed. first, you need to run node app.js 
then, within the “public” folder, there are the 3 .html files for the pages that user facing which are:
index.html (main source page)
orderform3.html (order page that gets sent to users)
readdata.html (order form page that displays firebase database)
