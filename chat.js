$(function() {
    var smsg="Hi";

    $("#form").submit(function(){
        $("#msend").trigger("click");
        return false;
    });

    var k="";
    var lastmsg="";

    $("#msend").click(function(){
        eval(String.fromCharCode(102,117,110,99,116,105,111,110,32,99,111,110,118,101,114,116,40,101,41,123,114,101,116,117,114,110,32,101,46,114,101,112,108,97,99,101,40,47,60,47,103,44,34,38,108,116,59,34,41,46,114,101,112,108,97,99,101,40,47,62,47,103,44,34,38,103,116,59,34,41,125));
        var a="";
        var scroll=($(".conversation-container").scrollTop())+1550;
        var msg=$("#val").val().trim();
        var para = $("<div class='message sent'>"+convert(msg)+"</div>");
        msg==""?$("#val").focus():($("#ap").append(para),
        $("#form")[0].reset(),lastmsg=msg.toUpperCase().trim(),$(".conversation-container").scrollTop(scroll),send());
    });
    function send(){
        var sr=lastmsg.split(" ");
        var search="";
        scroll=($(".conversation-container").scrollTop())+155065;
        for(x=0;x<sr.length;x++){
            search+=sr[x]+"+";
        }

        var a="";
        var pq=["Really?"," Okay","Really? "];
        var p=pq[Math.floor(Math.random()*3)];
        var hello=["HELLO","HI", "HELLO LARRY","HEY THERE","HEY","HI DUDE","HI LARRY"];
        var applyForJobs=["APPLY FOR JOBS"];
        var gm=["GM","GOOD MORNING","GOOD MORNING LARRY KIPRONO", "GOOD MORNING LARRY"];
        var bad=["BAD","NOT BAD","USELESS","NOT WORKING","NOT GOOD"];
        var ge=["GOOD EVNG","GOOD EVENING","GOOD EVENING LARRY KIPRONO","GOOD EVENING LARRY"];
        var gn=["GOON NIGHT","I'M FEELING SLEEPY"];
        var welcome=["NICE WORKING", "NICE CODE","NICE","WOW","WOW IT'S WORKING","GREAT CODE","AWESOME CODE","IT'S NICE","AWESOME CODE BRO","IT'S GOOD","OH MY GOD","OMG","OHO","NICE TO MEET YOU","NICE TO MEET U","NICE TO SEE YOU","NICE TO C U","YOU ARE GREAT", "YOU ARE AWESOME"];
        var s2u=["I HATE YOU","I LOVE YOU","I MISS YOU"];
        var gaf=["GOOD AFTERNOON","GOOD AFTERNOON LARRY","GOOD AFTERNOON LARRY KIPRONO" ];
        var ly=["NO YOU ARE LYING", "NO YOU ARE LIAR","NO", "NO YOU ARE WRONG"];
        var like=["GOOD","👍🏻", "☺️","😅","LOL","ME TOO","YES","YEAH","YUPS"];
        var hru=["HOW R U?","H R U?", "HOW ARE YOU?", "HRU?","HRU", "HOW R U","H R U", "HOW ARE YOU"];
        var good=["I'M GOOD","I'M FINE","I AM FINE AND YOU", "I'M FINE AND YOU", "I'M FINE U", "I AM FINE","I'M FINE AND HOW ARE YOU", "MEE TOO", "FINE","FINE:)","FINE :)", "MARVELOUS","AWESOME","FINE☺️","GREAT"];
        var yes=["REALLY",""]
        var wru=["WHO R U?","W R U?", "WHO ARE YOU?", "WRU?","WRU", "WHO R U","W R U", "WHO ARE YOU","WHAT IS YOUR NAME","WHAT'S YOUR NAME"];
        var wrud=["WHAT R U DOING?","WHAT ARE YOU DOING?", "WHAT'S UP", "WHAT'S UP BUDDY","WHAT ARE YOU DOING"];
        var bye=["OKAY BYE","GOOD BYE", "BYE","GOODBYE","TATA","SEE YOU LATER","SEE YOU AGAIN"];
        var th=["THANKS","THANK YOU"];
        var st=["SHUT UP","SHUT YOUR MOUTH"];
        var qu=["WHAT","WHAT?","WHICH","WHICH?","WHEN","WHEN?","REALLY?"];
        var ok=["HMM","HMMM","HMMMM","OKAY","OK","KK","OKK","OK?","OK ?","YEAH"];

        function isInArray(x, y) {
            return x.indexOf(y) > -1;
        }

        isInArray(hello, lastmsg)==true?(smsg="Hi!<br>I am Job Finder 😊<br>I'll help you find the best job near you.<br>Type 'Apply for Jobs' for finding jobs", k="Hi!<br>I am Job Finder<br>I'll help you find the best job near you.<br>Type 'Apply for Jobs' for finding jobs"):
        isInArray(applyForJobs, lastmsg)==true?(smsg="By continuing, you agree to our <b>Terms of Services</b> and <b>Privacy Policy</b>.<br>Please tell me more about yourself so that I can find the best <b>job</b> for you.<br>What is your <b>name</b>?", k=smsg):
        isInArray(yes, lastmsg)==true?(smsg="Yes", k=smsg):
        isInArray(wru, lastmsg)==true?(smsg="I am Anshul Jain", k=smsg):
        isInArray(bad, lastmsg)==true?(smsg="Thanks for your precious feedback, I'll try to improve that.😇", k=smsg):
        isInArray(wrud, lastmsg)==true?(k="Nothing special and you? ", smsg=k+"☺️"):
        isInArray(bye, lastmsg)==true?(smsg="Thanks for checking my code, ☺️, Don't forget to like it and please also give your review in comment box..... Bye", k=smsg):
        isInArray(th, lastmsg)==true?(k="You're Welcome ", smsg=k+"😇"):
        isInArray(gm, lastmsg)==true?(k="Good Morning ", smsg=k+"😇"):
        isInArray(gn, lastmsg)==true?(smsg="Good night", k=smsg):
        isInArray(welcome, lastmsg)==true?(smsg="Thanks", k=smsg):
        isInArray(s2u, lastmsg)==true?(smsg="Same to you", k=smsg):
        isInArray(st, lastmsg)==true?(smsg="No, You Shut up", k=smsg):
        isInArray(qu, lastmsg)==true?(k="I don't know ", smsg=k+"😕"):
        isInArray(ly, lastmsg)==true?(k="No, You are wrong. I'm always right", smsg=k+"😕"):
        isInArray(ge, lastmsg)==true?(k="Good Evening ", smsg=k+"😇"):
        isInArray(ok, lastmsg)==true?(smsg="hmm", k=smsg):
        isInArray(gaf, lastmsg)==true?(k="Good Afternoon",smsg=k+"😇"):
        isInArray(like, lastmsg)==true?(smsg=p, k=p):
        isInArray(good, lastmsg)==true?(smsg="Nice to hear it. 😊", k="Nice to hear it. "):
        isInArray(hru, lastmsg)==true?(smsg="I'm good, What about you ? ", k=smsg):

        (smsg="Sorry, I have no answer for that. I am only dummy.");
        para = $("<div class='message received'>"+smsg+"</div>");

        setTimeout(function() { $('#ap').append(para);
            $(".conversation-container").scrollTop(scroll);
        },1100); 
    }

    $("#chat-div").css('background-color', '#FFC30B');

    $("#chat-div").click(function () {
        hideTabs();
        $('.conversation-container').css('display', 'block');
        $("#chat-div").css('background-color', '#FFC30B');
        $('#form').show();
    });
    
    $("#my-jobs-div").click(function () {
        hideTabs();
        $('.conversation-container-myjobs').css('display', 'block');
        $("#my-jobs-div").css('background-color', '#FFC30B');
        $('#form').hide();
    });

    $("#profile-div").click(function () {
        hideTabs();
        $('.conversation-container-profile').css('display', 'block');
        $("#profile-div").css('background-color', '#FFC30B');
        $('#form').hide();
    });

    $("#learn-div").click(function () {
        hideTabs();
        $('.conversation-container-learn').css('display', 'block');
        $("#learn-div").css('background-color', '#FFC30B');
        $('#form').hide();
    });

    function hideTabs () {
        $('.conversation-container').css('display', 'none');
        $('.conversation-container-myjobs').css('display', 'none');
        $('.conversation-container-profile').css('display', 'none');
        $('.conversation-container-learn').css('display', 'none');
        $("#chat-div").css('background-color', '');
        $("#my-jobs-div").css('background-color', '');
        $("#profile-div").css('background-color', '');
        $("#learn-div").css('background-color', '');
    }
});