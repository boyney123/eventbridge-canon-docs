---
id: using-the-event-viewer
title: Using the Event Viewer
sidebar_label: Using the Event Viewer
---

#### What is the Event Viewer?

<div style="margin: 0 auto; text-align:center;">
    <img width="100%" src="/img/docs/using-eventbridge-canon/event-viewer/initial-state.png">
</div>

This is the page where you can see and mange your events. From this page you can

- Edit Events
- Publish Events
- Save events
- Clone events (Save As)
- Import/Export Events
- View Event Logs
- Replay Events

Let's dive into each feature.

#### Edit Events

Using Schema Discovery it's possible for us to get your schemas as JSON schema. We can use this to determine what your event should look like.

EventBridge Canon analyses your event schema and prepopulates an initial payload for your event.

<div style="margin: 0 auto; text-align:center;">
    <img width="100%" src="/img/docs/using-eventbridge-canon/event-viewer/initial-state.png">
    <p>Initial Loaded Event Example</p>
</div>

EventBridge Canon uses the awesome [Monaco Editor](https://microsoft.github.io/monaco-editor/) to render your event. Just like VSCode you can use this editor to edit your event payload.

The EventBridge Canon also gives you custom `code snippets` to help you mock some data like `uuid`, `email` and more. Once in the Editor just press `cmd+space` to see the options (more to come in the future).

You are free to edit your event with what ever data you want.

Once you finish creating your event you can either `Publish` the event or `Save` the Event.

#### Publishing Events

EventBridge Canon gives you the ability to **publish events** straight to your event bus.

Click the `Publish Event` button to publish your event.

When you publish an event a new `log` is created.

<div style="margin: 0 auto; text-align:center;">
    <img width="100%" src="/img/docs/using-eventbridge-canon/event-viewer/logs.png">
</div>

Every event you publish will create a new log. Logs give you a quick way to see what has been published before and also give you the ability to resend the event.

<div style="margin: 0 auto; text-align:center;">
    <img width="100%" src="/img/docs/using-eventbridge-canon/event-viewer/logs-resend.png">
</div>

To **resend** a previous event, just view the log and press `Resend Event`.

Resending events will create a new log entry.

#### Save Events

EventBridge Canon gives you the ability to save your events for future use.

If you have an event you wish to store for future use (to help debugging for example), then you can click `Save`.

<div style="margin: 0 auto; text-align:center;">
    <img width="100%" src="/img/custom-event.png">
</div>

You will be asked to give your event a **name**, **description (optional)** and store your event in a **collection**.

Once you click **Save** your event will be shown in `My Collections`.

#### Clone events (Save As)

If you wish to clone an event, you can simply click on the event you wish to clone and click the `Save As` button. This will allow you to create a new event with the selected event as a base.

#### Import/Exporting Events

If you work within a team sometimes you may want to import or export events to each other.

Importing/Exporting events is straight forward.

#### How to Export Events

1. Click on the event you wish to export.

2. In the top right of the page click the arrow next to the `Save` button (you should see the sub menu).

3. Click on `Export Event`.

This will copy the event to your clipboard.

<div style="margin: 0 auto; text-align:center;">
    <img width="100%" src="/img/docs/using-eventbridge-canon/event-viewer/clipboard.png">
</div>

Paste the contents to whoever you want, they will have to **import** the event.

#### How to Import Events

<div style="margin: 0 auto; text-align:center;">
    <img width="100%" src="/img/docs/using-eventbridge-canon/event-viewer/import.png">
</div>

1. Click `Import` on the top navigation menu.
2. Paste the contents into the `Event` field
3. Select a collection where to store the event.
4. Click Import.

Your new event will be saved against the selected collection.

#### View Event Logs and Replay Events

Every event you publish will be logged. You will be able to see the event logs below the event editor.

<div style="margin: 0 auto; text-align:center;">
    <img width="100%" src="/img/docs/using-eventbridge-canon/event-viewer/logs.png">
</div>

Clicking on each event will show you a **read-only** view of that event, which you can resend.

> Roadmap: In the future your changes will be validated against your event schema!
