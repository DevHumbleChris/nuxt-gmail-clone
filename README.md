
# Nuxt Gmail Clone
Author: [The Coding Montana](https://the-coding-montana.vercel.app)
## Introduction
Welcome to the Gmail Clone project! This web application replicates the core functionalities of Gmail, allowing users to send emails to existing users, star emails, mark emails as important, view sent emails, move emails to the trash, and reply to emails in the inbox. The project is built using Nuxt.js, Tailwind CSS (with Shadcn UI), Cloudinary, Pinia, and Firebase.

## Features

1. `Send Emails`: Compose and send emails to existing users within the system.
2. `Star Emails`: Mark emails as favorites for quick access.
3. `Mark as Important`: Flag emails as important for better organization.
4. `View Sent Mails`: Access a list of sent emails for reference.
5. `Move to Trash`: Move emails to the trash for later deletion.
6. `Reply to Emails`: Respond to emails directly from the inbox.
7. `Dark And Light Mode`: Toggle and enjoy the dark and light mode.



Technologies Used
-----------------

-   `Nuxt.js`: A Vue.js framework for building modern web applications.
-   `Tailwind CSS (with Shadcn UI)`: A utility-first CSS framework for rapid UI development.
-   `Cloudinary`: An end-to-end image and video management solution.
-   `Pinia`: A Vue.js state management library.
-   `Firebase`: A comprehensive platform for building web and mobile applications.

Getting Started
---------------

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1.  Clone the repository:

    ```bash
	git clone https://github.com/DevHumbleChris/nuxt-gmail-clone.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd nuxt-gmail-clone
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

### Configuration

1.  Create a `Firebase` project and obtain your `Firebase configuration`.
2.  Configure Firebase in the project by replacing the placeholder values in `.env` with your Firebase configuration.
3.  Configure Cloudinary by replacing the placeholder values in `.env` with your Cloudinary configuration.

Usage
-----

1.  Start the development server:

    ```bash
    npm run dev
    ```

2.  Open your browser and visit `http://localhost:3000` to access the Gmail Clone application.

Page Routes
-----------

-   `/`: Homepage
-   `/inbox`: Inbox mails
-   `/inbox/[mailId]`: Selected inbox mail preview
-   `/starred`: Starred mails
-   `/starred/[mailId]`: Selected starred mail preview
-   `/important`: Important mails
-   `/important/[mailId]`: Selected important mail preview
-   `/sent`: Sent mails
-   `/sent/[mailId]`: Selected sent mail preview
-   `/trashed`: Trashed mails
-   `/trashed/[mailId]`: Selected trashed mail preview

Environment Variables
---------------------

Make sure to set up the following environment variables in your `.env` file:

```env
FIREBASE_API_KEY = ""
FIREBASE_AUTH_DOMAIN = ""
FIREBASE_PROJECT_ID = ""
FIREBASE_STORAGE_BUCKET = ""
FIREBASE_MESSAGING_SENDER_ID = ""
FIREBASE_APP_ID = ""

CLOUDINARY_CLOUD_NAME = ""
CLOUDINARY_API_KEY = ""
CLOUDINARY_API_SECRET = ""
```

Folder Structure
----------------

The project follows a modular folder structure for better organization:

-   `assets`: Static assets like images and fonts.
-   `components`: Reusable Vue components.
-   `layouts`: Layout components for the application structure.
-   `pages`: Vue components representing different pages of the application.
-   `plugins`: External plugins and configurations.
-   `store`: State management using Pinia.
-   `static`: Static files that are directly served.

License
-------
This project is licensed under the `MIT` License.