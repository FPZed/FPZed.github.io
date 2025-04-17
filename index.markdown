---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

## Welcome to My Portfolio

Here's a list of my projects:

{% for item in site.portfolio %}
- [{{ item.title }}]({{ item.url }})
{% endfor %}