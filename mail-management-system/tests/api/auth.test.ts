mail-management-system
├── src
│   ├── api
│   │   ├── controllers
│   │   │   ├── mailController.ts
│   │   │   ├── itemController.ts
│   │   │   └── authController.ts
│   │   ├── middleware
│   │   │   ├── auth.ts
│   │   │   └── adminCheck.ts
│   │   ├── routes
│   │   │   ├── mail.ts
│   │   │   ├── items.ts
│   │   │   └── auth.ts
│   │   └── models
│   │       ├── Mail.ts
│   │       ├── Item.ts
│   │       └── User.ts
│   ├── database
│   │   ├── config.ts
│   │   └── migrations
│   │       └── initial.ts
│   ├── services
│   │   ├── mailService.ts
│   │   └── tokenService.ts
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── validators.ts
│   ├── app.ts
│   └── server.ts
├── public
│   ├── css
│   │   └── styles.css
│   └── js
│       └── main.ts
├── views
│   ├── layouts
│   │   └── main.ejs
│   ├── mail
│   │   ├── list.ejs
│   │   └── view.ejs
│   └── auth
│       └── login.ejs
├── tests
│   └── api
│       ├── mail.test.ts
│       └── auth.test.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md