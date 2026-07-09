---

title: "Adding webhooks to connect with external systems"
description: "Webhooks extend Nilquist support by hooking in external services. Learn how to set up your own webhooks."
thumbnail: /assets/images/placeholder_splash.png
piece_type: "User Guide"

layout: single
robots: noindex, nofollow

toc: true
toc_label: Contents

sidebar: false

#classes: portfolio-body

---

<div class="about">
<h1>About this piece</h1>
This user guide was written for our technical and non-technical customers to introduce webhooks and explain the set up process. The goal was to provide a starting point for customers interested in extending their product's functionality, which is why conceptual information and use cases were included. But shouldn't articles do one thing only?
</div>

{::nomarkdown}
<div class="portfolio-body">
{:/nomarkdown}

**Webhooks** are used to extend the functionality of **Customer Help** and **Live Support** through interaction with an external service. You can register your own webhook URL, allowing you to integrate your systems with Support and customize the webhook's actions.

Use webhooks to:

*   Manage ticket data in an external database, such as reporting software.
*   Get real-time notifications and collect data around user activity
*   Integrate services that manage agents' work processes, such as timetables.
*   Retrieve and update user information, such as contact details, across you entire system.

# How do webhooks work?

A webhook is an HTTPS request to an external system. When triggered, the webhook sends data to the external system, which can store it, process it, or respond with new data based on the received information. The data being sent and received is called a **Payload**.

<div class="box-info" markdown = "1">

A webhook occurs when an **event** happens — a ticket is assigned, a message is sent, or a ticket is moved to a new queue.

</div>

Setting up a webhook requires technical information from the external system. You can find Nilquist's technical requirements for webhooks in our Docs page:

*   [Setting up your server to interact with Nilquist](/example/)
*   [Authentication and requests](/example/)

<div class="box-alert">
    <p>
        <strong>Important: </strong>Nilquist API is for advanced use. If you need more assistance, consult your technical team.
    </p>
</div>

---

# Configure a webhook

To manage webhooks for Customer Help and Live Support:

1.  Click the **Settings** icon in the top navigation menu.
    <br>
    <img src="/assets/images/tech/webhooks/0.png" alt="Navigation menu, indicating that the Settings icon be selected." width="300">
2.  Select _Automation > Webhooks_ from the left-hand menu.
    <br>
    <img src="/assets/images/tech/webhooks/3.png" alt="Settings menu, indicating that the Webhooks option under Miscellaneous Settings be selected." width="200">

In Customer Help, you can create two types of webhooks:

- **Customer Help** webhooks are triggered by events related to tickets, such as creating a ticket.

- **Live Support** webhooks are triggered by events related to Live Support, such as joining a chat.

Select an option below to learn how to add a Customer Help or Live Support webhook.

<figure class="table">
    <table class="foldable">
        <tbody>
            <tr>
                <td>
                    <h1>
                        Add a Customer Help webhook
                    </h1>
                </td>
            </tr>
            <tr>
                <td>
                    <p>
                        Customer Help webhooks connect your instance to an external service. Events that can trigger a webhook include:
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
                            Receiving a ticket reply
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
                            Go to the <strong>Customer Help</strong>section and select <strong>Add webhook</strong>.&nbsp;
                            <br>
                            <img src="/assets/images/tech/webhooks/2.png" alt="The Webhooks configuration screen, indicating you should select the Add Webhook button in the Global section." width="600">
                        </li>
                        <li>
                            The <i>Add Webhook</i> page will open. You must enter the following information to configure the webhook:
                            <ul>
                                <li><strong>URL: </strong>Enter the external service URL to be called when the webhook is triggered.</li>
                                <li><strong>API secret key</strong>: Enter the token to validate received payloads.</li>
                                <li><strong>Set this webhook to private</strong>: Private webhooks are secure and accessible only through secure channels. Public webhooks allow broader access and can be simpler to work with.</li>
                                <li><strong>Events</strong>: Select one or more events which will trigger the webhook.</li>
                            </ul>
                        </li>
                        <li>
                            Select <strong>Save</strong> to finish and create the webhook.
                        </li>
                    </ol>
                    <div class="box-info">
                        <p>
                            There are technical requirements to set up webhooks for Customer Help. Consult with your technical team, and <a href="example" target="_blank">refer to the Developer's Portal</a> for more information.
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
                        Add an Live Support webhook
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
                            A user or system action occurring, such as typing
                        </li>
                    </ul>
                    <p>
                        To add a Live Support webhook:
                    </p>
                    <ol>
                        <li>
                            Go to the <strong>Live Support</strong>section and select <strong>Add Webhook</strong>.&nbsp;
                            <br>
                            <img src="/assets/images/tech/webhooks/4.png" alt="The Webhooks configuration screen, indicating you should select the Add Webhook button in the Live Chat specific section." width="600">
                        </li>
                        <li>
                            The <i>Add Agent Chat Webhook</i> page will open. You must enter the following information to configure the webhook:&nbsp;
                            <ul>
                                <li><strong>URL: </strong>Enter the external service URL to be called when the webhook is triggered.&nbsp;</li>
                                <li><strong>Set this webhook to private</strong>: Private webhooks are secure and accessible only through secure channels. Public webhooks allow broader access and can be simpler to work with.</li>
                                <li><strong>Events</strong>: Select one or more events which will trigger the webhook.</li>
                                <li><strong>Sources</strong>: Select one or more Live Support <a href="example" target="_blank">sources</a> to apply the webhook to. The webhook will only trigger when an event occurs for chats from the selected sources.</li>
                            </ul>
                        </li>
                        <li>
                            Select <strong>Save</strong> to finish and create the webhook.
                        </li>
                    </ol>
                    <div class="box-alert">
                        <p>
                            <strong>Important</strong>: Do not set up more than one webhook for the same event or source. If there is a conflict, only one webhook is used and others are ignored.
                        </p>
                    </div>
                    <div class="box-info">
                        <p>
                            There are technical requirements to set up webhooks for Live Support. Consult with your technical team, and <a href="example" target="_blank">refer to the Developer's Portal</a> for more information.
                        </p>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</figure>

# Examples
Since webhooks allow you to tie in an external system, you can use them to do nearly anything. Select an example below.

![Customer calling an agent](/assets/images/tech/webhooks/customer%20service.png)

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
                        You want to set up a smart system that assigns Live Support chats to agents based on their qualifications and certificates. You configure an Agent Chat webhook for the <strong>Assign chat</strong> event.
                    </p>
                    <ol>
                        <li>
                            <strong>Webhook is triggered</strong>. Whenever a chat needs an agent, the <strong>Assign chat</strong> event triggers the webhook.
                        </li>
                        <li>
                            <strong>Call the external service</strong>. The webhook sends a request to your external service with data about the chat request and available agents.
                        </li>
                        <li>
                            <strong>System selects an agent</strong>. Your external system processes the data and picks the best agent for the job based on region and topic.
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

![Analyst gathers data using webhook](/assets/images/tech/webhooks/web%20analyst.png)

<figure class="table">
    <table class="foldable">
        <tbody>
            <tr>
                <td>
                    <h1>
                        Integrate Customer Help with a Business Intelligence (BI) system
                    </h1>
                </td>
            </tr>
            <tr>
                <td>
                    <p>
                        You want to keep all your ticket-related data in an external BI system for better analysis. You can set up a webhook to send this data automatically.
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