# Zappos Draggable Form Application
This is a very simple application where you can drag each form on its respective column. Once you submit the form the button will become desabled => submitting it directly to the server where it will be saved on your mongoDB, check your chrome console log for the backend response.

![](https://github.com/e-rojas/draggable/blob/master/client/src/images/zappos-draggable-form-app.gif)

## Steps to follow:
* Download the repo: https://github.com/e-rojas/draggable.git
* Install the following dependencies within each individual main folder, as client is the front-end of the application. cd (client/) or (server/) => npm install. 

### Install MongoDB
* Install MongoDB for VScode extension https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode
* Install mongo drivers : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
*   $ brew tap mongodb/brew
*   $ brew install mongodb-community@4.4
* To run type: brew services start mongodb-community@4.4
* To stop run: brew services stop mongodb-community@4.4
* Fire up mongodb vs extension : Click the 3 dots right next to MONGODB to open menu
* ![](https://github.com/e-rojas/draggable/blob/master/client/src/images/step-1.png)
* ![](https://github.com/e-rojas/draggable/blob/master/client/src/images/step-2.png)
* ![](https://github.com/e-rojas/draggable/blob/master/client/src/images/step-3.png)
* ![](https://github.com/e-rojas/draggable/blob/master/client/src/images/step-4.png)
* ![](https://github.com/e-rojas/draggable/blob/master/client/src/images/step-5.png)

#### Fire up the server and client
* Within the server folder MAKE SURE YOU RENAME THE .env.sample to .env otherwise your environment variables will not connect to mongodb or your port.
* Within the server folder open terminal and type npm start : should give you this => 
```
[nodemon] starting `node app.js`
Server listening on port4009
Connected to MongoDB
```
* Within the client folder open terminal and type npm start : should give you this=>
```
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.21:3000
```

HAVE FUN!! :)