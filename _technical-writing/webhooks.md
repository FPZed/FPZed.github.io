---

title: "How to add webhooks"
description: "Webhooks extend Nilquist support by hooking in external services. Learn how to set up your own webhooks."
thumbnail: /assets/images/placeholder_splash.png
piece_type: "Tutorial"

layout: single
robots: noindex, nofollow

toc: true
toc_label: Contents
classes: wide

sidebar:
    - image: /assets/images/placeholder_splash.png
    - title: "Description"
      text: >-
        Description of what I did.
         
        [Download PDF](#link){: .btn .btn--primary}

#classes: portfolio-body

---

{::nomarkdown}
<div class="portfolio-body">
{:/nomarkdown}

**Webhooks** are used to extend the functionality of **Customer Help** and **Live Support** through interaction with an external service. You can register your own webhook URL, allowing you to integrate your systems with Support and customize the webhook's actions.

For example, you can use webhooks to:

*   Manage ticket data in an external database
*   Get real-time notifications and data collection (collect data about...)
*   Integrate services that manage agents' work processes
*   Retrieve and update user information (These can be more descriptive - be benefits focused)

# How do webhooks work?

A webhook is a request to an external system. Specifically, a webhook is an HTTPS callback (HTTPS POST) to a URL that occurs when an **event** happens. For example, an event could happen when a ticket is assigned, when a message is sent, or when a ticket is moved to a new queue. When triggered, the webhook sends data to the external system, and the external system can store it, process it, or respond with new data based on the received information. The data being sent and received is called a **Payload**.

Setting up a webhook requires technical information from the external system. Consult your technical team for more information. You can find Nilquist's technical requirements for webhooks in our Docs page:

*   [Using webhooks for Customer Help](/example/)
*   [Using webhooks for Live Chat](/example/)

<div class="box-alert">
    <p>
        <strong>Important: </strong>API.Nilquist is for advanced use only. If you need more assistance, consult your technical team.
    </p>
</div>

# Configure webhooks

To add and manage webhooks for Support and Live Support:

1.  Click the **Settings** icon in the top navigation menu.
    <br>
    <img src="/assets/images/tech/webhooks/0.png" alt="Navigation menu, indicating that the Settings icon be selected." width="300">
2.  Select _Miscellaneous Settings > Webhooks_ from the left-hand menu.
    <br>
    <img src="/assets/images/tech/webhooks/3.png" alt="Settings menu, indicating that the Webhooks option under Miscellaneous Settings be selected." width="200">

# Add a webhook
In Support, you can create two types of webhooks: **Global** and **Live Support**. Global webhooks are triggered by Support events such as ticket creation. Live Support webhooks are used only for Live Support events, such as joining a chat. Explanation as to why they're separate - I think they accept different information.

Select an option below to learn how to add a Global or Chat Only webhook.

<figure class="table">
    <table class="foldable">
        <tbody>
            <tr>
                <td>
                    <h1>
                        Add a global webhook
                    </h1>
                </td>
            </tr>
            <tr>
                <td>
                    <p>
                        Global webhooks connect your entire Customer Help instance to an external service. Events that can trigger a webhook include:
                    </p>
                    <ul>
                        <li>
                            Creating a ticket
                        </li>
                        <li>
                            Closing a ticket
                        </li>
                        <li>
                            Answering a ticket
                        </li>
                        <li>
                            Receiving a ticket reply&nbsp;
                        </li>
                        <li>
                            Classifying a ticket
                        </li>
                        <li>
                            Changing the ticket's queue
                        </li>
                    </ul>
                    <p>
                        To add a global webhook:
                    </p>
                    <ol>
                        <li>
                            Go to the <strong>Global </strong>section and select <strong>Add Webhook</strong>.&nbsp;
                            <br>
                            <img src="/assets/images/tech/webhooks/1.png" alt="The Webhooks configuration screen, indicating you should select the Add Webhook button in the Global section." width="600">
                        </li>
                        <li>
                            The <i>Add Webhook</i> page will open. You must enter the following information to configure the webhook:&nbsp;
                            <br>
                            <strong>URL: </strong>Enter the external service URL to be called when the webhook is triggered.&nbsp;
                            <br>
                            <strong>API secret key</strong>: Enter the token to use to validate received payloads.&nbsp;
                            <br>
                            <strong>Set this webhook to private</strong>: Check this box to make the webhook secure and accessible only through secure channels. Public webhooks allow broader access and can be simpler to work with.&nbsp;
                            <br>
                            <strong>Actions</strong>: Select one or more actions or events which will trigger the webhook.
                        </li>
                        <li>
                            Select <strong>Save</strong> to finish and create the webhook.
                        </li>
                    </ol>
                    <div class="box-info">
                        <p>
                            There are technical requirements to set up webhooks for Assist. Consult with your technical team, and <a href="example" target="_blank">refer to the Developer's Portal</a> for more information.
                        </p>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</figure>
<figure class="table">
    <table class="foldable">
        <tbody>
            <tr>
                <td>
                    <h1>
                        Add an Live Support specific webhook
                    </h1>
                </td>
            </tr>
            <tr>
                <td>
                    <p>
                        Live Support lets agents have real-time chat conversations with users. Webhooks specific to Live Support can customize this experience. Events that can trigger a webhook include:
                    </p>
                    <ul>
                        <li>
                            Creating or closing a chat
                        </li>
                        <li>
                            Assigning a chat to an agent
                        </li>
                        <li>
                            Joining or leaving a chat
                        </li>
                        <li>
                            Sending or receiving a chat message
                        </li>
                        <li>
                            Receiving, accepting or rejecting a chat invitation
                        </li>
                        <li>
                            No agents being available to be assigned to a chat
                        </li>
                        <li>
                            <s>&nbsp;</s>A user or system action occurring
                        </li>
                    </ul>
                    <p>
                        To add an Live Support specific webhook:
                    </p>
                    <ol>
                        <li>
                            Go to the <strong>Live Support specific </strong>section and select <strong>Add Webhook</strong>.&nbsp;
                            <br>
                            <img src="/assets/images/tech/webhooks/2.png" alt="The Webhooks configuration screen, indicating you should select the Add Webhook button in the Live Chat specific section." width="600">
                        </li>
                        <li>
                            The <i>Add Agent Chat Webhook</i> page will open. You must enter the following information to configure the webhook:&nbsp;
                            <br>
                            <strong>URL: </strong>Enter the external service URL to be called when the webhook is triggered.&nbsp;
                            <br>
                            <strong>Set this webhook to private</strong>: Check this box to make the webhook secure and accessible only through secure channels. Public webhooks allow broader access and can be simpler to work with.&nbsp;
                            <br>
                            <strong>Actions</strong>: Select one or more actions or events which will trigger the webhook.&nbsp;
                            <br>
                            <strong>Sources</strong>: Select one or more chat <a href="example" target="_blank">sources</a> to apply the webhook to. The webhook will only trigger when an event occurs for chats in the selected sources.
                        </li>
                        <li>
                            Select <strong>Save</strong> to finish and create the webhook.
                        </li>
                    </ol>
                    <div class="box-alert">
                        <p>
                            <strong>Important</strong>: Do not set up more than one webhook for the same event and chat source. If there is a conflict, only one webhook is used and the rest is ignored. --- WTF is a chat source??
                        </p>
                    </div>
                    <div class="box-info">
                        <p>
                            There are technical requirements to set up webhooks for Agent Chat. Consult with your technical team, and <a href="example" target="_blank">refer to the Developer's Portal</a> for more information.
                        </p>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</figure>

# Use cases
Since webhooks allow you to tie in an external system, you can use them to do nearly anything. Select an example below to learn more. 

<figure class="table">
    <table class="foldable">
        <tbody>
            <tr>
                <td>
                    <h1>
                        Assign chats using an external algorithm
                    </h1>
                </td>
            </tr>
            <tr>
                <td>
                    <p>
                        Say you want to set up a smart system to assign chats to agents based on more than just their current workload. You configure an Agent Chat webhook for the <strong>Assign chat</strong> event.
                    </p>
                    <ol>
                        <li>
                            <strong>Webhook is triggered</strong>. Whenever a chat needs an agent, the <strong>Assign chat</strong> event triggers the webhook.
                        </li>
                        <li>
                            <strong>Call the external service</strong>. The webhook sends a request to your external service with data about the user and the chat.
                        </li>
                        <li>
                            <strong>System selects an agent</strong>. Your external system processes the data and picks the best agent for the job.
                        </li>
                        <li>
                            <strong>System responds</strong>. The external service sends back the chosen agent's ID.
                        </li>
                    </ol>
                </td>
            </tr>
        </tbody>
    </table>
</figure>

<figure class="table">
    <table class="foldable">
        <tbody>
            <tr>
                <td>
                    <h1>
                        Integrate Assist with a Business Intelligence (BI) system
                    </h1>
                </td>
            </tr>
            <tr>
                <td>
                    <p>
                        Say you want to keep all your ticket-related data in an external BI system for better analysis. You can set up a webhook to send this data automatically.
                    </p>
                    <ol>
                        <li>
                            <strong>Event is triggered</strong>. Configure Global webhooks to trigger for the <strong>Create ticket</strong> and <strong>Reply ticket</strong> events.
                        </li>
                        <li>
                            <strong>Send data to external service</strong>. The webhook sends the ticket and user data to your BI system's endpoint.
                        </li>
                        <li>
                            <strong>Data storage</strong>. The BI system receives this data and stores it, ready for you to analyze and generate reports.
                        </li>
                    </ol>
                </td>
            </tr>
        </tbody>
    </table>
</figure>

{::nomarkdown}
</div>
<script src="/assets/js/foldable.js"></script>
{:/nomarkdown}