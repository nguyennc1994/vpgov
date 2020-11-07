{% extends 'layouts/default.volt' %}
{% block content %}
{#    <div id="slider" style="width:1140px;height:2027px;margin:0 auto;margin-bottom: 0px;">#}
{#    </div>#}
    {[{ vm.slides | json }]}
    <div id="slide" style="width:1140px;height:2027px;margin:0 auto;margin-bottom: 0px;">
    </div>


    <script type="text/javascript">
     var vm = this;

        fetch("http://viettel.local/vpgov/backend-slide/list").then(res => res.json()).then(data => {
            // listSlide = data.items;
            for ( let i =0; i<data.items.length; i++){
                // console.log("listSlide "+i+ "   "+JSON.stringify(listSlide[i]))
                if(data.items[i].data.display[0] == 1){
                    vm.slides.push(data.items[i]);
                    // var slide = "<div class=\"ls-slide\" data-ls=\"duration:15000; transition2d:13; timeshift:-500; kenburnsscale:1.2;\">\n" +
                    //     "            <img width=\"1080\" height=\"1920\" src=\""+data.items[i].data.shadowImage +"\" class=\"ls-bg\" alt=\"\" />\n" +
                    //     "            <div style=\"width:100%; height:100%; background: url('http://cms.local"+data.items[i].data.backgroundImage+"'); background-size: 100%;top:50%; left:50%;\" class=\"ls-l\" data-ls=\"offsetyin:500; easingin:easeOutExpo; scaleyin:10; transformoriginin:50% 0% 0; offsetyout:-500; easingout:easeInExpo; scaleyout:4; transformoriginout:50% 100% 0; parallaxlevel:0;\"></div>\n" +
                    //     "            <p style=\"font-weight:400;width:966px; font-family:Roboto,Helvetica,Arial,sans-serif; font-size:45px; line-height:70px; color:#ffffff; top:150px; left:88px; white-space:normal; text-align: justify;\" class=\"ls-l\" data-ls=\"offsetyin:500; delayin:350; easingin:easeOutExpo; offsetyout:-1300; easingout:easeInExpo; parallaxlevel:0;\"><span ng-if=\" u.data.quote != ''\" style=\"font-size:inherit;font-family:none;font-weight:bold;position:absolute;margin-left:-4%;\">“</span>"+data.items[i].data.quote+"<span ng-if=\" u.data.quote != ''\" style=\"font-size:inherit;font-family:none;font-weight:bold;\"> ”</span></p>\n" +
                    //     "            <div style=\"width:330px; height:8px; background:#db9200; top:470px; left:81px;\" class=\"ls-l\" data-ls=\"delayin:1300; easingin:easeOutCubic; fadein:false; scalexin:0; transformoriginin:00% 50% 0; offsetyout:-1700; easingout:easeInExpo; parallaxlevel:0;\"></div>\n" +
                    //     "            <p style=\"font-weight:600;font-family:Roboto,Helvetica,Arial,sans-serif; font-size:28px; line-height:30px; color:#cccccc; top:500px; left:88px;\" class=\"ls-l\" data-ls=\"offsetyin:500; delayin:100; easingin:easeOutExpo; offsetyout:-1700; easingout:easeInExpo; parallaxlevel:0;\">"+ data.items[i].data.position +"</p>\n" +
                    //     "            <p style=\"font-weight:900;letter-spacing:-0.015em;font-family:Roboto,Helvetica,Arial,sans-serif; font-size:45px; line-height:60px; color:#db9200; top:540px; left:86px;\" class=\"ls-l\" data-ls=\"offsetyin:500; delayin:50; easingin:easeOutExpo; offsetyout:-2000; easingout:easeInExpo; parallaxlevel:0;\">"+ data.items[i].data.name.toUpperCase() +"</p>\n" +
                    //     "            <img width=\"480\" height=\"320\" src=\""+ data.items[i].data.leftSubImage +"\" class=\"ls-l\" alt=\"\" style=\"top:1364px; left:45px;border: 15px solid rgba(255,255,255,0.3); border-width: none !important;\" title=\"Ryan Reynolds - Wade / Deadpool\" data-ls=\"offsetyin:500; delayin:450; easingin:easeOutExpo; offsetyout:-900; easingout:easeInExpo; parallaxlevel:0;\">\n" +
                    //     "            <p style=\"font-weight:400;width:480px; font-family:Roboto,Helvetica,Arial,sans-serif; font-size:27px; line-height:38px; color:#ffffff; top:1728px; left:45px; white-space:normal; text-align: justify;\" class=\"ls-l\" data-ls=\"offsetyin:500; delayin:350; easingin:easeOutExpo; offsetyout:-1300; easingout:easeInExpo; parallaxlevel:0;\">"+ data.items[i].data.leftSubTitle +"</p>\n" +
                    //     "            <img width=\"480\" height=\"320\" src=\""+ data.items[i].data.rightSubImage +"\" class=\"ls-l\" alt=\"\" style=\"top:1364px; left:580px;border: 15px solid rgba(255,255,255,0.3); border-width: none !important;\" title=\"Morena Baccarin - Vanessa\" data-ls=\"offsetyin:500; delayin:500; easingin:easeOutExpo; offsetyout:-850; easingout:easeInExpo; parallaxlevel:0;\">\n" +
                    //     "            <p style=\"font-weight:400;width:480px; font-family:Roboto,Helvetica,Arial,sans-serif; font-size:27px; line-height:38px; color:#ffffff; top:1728px; left:580px; white-space:normal; text-align: justify;\" class=\"ls-l\" data-ls=\"offsetyin:500; delayin:350; easingin:easeOutExpo; offsetyout:-1300; easingout:easeInExpo; parallaxlevel:0;\">"+ data.items[i].data.rightSubTitle +"</p>\n" +
                    //     "            <img  width=\"816\" height=\"800\" src=\""+ data.items[i].data.mainImage +"\" class=\"ls-l\" alt=\"\" style=\"top:47.5%; left:100%;margin-left:-10%\" data-ls=\"offsetyin:500; delayin:800; easingin:easeOutExpo; offsetyout:-500; easingout:easeInExpo; parallaxlevel:0;\">\n" +
                    //     "        </div>"
                }


            }
            var slide = "<li class=\"media\" data-ng-repeat=\"u in vm.slides\"><h3>vm.slides</h3></li>"
            document.getElementById("slide").innerHTML = slide;

            console.log("Danh sach slide: "+ JSON.stringify(vm.slides))

        }).catch(error => console.log("ERROR"))

        vm.getSlides  = function (){
            for( let i =0; i<vm.slides.length; i++){
                listSlides = ""
            }
            return listSlides;
        }

         $('#slider').layerSlider({
             sliderVersion: '6.0.0',
             type: 'fullwidth',
             responsiveUnder: 1140,
             maxRatio: 1,
             hideUnder: 0,
             hideOver: 100000,
             skin: 'v5',
             allowRestartOnResize: true,
             skinsPath  : '/modules/vpgov/themes/backend/default/assets/skins/'
         })
    </script>
{% endblock %}
