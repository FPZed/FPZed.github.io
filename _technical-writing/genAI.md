---

title: "Give your bot more to say with Generative AI"
description: "Introducing a new feature for Nilquist's Bot Assistant which leverages Generative AI for a more natural conversation."
thumbnail: /assets/images/placeholder_splash.png
piece_type: "Feature overview"


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



---

{::nomarkdown}
<div class="portfolio-body">
{:/nomarkdown}

<p>
    When users ask your Bot Assistant a question, it searches a vast database –&nbsp;called your <strong>Intent Base</strong> –&nbsp;for the most relevant answer. But, in case your Bot Assistant can't find an intent that's good enough, you can set up a <strong>Generative AI</strong> source that creates a new answer for the user.
</p>
<div class="box-info">
<p>
    <strong>Important</strong>: Generative AI is an on-demand feature. Contact <a href="/example/" target="_blank" rel="noopener noreferrer">Nilquist Support</a> to request it for your instance.
</p>
</div>
<figure>
    <p>
        <img src="https://static-or01.inbenta.com/a0a32f9a83d44d857e9ecf4a1233c40d6561eefd882f08529d577dc4ac8e3cea/image_1718989714308.png" alt="">
    </p>
</figure>

# Send AI-generated answers

<p>
    The <strong>Generative AI source</strong> uses a Large Language Model (for example, popular <strong>LLMs</strong> include OpenAI's GPT, Google's Gemini, and Meta's Llama) to generate answers. The AI gets its information from sources you provide via a Search instance and will do its best to come up with a helpful response for the user.
</p>

# Set up a Federated Bot source

<p>
    Once you've worked with Nilquist Support to enable this feature, add a Generative AI federated bot source. Your Bot Assistant will consult all of its sources to find an answer, including other knowledge or search instances. It's important to mark the Generative AI source as lowest priority, meaning the Chat will only provide an AI-generated response if it can't find a good response anywhere else.
</p>
<ol>
    <li>
        Go to <i>Settings &gt; Federated Bot</i>
    </li>
    <li>
        Select the <strong>Add</strong> button.
    </li>
    <li>
        Choose <strong>Generative AI </strong>from the menu.
    </li>
</ol>
<p>
    <img style="width:500px;" src="https://static-or01.inbenta.com/a0a32f9a83d44d857e9ecf4a1233c40d6561eefd882f08529d577dc4ac8e3cea/1115_1_1720002284442.png" alt="">
</p>
<p>
    From there, you will configure your Federated Bot by giving it a name, and providing an optional <strong>Initial Text</strong> that will display before a generated answer.
</p>
<p>
    <strong>Example</strong>
</p>
<ul>
    <li>
        <strong>Name: "</strong>Generative AI answers"
    </li>
    <li>
        <strong>Initial text</strong>: “I generated some results you might find useful:”
    </li>
</ul>

# Give your users a heads-up

<p>
    We provide a set of predefined <a href="/example/" target="_blank">system variables</a> that let you set up a consent dialog to inform users at the start of a conversation that they may receive AI-generated answers throughout the conversation and to have them consent to or refuse the use of GenAI. You can also use this dialog to provide information about Generative AI. This is a good practice that fulfills the transparency requirement of notifying users that some responses may be generated by AI and to obtain their consent to proceed.
</p>
<p>
    Unlike Nilquist's conversational AI, the output of generative AI cannot be fully controlled. Although the technology is continually improving, there is still a possibility that some answers may be inaccurate. Therefore, it is essential to inform users about the source of their answers.
</p>
<p>
    See <a href="/example/" target="_blank">Generative AI consent dialog for Federated Bot</a> to learn how to set up a consent dialog.
</p>