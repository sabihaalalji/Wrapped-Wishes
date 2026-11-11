# Wrapped Wishes

**Make their wishes come true.**

Wrapped Wishes is a wishlist platform designed to make gifting more thoughtful and organised. Users can create personalised wishlists, share them with others, explore public wishlists and reserve gifts to avoid duplicate presents.

## Features

- **User Accounts:** Create an account and sign in.
- **Create Wishlists:** Make personalised wishlists for different occasions.
- **My Lists:** View your created wishlists.
- **Explore Wishlists:** Discover wishlists shared by other users.
- **Gift Reservations:** Reserve gifts from other people's wishlists.
- **Unreserve Gifts:** Cancel a reservation when plans change.
- **My Reservations:** Keep track of gifts you have reserved.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser Local Storage

## Getting Started

1. Clone this repository:

  
   git clone https://github.com/sabihaalalji/Wrapped-Wishes.git
   

2. Open the project folder.
3. Open `index.html` in your browser.
4. Create an account and start exploring.

You can also use the Live Server extension in Visual Studio Code to run the project locally.

## Project Structure


Wrapped-Wishes/
│
├── index.html
├── dashboard.html
├── create-wishlist.html
├── explore.html
├── wishlist.html
├── reservations.html
├── sign-in.html
├── create-account.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── dashboard.js
│   ├── wishlist.js
│   ├── explore.js
│   ├── reservations.js
│   ├── signin.js
│   └── create-account.js
│
└── images/


## Data Storage

Wrapped Wishes uses the browser's **Local Storage** to store account information, wishlists and gift reservation details.

The project does not currently use a backend or database. Data is stored locally in the browser.

## screenshot
![Home page](images/screenshot.jpeg)

## Project Purpose

Wrapped Wishes aims to make gift-giving easier, more personal and more enjoyable by helping people share what they wish for while allowing others to choose and reserve gifts thoughtfully.

## Pages Overview

### 1. Home Page 
The landing page introduces Wrapped Wishes and explains its purpose: making gifting more thoughtful and organised. It highlights the platform's key features, explains how it works, and provides navigation to other sections of the website.

### 2. Sign Up Page 
Allows new users to create an account by providing their personal details and setting a password. Account information is stored locally using LocalStorage.

### 3. Sign In Page 
Allows registered users to log into their accounts using their email address and password. Once authenticated, users are redirected to their dashboard.

### 4. Dashboard Page 
Provides users with a personalised space to manage their wishlists. Users can view the wishlists they have created and access them easily.

### 5. Create a Wishlist Page 
Allows users to create personalised wishlists by adding a wishlist name, description, occasion and gift items. Users can also include links to their desired gifts. Created wishlists are saved in LocalStorage.

### 6. Explore Page 
Allows users to discover and browse public wishlists created by other users. It makes it easier for friends and family to find gift ideas and explore what others wish to receive.

### 7. Wishlist Page 
Displays the details and gift items within a selected wishlist. Visitors can reserve gifts they intend to purchase, helping prevent multiple people from buying the same gift.

### 8. My Reservations Page 
Allows users to view the gifts they have reserved across different wishlists. It provides an organised overview of their gift reservations and helps them keep track of their gifting commitments.

## Author
Sabihaa Lalji, Zindua School


