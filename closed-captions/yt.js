var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        videoId: 'Jj64SuhVrvY',
        controls: '0',
        playerVars: {
            color: 'white'
            //autoplay: '1'
            //playlist: 'taJ60kskkns,FG0fTKAqZ5g'
        },
        events: {
            onReady: initialize
        }
    });
}

function initialize() {
    // Update the controls on load
    addSpans();
}

function addSpans() {
    var ps = document.querySelectorAll('#closed-captions p');
    var i = 0;
    var regex = /\S+/g;
    while (i < ps.length) {
        var str = ps[i].innerText;
        var result = str.replace(regex, function (a) {
            return "<span>" + a + "</span>";
        });
        ps[i].innerHTML = result;
        ps[i].classList.add('p' + i);
        i++;
    }
    updateTimerDisplay();
}

var logo = document.querySelector('figure > img:nth-of-type(3)');
var links = document.querySelector('figure > img:nth-of-type(1)');
var rechts = document.querySelector('figure > img:nth-of-type(2)');
var achtergrond = document.querySelector('figure > img:nth-of-type(4)');
var tijgerAfbeelding = document.querySelector('figure:nth-of-type(2) > img');


function updateTimerDisplay() {
    var t = player.getCurrentTime();
    t = Math.floor10(t, -1);
    // for each paragraph we want to know:
    // (paragraph number, start time, end time, current time)

    //Officer K D 6 - 3 . 7. Let’s begin. Ready?
    if (t > 0) {
        document.body.style.background = "black";
        document.getElementById("video-placeholder").style.transition = "height 3s ease, width 3s ease";
        document.getElementById("video-placeholder").style.width = "1024px";
        document.getElementById("video-placeholder").style.height = "576px";
        document.getElementById("video-placeholder").style.boxShadow = "none";
        logo.style.animation = "slideToBottom 1.5s forwards";
        links.style.animation = "slideToLeft 1.5s forwards";
        rechts.style.animation = "slideToRight 1.5s forwards";
        achtergrond.style.animation = "fadeAway 1.5s forwards";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound3'))) {
        tijgerAfbeelding.style.display = "inline-block";
        tijgerAfbeelding.classList.add('on');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound4'))) {
        tijgerAfbeelding.classList.remove('on');
        tijgerAfbeelding.style.display = "none";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound5'))) {
        tijgerAfbeelding.style.display = "inline-block";
        tijgerAfbeelding.classList.add('on');
        tijgerAfbeelding.classList.add('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound8'))) {
        tijgerAfbeelding.classList.remove('on');
        tijgerAfbeelding.classList.remove('tiger2');
        tijgerAfbeelding.style.display = "none";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound27'))) {
        document.body.style.background = "#b0b0b0";
        document.getElementById("video-placeholder").style.animation = "gunshot .7s forwards";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound29'))) {
        document.getElementById("video-placeholder").style.animation = "";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound30'))) {
        document.getElementById("video-placeholder").style.animation = "gunshot .7s forwards";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound31'))) {
        document.body.style.animation = "dofGeluid 2s forwards";
        document.getElementById("video-placeholder").style.animation = "";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound32'))) {
        document.getElementById("video-placeholder").style.animation = "gunshot .7s forwards";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound33'))) {
        document.getElementById("video-placeholder").style.animation = "";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound34'))) {
        document.body.style.background = "black";
        document.body.style.animation = "";
        tijgerAfbeelding.style.display = "inline-block";
        tijgerAfbeelding.classList.add('on');
        tijgerAfbeelding.classList.add('tiger3');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound36'))) {
        tijgerAfbeelding.classList.remove('tiger3');
        tijgerAfbeelding.style.zIndex = "-1";
        tijgerAfbeelding.style.opacity = ".3";
        tijgerAfbeelding.classList.add('tiger4');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound38'))) {
        tijgerAfbeelding.classList.remove('tige4');
        tijgerAfbeelding.style.zIndex = "1";
        tijgerAfbeelding.style.opacity = ".3";
        tijgerAfbeelding.classList.add('tiger3');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound40'))) {
        tijgerAfbeelding.classList.remove('tige3');
        tijgerAfbeelding.style.zIndex = "1";
        tijgerAfbeelding.classList.add('tiger5');
        tijgerAfbeelding.style.opacity = "1";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound42'))) {
        tijgerAfbeelding.classList.remove('on');
        tijgerAfbeelding.classList.remove('tiger4');
        tijgerAfbeelding.classList.remove('tiger5');
        tijgerAfbeelding.classList.remove('tiger3');
        tijgerAfbeelding.style.display = "none";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound43'))) {
        tijgerAfbeelding.style.display = "inline-block";
        tijgerAfbeelding.classList.add('on');
        tijgerAfbeelding.classList.add('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound44'))) {
        document.getElementById("video-placeholder").style.animation = "shakeScreen .1s infinite";
        tijgerAfbeelding.style.display = "none";
        tijgerAfbeelding.classList.remove('on');
        tijgerAfbeelding.classList.remove('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound45'))) {
        tijgerAfbeelding.style.display = "none";
        tijgerAfbeelding.classList.remove('on');
        tijgerAfbeelding.classList.remove('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound46'))) {
        tijgerAfbeelding.style.display = "inline-block";
        tijgerAfbeelding.classList.add('on');
        tijgerAfbeelding.classList.add('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound48'))) {
        tijgerAfbeelding.style.display = "none";
        tijgerAfbeelding.classList.remove('on');
        tijgerAfbeelding.classList.remove('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound49'))) {
        tijgerAfbeelding.style.display = "inline-block";
        tijgerAfbeelding.classList.add('on');
        tijgerAfbeelding.classList.add('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound50'))) {
        tijgerAfbeelding.style.display = "none";
        tijgerAfbeelding.classList.remove('on');
        tijgerAfbeelding.classList.remove('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound51'))) {
        document.getElementById("video-placeholder").style.animation = "shakeScreen .1s infinite, gunshot2 5.7s forwards";
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound52'))) {
        tijgerAfbeelding.style.display = "inline-block";
        tijgerAfbeelding.classList.add('on');
        tijgerAfbeelding.classList.add('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound53'))) {
        tijgerAfbeelding.style.display = "none";
        tijgerAfbeelding.classList.remove('on');
        tijgerAfbeelding.classList.remove('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound54'))) {
        tijgerAfbeelding.style.display = "inline-block";
        tijgerAfbeelding.classList.add('on');
        tijgerAfbeelding.classList.add('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound56'))) {
        document.getElementById("video-placeholder").style.animation = "";
        tijgerAfbeelding.style.display = "none";
        tijgerAfbeelding.classList.remove('on');
        tijgerAfbeelding.classList.remove('tiger2');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound58'))) {
        tijgerAfbeelding.style.display = "inline-block";
        tijgerAfbeelding.classList.add('on');
        tijgerAfbeelding.classList.add('tiger3');
    }
    
    if ((t > 0 ) && (document.body.classList.contains('sound60'))) {
        tijgerAfbeelding.style.display = "none";
        tijgerAfbeelding.classList.remove('on');
        tijgerAfbeelding.classList.remove('tiger3');
    }

    var i = 0;
    while (i < captions.length) {
        pTimes(i, captions[i][0], captions[i][1], t);
        i++;
    }
    var i = 0;
    while (i < sounds.length) {
        sTimes(i, sounds[i], t);
        i++;
    }

    if (t < 144) {
        setTimeout(() => {
            updateTimerDisplay();
        }, 100);
    }
}

