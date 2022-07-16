function RgbExercise(module) {
    this.render(module)
}

RgbExercise.prototype.render = function (module) {

    let newVersion = module.querySelector('.rgbContent')

    if(newVersion){
        module.querySelectorAll('.rgbContent').forEach((el, index) => {

            var index = module.getAttribute('data-referential-index') + index.toString()

            var r = el.querySelector("#R")
            var g = el.querySelector("#green")
            var b = el.querySelector("#blue")
            var c = el.querySelector("#color")
            var d = el.querySelector("#drawing")
            var s = el.querySelector("#show_hex")
            var h = el.querySelector("#hex_color")

            if(r == null || g == null || b == null) {
                console.log('###########################  ERRO!  ############################')
                console.log('####### NÃO INSERIU A CLASS "rgbContent" NO RGBEXERCISE ########')
                console.log('################################################################')
            } else {

                r.id = `R-${index}`
                g.id = `green-${index}`
                b.id = `blue-${index}`
                c.id = `color-${index}`
                d.id = `drawing-${index}`
                s.id = `show_hex-${index}`
                h.id = `hex_color-${index}`


                let RED = `#R-${index}`
                let GREEN = `#green-${index}`
                let BLUE = `#blue-${index}`

                initSliderNew(RED, index);
                initSliderNew(GREEN, index);
                initSliderNew(BLUE, index);
            }
        })
    } else {
        initSlider("#R");
        initSlider("#green");
        initSlider("#blue");
    }
}

function hex(k) {
    var s = k.toString(16);
    if (k < 16) {
        s = '0' + s;
    }
    return s;
}

function colorChange(event, ui) {
    var r = $('#R').slider("value");
    var g = $("#green").slider("value");
    var b = $("#blue").slider("value");
    $("#color").text("R:" + r + " G:" + g + " B:" + b);
    doDraw(hex(r), hex(g), hex(b));

    if (document.getElementById('show_hex').checked) {
        showHex(r, g, b);
    }
}

function colorChangeNew(id) {
    var parent = (this).parentElement

    if (typeof parent == 'undefined'){
        var h = document.getElementById(id)
        parent = h.parentElement.parentElement
    }
    
    var red = '#' + parent.children[0].id;
    var green = '#' + parent.children[1].id;
    var blue = '#' + parent.children[2].id;
    var color = '#' + parent.children[3].id;
    var show_hex = parent.children[4].children[0].id;


    var r = $(red).slider("value");
    var g = $(green).slider("value");
    var b = $(blue).slider("value");
    
    $(color).text("R:" + r + " G:" + g + " B:" + b);

    var p = parent.parentElement.parentElement;

    var d = p.children[3].children[0].id

    doDrawNew(hex(r), hex(g), hex(b), d);

    if (document.getElementById(show_hex).checked) {
        var sHex = document.getElementById(show_hex).parentElement.querySelector('b').id
        showHexNew(r, g, b, sHex);
    }
}

function showHex(r, g, b) {
    $('#hex_color').removeClass('hidden');
    $('#hex_color').html('#' + hex(r).toUpperCase() + hex(g).toUpperCase() + hex(b).toUpperCase());
}

function showHexNew(r, g, b, sHex) {
    $('#' + sHex).removeClass('hidden');
    $('#' + sHex).html('#' + hex(r).toUpperCase() + hex(g).toUpperCase() + hex(b).toUpperCase());
}

function toggleHex() {
    if (document.getElementById('show_hex').checked) {
        colorChange(null, null);
        $('#hex_color').css('visibility', 'visible');
    } else {
        $('#hex_color').css('visibility', 'hidden');
    }
}

function toggleHexNew(id) {
    var sHex = document.getElementById(id).parentElement.querySelector('b').id

    var h = '#' + sHex

    if (document.getElementById(id).checked) {
        $(h).removeClass('hidden');
        $(h).css('visibility', 'visible');
    } else {
        $(h).css('visibility', 'hidden');
    }
}

function initSlider(id) {
    $(id).slider({
        max: 255,
        slide: colorChange,
        change: colorChange
    });
}

function initSliderNew(id) {
    $(id).slider({
        max: 255,
        slide: colorChangeNew,
        change: colorChangeNew
    });
}

function doDraw(r, g, b) {
    var dc = document.getElementById('drawing');
    if (dc && dc.getContext) {
        var cxt = dc.getContext('2d');

        cxt.clearRect(0, 0, dc.width, dc.height);
        cxt.globalCompositeOperation = 'lighter';
        cxt.strokeStyle = "#000000";

        // red
        cxt.fillStyle = "#" + r + "0000";
        cxt.fillRect(0, 0, dc.width * 7 / 8, dc.height * 7 / 8); // xywh

        // green
        cxt.fillStyle = "#00" + g + "00";
        cxt.fillRect(dc.width / 8, 0, dc.width * 6 / 8, dc.height); // xywh

        // blue
        cxt.fillStyle = "#0000" + b;
        cxt.fillRect(dc.width / 8, 0, dc.width * 7 / 8, dc.height * 7 / 8); // xywh
    }
}

function doDrawNew(r, g, b, d) {
    var dc = document.getElementById(d);
    if (dc && dc.getContext) {
        var cxt = dc.getContext('2d');

        cxt.clearRect(0, 0, dc.width, dc.height);
        cxt.globalCompositeOperation = 'lighter';
        cxt.strokeStyle = "#000000";


        // red
        cxt.fillStyle = "#" + r + "0000";
        cxt.fillRect(0, 0, dc.width * 7 / 8, dc.height * 7 / 8); // xywh

        // green
        cxt.fillStyle = "#00" + g + "00";
        cxt.fillRect(dc.width / 8, 0, dc.width * 6 / 8, dc.height); // xywh

        // blue
        cxt.fillStyle = "#0000" + b;
        cxt.fillRect(dc.width / 8, 0, dc.width * 7 / 8, dc.height * 7 / 8); // xywh
    }
}