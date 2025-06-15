---
title: "API Routes: Generate Summary & Sentiment Analysis"
description: "Nilquist API has introduced two new endpoints that use integrated Gen AI to analyze and summarize conversations."
thumbnail: /assets/images/placeholder_splash.png
piece_type: "API documentation"




layout: single
robots: noindex, nofollow



toc: false
toc_label: Contents
classes: wide

sidebar:
    - image: /assets/images/placeholder_splash.png
    - title: "Description"
      text: >-
        Description of what I did.
         
        [Download PDF](#link){: .btn .btn--primary}



---

{::nomarkdown}
<div class="portfolio-body">
{:/nomarkdown}

# API Routes

## POST /sentiment-analysis
Uses AI to check a text or chat conversation for user sentiment, such as joy or frustration, and generate a report.

### Parameters

| Name                     | Type         | Description                                                                             |
|--------------------------|-----------------|-----------------------------------------------------------------------------------------|
| analysis_type <span style="color: red;">*</span>          | String (body)   | Defines whether the AI should analyze a conversation or single block of text. Use `conversation` to analyze a Bot Assistant or Live Support conversation between two users. Use `text` to analyze a single string of text. |
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

## POST /summary
Uses AI to generate a summary of a text or chat conversation.

### Parameters

| Name                     | Type            | Description                                                                             |
|--------------------------|-----------------|-----------------------------------------------------------------------------------------|
| summary_type <span style="color: red;">*</span>          | String (body)   | Defines whether the AI should summarize a conversation or single block of text. Use `conversation` to summarize a Bot Assistant or Live Support conversation between two users. Use `text` to summarize a single block of text.|
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


{::nomarkdown}
</div>
<script src="/assets/js/foldable.js"></script>
{:/nomarkdown}