function pTimes(num, startT, endT, curT) {
    var curP = document.querySelector('.p' + num);
    if (curT > endT && !curP.classList.contains('off')) {
        curP.classList.add('off');
    }
    if (curT < endT && curP.classList.contains('off')) {
        curP.classList.remove('off');
    }
    if (curT > startT && !curP.classList.contains('on')) {
        curP.classList.add('on');
    }
    if (curT < startT && curP.classList.contains('on')) {
        curP.classList.remove('on');
    }
}

function sTimes(num, soundStarts, curT) {
    var soundClass = 'sound' + num;
    var b = document.querySelector('body');
    if (curT > soundStarts && !b.classList.contains(soundClass)) {
        b.classList.add(soundClass);
    }
    if (curT < soundStarts && b.classList.contains(soundClass)) {
        b.classList.remove(soundClass);
    }
}

(function () {
    /**
     * Decimal adjustment of a number.
     *
     * @param {String}  type  The type of adjustment.
     * @param {Number}  value The number.
     * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
     * @returns {Number} The adjusted value.
     */
    function decimalAdjust(type, value, exp) {
        // If the exp is undefined or zero...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // If the value is not a number or the exp is not an integer...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Decimal round
    if (!Math.round10) {
        Math.round10 = function (value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = function (value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = function (value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
})();