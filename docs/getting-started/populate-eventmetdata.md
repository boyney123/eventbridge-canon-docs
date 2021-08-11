---
id: running-eventbridge-canon
title: Running EventBridge Canon
sidebar_label: Running EventBridge Canon
---

##### Getting Started

First before we run the application itself, we need to populate the local database with your schemas.

Populating data takes seconds, just run the following command:

```bash
npm run populate
```

This will use AWS SDK to get your schemas and populate the `/data/database.json` file.

> Tip: You can run this as much as you want and your collections + custom data will not get lost. If ever want to update your sources or schemas run this command! (for now ;))

##### Running the application

Next once you populated your database using the command above you can run:

```bash
npm run dev
```

This will run the NextJS application (in development mode) and you should then be able to go to [http://localhost:3000](http://localhost:3000) to get started!
