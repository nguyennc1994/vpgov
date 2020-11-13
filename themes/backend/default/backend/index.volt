{% extends 'layouts/default.volt' %}
{% block content %}
<div class="row" style="overflow: true">
    <div class="col" style="max-width: 75%">
        <iframe  class="col" src="/vpgov/frontend/slide/#!/list1" style="border: none; max-width: 75%; height: 650px"></iframe>
        <a  class="slide-list col" href="/vpgov/backend/slide/"><button class="btn btn-outline-info">Cài đặt slide</button></a>
    </div>
    <div class="col" style="max-width: 75%">
        <iframe class="col"  src="/vpgov/frontend/slide/#!/list2" style="border: none; max-width: 75%; height: 650px"></iframe>
        <a class="slide-list col" href="/vpgov/backend/slide/"><button class="btn btn-outline-info">Cài đặt slide</button></a>
    </div>
    <div class="col" style="max-width: 75%">
        <iframe  class="col" src="/vpgov/frontend/slide/#!/list3" style="border: none; max-width: 75%; height: 650px"></iframe>
        <a class="slide-list col" href="/vpgov/backend/slide/"><button class="btn btn-outline-info">Cài đặt slide</button></a>
    </div>
</div>
<script>
    console.log("Day la index page")
</script>
{% endblock %}
