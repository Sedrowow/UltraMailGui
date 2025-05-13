# Mail Management System

This project is a Mail Management System that allows users to send and receive mails, manage items sent with mails, and authenticate users. 

## Features

- Save all mails to a local database.
- Send and receive mails with associated items.
- User authentication and authorization.
- Admin privileges for accessing all mails.

## Project Structure

- **src/**: Contains the source code for the application.
  - **api/**: Contains controllers, middleware, routes, and models for handling API requests.
  - **database/**: Contains database configuration and migration scripts.
  - **services/**: Contains business logic for mail and token management.
  - **types/**: Contains TypeScript types and interfaces.
  - **utils/**: Contains utility functions for validation.
  - **app.ts**: Entry point of the application.
  - **server.ts**: Starts the server and listens for requests.
  
- **public/**: Contains static files such as CSS and JavaScript.
  
- **views/**: Contains EJS templates for rendering the frontend.
  
- **tests/**: Contains unit tests for the API endpoints.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the database configuration in the `.env` file.
4. Run migrations to set up the database schema.
5. Start the server using `npm start`.

## Usage

Access the application in your web browser and use the provided endpoints for mail and item management. Admin users can access all mails using the master password.

## UltraCustomizer Integration

To integrate with Minecraft using UltraCustomizer, create the following actions:

1. Send Mail Action:
```java
// HTTP POST to http://your-server:3000/api/mail
{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_TOKEN"
    },
    body: {
        "sender": "%player_name%",
        "recipient": target,
        "subject": subject,
        "body": message,
        "items": [
            {
                "itemType": "%item_type%",
                "amount": amount,
                "metadata": "%item_meta%"
            }
        ],
        "serverName": "%server_name%",
        "mcUUID": "%player_uuid%"
    }
}
```

2. Retrieve Mail Action:
```java
// HTTP GET to http://your-server:3000/api/mail/player/%player_uuid%
{
    method: "GET",
    headers: {
        "Authorization": "Bearer YOUR_TOKEN"
    }
}
```

Remember to:
1. Set up authentication tokens in your .env file
2. Configure CORS in app.ts to allow requests from your Minecraft server
3. Use UltraCustomizer's HTTP request features to communicate with the API
4. Handle responses appropriately in your UltraCustomizer scripts

## License

This project is licensed under the MIT License.