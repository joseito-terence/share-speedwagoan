# share-speedwagoan

Since, a react app created with CRA is client-side rendered and doesn't support link previews. This server generates an html page with the required meta tags.\

## Working
* If user-agent is a bot:\
This server will create an html page with the required meta tags for Open Graph Protocol and Twitter bot.\
Thus, enabling link previews. \
* If the user-agent is not a bot:\
The server will redirect user to the actuall product page.

## URL
[https://share-speedwagoan.herokuapp.com/](https://share-speedwagoan.herokuapp.com/)

## End-point
`GET /product/:productId`

ProductId of the product being shared.

## Built With

Following are the major frameworks and libraries used to build this project.
* [ExpressJS](https://expressjs.com/) (To create a server)
* [Firebase](https://firebase.google.com/) (To access Cloud Firestore)
* [isBot](https://www.npmjs.com/package/isbot?activeTab=readme) (For user-agent identification)


## Run Locally

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/joseito-terence/share-speedwagoan.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start NPM server.
   ```sh
   npm start
   ```
