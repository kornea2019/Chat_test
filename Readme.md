#### Backend task:
* Implement the SignalR Hub, make it work with the frontend
* Hub “ChatHub” is provided, implement your hub logic in there
* Add docker support to the project, both frontend and backend should be contained in 1 signal container
#### Frontend task:
* Rebuild your project by using yarn
* Read the package.json for run and build the project
* Connection with SignalR hub initialize when the page is loaded
* Display the connection stage in section 1
* Once the hub is in "Connected" stage display content of section 2
* Once section 2 content loaded display amount of windows currently open on this page in the
other word: display the amount of connection to the hub
* In the section 2 build an input field which allow user to type in their message
* Build a send button which sends the message in the input field to all other window via SignalR
* A display area which displays your own message as Green background and other's message as blue background
* The display area should display message in real time
* Feel free to change any code 