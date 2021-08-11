---
id: how-it-works
title: How it works
sidebar_label: How it works
---

![Events](/img/docs/how-it-works/architecture.png 'Architecture')

**EventBridge Canon** is a GUI that was built to help developers publish EventBridge events.

You could split **EventBridge Canon** into these parts.

1. AWS Integration (Fetching data from AWS)
2. LowDB (Storing data locally)
3. NextJS Application (Canon itself)

#### 1. AWS Integration

When you start the application it will require access to your AWS account (.env file).

The `aws-sdk` is used to fetch:

- Your schemas
- Information about your Registry and Eventbus

> You will need to turn Event Discovery on for this application. But more on this later.

EventBridge Canon will initially get your scheams and populate your local database. Once Canon is running it will request the latest scheams in real time. You will only have to re-populate your database if you have any new sources or events (for now!)

#### 2. LowDB (Storing data locally)

[LowDB](https://github.com/typicode/lowdb) is a local JSON database, which was perfect for EventBridge Canon.

When you make events or collections all the data will be stored on your machine.

EventBridge has been designed to be a tool running on your machine (although nothing stops it running in the cloud).

> Tip: If you want to share configurations with your team mates just share your database.json file with them and that's it!

#### 3. NextJS Application

This is the heart of the application. You can run the NextJS application locally on your machine, and using their API routes, and pages syntax you can easily navigate your collections, schemas, events and more!
