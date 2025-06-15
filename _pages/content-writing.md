---
layout: category
title: "Content Writing"
permalink: /content-writing/
author_profile: true
---

{% for piece in site.content-writing %}
<div class="portfolio-item">
    <a href = "{{ piece.url }}">
    <img src="{{ piece.thumbnail }}" class="item-thumbnail">
    </a>
    <div class = "item-details">
        <a href = "{{ piece.url }}">
            <h3 class = "item-title">{{ piece.title }}</h3>
        </a>
        <div class = "item-meta">
            <span class="item-type"> {{ piece.piece_type }} </span>
            {% assign reading_time = piece.content | number_of_words | divided_by: site.words_per_minute %}
            {% if reading_time < 2 %}
            <span class="item-time">1 minute</span>
            {% else %}
            <span class="item-time">{{ reading_time }} minutes</span>
            {% endif %}
        </div>
        <p class = "item-desc">{{ piece.description }}</p>
    </div>
</div>
{% endfor %}