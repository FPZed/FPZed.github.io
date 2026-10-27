---

title: "Integration Guide: Automating Agent Assignment with Webhooks"
description: "A guide that shows users how to use a webhook to automatically assign agents to incoming chat requests."
thumbnail: /assets/images/placeholder_splash.png
piece_type: "Integration Guide"

layout: single
robots: noindex, nofollow
classes: wide

toc: false
toc_label: Contents

sidebar: false

author_profile: false

#classes: portfolio-body

---

<div class="about">
<h1>About this piece</h1>
A guide that shows users how to use a webhook to automatically assign agents to incoming chat requests. Users were unable to implement this functionality because key technical details were missing from existing documentation. I worked with engineering to gather accurate requirements, update the developer portal, create a guide covering configuration, authentication, request payloads, and response handling. This piece demonstrates technical instructional writing and the ability to identify and close documentation gaps.
</div>

{::nomarkdown}
<div class="portfolio-body">
{:/nomarkdown}

 When end users request to connect with your agents, Customer Help automatically assigns the chat to an available agent. By configuring webhooks in your Customer Help instance, you can use a custom algorithm to decide how incoming chats are assigned to the available agents. 

# Summary
 When a chat conversation needs to be assigned to an agent, the `chats:assign` event occurs, triggering a webhook request. A POST request is sent to the webhook URL that includes data about available agents and the Live Support session being assigned. Your custom algorithm can use this information to choose an agent ID and return this information to the Live Support server. The selected agent will be assigned to the conversation. 

# Configuring the Webhook
To configure the webhook in your Customer Help instance:

1. Go to *Settings > Automation > Webhooks*.
2. In the Live Support section, click **Add webhook**.
3. Check the `chats:assign` event.

For more details, see [Adding webhooks to connect with external systems](/webhooks/).

## Authentication
When a webhook is first configured, a secret is created and used to validate all future webhook requests.

For information on authentication and setting up your server to receive Nilquist requests, see the *"Setting up a webhook"* and *"Authentication and requests"* sections in the [Webhooks for the Nilquist API](/example/) article.

# Webhook Request
The webhook event is triggered whenever an active chat needs to be assigned to an agent. When it is triggered, the Live Support server sends a POST message to the target URL(s). 

## Headers
The POST request has an **X-Nilquist-Signature** header which uses the payload data and the secret configured upon the webhook's creation to generate a unique signature. You can use **X-Nilquist-Signature** to validate the webhook.

For more information on webhook validation, see [Webhooks Overview](/example/). 

## Payload
The message includes a payload using the following data structure with application/json encoding:

* **trigger**: The event that triggered the webhook request – in this case, it is "chats:assign".
* **appId**: The API key, the public identifier of the API instance. To find your instance's API key, go to Settings > Agent Chat > Integrations.
* **created_at**: The date and time when the request was sent, in the format of a Unix timestamp.
* **data**: An object containing data related to the event. For chats:assign, it includes:
    **Agent array**: a list of all available agents and the agents' status and personal data.
    **Chat object**: information about the Agent Chat session being assigned an agent, including the Chat ID.

## Example
Here is an example of the data included in the payload, with each property explained.

