{% extends 'layouts/default.volt' %}
{% block content %}
    <div id="slider" style="width:1140px;height:2027px;margin:0 auto;margin-bottom: 0px;">
        <h1>Ahihi</h1>
    </div>

    <script type="text/javascript">
        var vm = this;
        fetch("http://viettel.local/vpgov/backend-slide/list").then(res => res.json()).then(data => {
            for ( let i =0; i<data.items.length; i++){
                vm.slides = [];
                // console.log("listSlide "+i+ "   "+JSON.stringify(listSlide[i]))
                if(data.items[i].data.display[1] == 1){
                    console.log("data.items[i]"+JSON.stringify(data.items[i]))
                    vm.slides.push(data.items[i]);
                }
                console.log("vm.slides: "+vm.slides)
            }
        }).catch(error => console.log("ERROR"))



    </script>
{% endblock %}
