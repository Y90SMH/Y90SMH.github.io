---
layout: page
title: Blog
permalink: /blog/
---

<ul class="list_blog">
    {% for post in site.posts %}
        <li class="list--item">
            <h2 class="list--item--title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
            <p class="date"><time datetime="{{ post.date }}">{{ post.date | date: "%-d %B %Y" }}</time></p>
        </li>
    {% endfor %}
</ul>