```jsonc
{
  "trigger": "chats:assign", //The event that triggered the webhook request
  "appId": "aBc123xyz", //The API key
  "data": {
    //list of agents available to be assigned
    "agents": [
      {
        "capacity": 2, //How many new chats the agent can join.
        "providerId": 12345, //User ID used by the provider, usually Nilquist.
        "nickname": "John", //The agent's screen name.
        "contact": "jsmith@email.com", //The agent's email address.
        "name": "John Smith", //The agent's full name.
        "status": "online", //The agent's status: Online, Paused, or Offline.
        "lastLogin": 1776150087, //The date and time that the agent last logged into Customer Help, in the format of a Unix timestamp.
        "chatsAssigned": [], //A list of chats that have been manually transferred to the agent.
        "id": "XyZ987aBc", //The agent's user ID number.
        "invitations": [], //A list of chats the agent has been invited to, but has not accepted yet.
        "restrictions": { //The agent's current configured permissions.
          "rooms": [ //A list of queues the agent is assigned to work in, by the queue's ID number.
            "1",
            "2"
          ],
          "languages": [], //Languages the agent is restricted to.
          "back_to_inbox": true, //Permission to transfer a chat to another queue.
          "send_attachment": true, //Permission to send an attachment.
          "add_agent": true, //Permission to add another agent to a chat.
          "transfer": true, //Permission to transfer a chat to another agent.
          "watch": true, //Permission to watch active chats
          "intervene": true, //Permission to intervene in an active chat
          "show_active_time": true, //Permission for agent to see how long the chat has been active.
          "forced_no_focus": true, //If true, the agent remains focused on their current chat even when a new chat is assigned to them.
          "manage_queues": true, //Permission to manage queues.
        },
        "created": 1640602856, //The date and time that the Agent's user profile was created in the Customer Help instance.
        "chatsAccepted": [], //A list of all chat invitations the agent has accepted.
        "extraInfo": {}, //Includes customized agent data, configured in settings > users.
        "chats": [], //A list of chats that were automatically assigned to and accepted by the agent.
        "externalId": "", //User external ID (used for third-party chat platforms integrations)
        "allowEnter": true, //If true, the agent is allowed to send messages by pressing their "Enter" key.
        "rejections": [], //A list of chats the agent has previously rejected.
        "chatsWatching": [], //A list of chats the agent is currently watching.
        "lastActivity": 1776151000, //the data and time of the last action recorded, such as replying to a chat.
      }
    ],

    //Data related to the Live Support session   
    "chat": {
      "created": 1776151040, //The date and time that the conversation was created, in the Unix timestamp format.
      "externalId": "", //Session external ID (used for third-party chat platforms integrations)
      "source": 3, //ID of the source of the chat.
      "creator": "XyZ987aBc", //The user ID of the person who created the chat, usually the end user who requested it.
      "room": "1", //ID of the queue that chat belongs to.
      "attended": "", //The date and time that the conversation was first attended, in the Unix timestamp format.
      "closed": "", //The date and time that the conversation was closed, in the Unix timestamp format.
      "status": "waiting", //Status of the chat
      "users": [ //The user IDs of users participating in the chat, including agents.
        "XyZ987aBc"
      ],
      "watchers": [], //A list of agents currently watching the chat.
      "solver": "", //The user ID of the agent currently assigned to the chat.
      "lang": "en", //The language of the chat.
      "lastActivity": 1776151041, //The time and date of the last recorded action within the conversation, such as a message being sent.
      "usersInvited": [], //A list of agents who have already been invited to attend this chat.
      "usersAssigned": [], //A list of agents who have previously been assigned to this chat.
      "rejectedBy": [], //A list of agents who have previously rejected this chat.
      "inQueue": true, //Whether the chat is assigned to a queue
      "sentimentAnalysis": "", //A rating of the end user's perceived sentiment, such as frustrated or satisfied.
      "id": "XYZ321ABC" //The Chat ID
    }
  },
  "created_at": 1776151041 //The date and time that the webhook request was triggered, in the Unix timestamp format.
}
```
# Response
## Success (200 status)
After sending the POST request to the target URL, your integration should respond with an agent ID selected from the `Agent` array. The timeout to return a successful response is 5 seconds (this cannot be modified).

If a valid agent ID is returned in this webhook, that agent will be assigned to the chat conversation.

## Errors (400 status)
If the returned agent ID is invalid or blank, or the request times out, then the system falls back to the default algorithm to assign an agent to the conversation.

{::nomarkdown}
</div>
<script src="/assets/js/foldable.js"></script>
{:/nomarkdown}