---
title: Nilquist API
description: "Nilquist API has introduced two new endpoints that use integrated Gen AI to analyze and summarize conversations."
thumbnail: /assets/images/placeholder_splash.png
piece_type: "API documentation"




layout: single
robots: noindex, nofollow

classes: wide

toc: false
toc_label: Contents

sidebar:
    nav: ""

---

<div class="about">
<h2>About this piece.</h2>
This is some information about the piece.
</div>

{::nomarkdown}
<div class="portfolio-body">
{:/nomarkdown}

Use these endpoints to interact with the Nilquist application, including Live Support and Helper AI. To call this service, send requests to `https://api.nilquist.com`.

Send requests using a JSON format. The response format for all requests is a JSON object.


## Authentication
Authenticate requests using an authentication token retrieved from the `POST /authorize`endpoint. 

## Rate limits
Nilquist limits requests to ensure platform stability. For more information on your rate limits, check your service agreement.

# API Routes
These endpoints allow you to analyze a Helper Bot conversation.

<div class="about">
<h2>What I did.</h2>
As a technical writer, my job was to update our API documentation with new endpoints being developed as we added new AI features to our product. I coordinated with the development team in charge of this product to find out the requirements. Each route explains its purpose and what it does. Blah blah blah.
</div>

<div class = table>
<table class = foldable>
<tbody>
<tr>
<td markdown="1">

## /messages/history {#get}

</td>
</tr>
<tr>
<td markdown="1">

Retrieves the full conversation history of an active Helper Bot or Live Support session.

### Parameters

| Name                     | Type         | Description                                                                             |
|--------------------------|-----------------|-----------------------------------------------------------------------------------------|
| nilquist-key <span style="color: red;">*</span>          | String (header)   | API key found in *Nilquist > Settings > API*. |
| authorization <span style="color: red;">*</span>            | String (header)    | Authorization token.      |
| authorization <span style="color: red;">*</span>            | String (header)    | Authorization token.      |
| helper-session-id <span style="color: red;">*</span>            | String (header)    | Token for the Helper Bot user session, created at session start. |

<span style="color: red;">* = required</span>

### Responses
#### Code 200
Returns an array of JSON objects. Each object contains message details and content. 

```jsonc
[
    {
        //Identifies who sent the message. Returns "AI" if it was an AI response.
        "sender": string,

        //Records the date and time the message was sent in ISO 8601 format. Example: "2026-01-01T10:30:00Z"
        "date_time": string,

        //Array containing the content of the message. The AI can send multiple messages in one interaction.
        "message": [ string ]
    }
]
```

</td>
</tr>
</tbody>
</table>
</div>



<div class = table>
<table class = foldable>
<tbody>
<tr>
<td markdown="1">

## /sentiment-analysis {#post}

</td>
</tr>
<tr>
<td markdown="1">

Uses AI to check a text or conversation for user sentiment, such as joy or frustration, and generate a report.

### Parameters

| Name                     | Type         | Description                                                                             |
|--------------------------|-----------------|-----------------------------------------------------------------------------------------|
| analysis_type <span style="color: red;">*</span>          | String (body)   | Defines whether the AI should analyze a conversation or single block of text. Use `conversation` to analyze a Bot Assistant or Live Support conversation between two users. Use `text` to analyze a single string of text. |
| sentiments <span style="color: red;">*</span>            | Array (body)    | An array listing the emotions or sentiment that you want to detect in the user.      |
| sentiments <span style="color: red;">*</span>            | Array (body)    | An array listing the emotions or sentiment that you want to detect in the user.      |
| input <span style="color: red;">*</span>                 | String or Array (body) | The text or conversation to be analyzed for user sentiment. If you are using the analysis type `text`, submit the text as a string. If you are using the analysis type `conversation`, submit an array with the conversation. |

<span style="color: red;">* = required</span>

### Responses
#### Code 200
Returns the array `sentiments` containing the detected emotions. 

```json
{
    "sentiments": [
        {
            "name": "joy",
            "topic": "user is grateful"
        }
    ]
}
```

</td>
</tr>
</tbody>
</table>
</div>

<div class = table>
<table class = foldable>
<tbody>
<tr>
<td markdown = "1">

## /summary {#post}

</td>
</tr>
<tr>
<td markdown="1">

Uses AI to generate a summary of a text or chat conversation.

### Parameters

| Name                     | Type            | Description                                                                             |
|--------------------------|-----------------|-----------------------------------------------------------------------------------------|
| summary_type <span style="color: red;">*</span>          | String (body)   | Defines whether the AI should summarize a conversation or single block of text. Use `conversation` to summarize a Bot Assistant or Live Support conversation between two users. Use `text` to summarize a single block of text.|
| max_words <span style="color: red;">*</span>            | Integer (body)    | The maximum limit of characters for the summary to use.      |
| max_words <span style="color: red;">*</span>            | Integer (body)    | The maximum limit of characters for the summary to use.      |
| input <span style="color: red;">*</span>                 | String or Array (body) | The text or conversation to be summarized. If you are using the summary type `text`, submit the text as a string. If you are using the summary type `conversation`, submit an array with the conversation. |

<span style="color: red;">* = required</span>

### Responses
#### Code 200
Returns a string with a summary of the text or conversations.

```json
{
    "summary": "The user requested a password reset and the agent directed them to the website's Forgot Password button, stating only the user can reset their own password."
}
```

</td>
</tr>
</tbody>
</table>
</div>

<hr>

# Change Log
Here are the latest updates to Nilquist API.

<div class="about">
<h2>What I did.</h2>
As a technical writer, my job was to update our API documentation with new endpoints being developed as we added new AI features to our product. I coordinated with the development team in charge of this product to find out the requirements. Each route explains its purpose and what it does. Blah blah blah.
</div>

<div class = table>
<table class = foldable>
<tbody>
<tr>
<td markdown = "1">

# January 2026 to March 2026

</td>
</tr>
<tr>
<td markdown="1">

### Release 3.04 (March 5, 2026)
* **New feature** We added new endpoints to help you analyze user conversations through Helper AI or Live Support.
    * `POST /sentiment-analysis` uses AI to check a text or conversation for user sentiment, such as joy or frustration. Agents can use this to better strategize their interactions.
    * `POST /summary` uses AI to summarize a text or conversation. This allows agents to quickly catch up with the details of a longer converstaion.

### Release 3.03 (February 14, 2026)
* Fixed: Clicking a Generative AI result caused a 422 error if the Nilquist instance did not have a content source configured. This is now fixed.
* Fixed: In Helper AI workflows, an infinite loop could be triggered when an automatic transition targeted a disabled node. This is now fixed.

### Release 3.02 (February 2, 2026)
* Fixed: When escalating a Helper AI conversation to a live agent, an error would occur if the messages were too large. This has been fixed and large messages will no longer cause an error.
* The Nilquist API has a response limit of 10 MB. When you reached the limit, you'd receive an "unknown" error with no helpful information. We've updated the error to let you know when the response is too big. This way, you can apply pagination to limit the amount of data being retrieved at once.

</td>
</tr>
</tbody>
</table>
</div>

{::nomarkdown}
</div>
<script src="/assets/js/foldable.js"></script>
{:/nomarkdown}




