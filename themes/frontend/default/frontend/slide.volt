{% extends 'layouts/default.volt' %}
{% block content %}
    <div class="view-animate-container">
        <div ui-view></div>
    </div>
    <script>
        console.log("Day la frontend slide page")
    </script>
{% endblock %}
