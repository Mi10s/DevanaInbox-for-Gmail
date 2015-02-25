setTimeout(function () {

    init();
}, 300);

setInterval(addButtonToGmail, 100);
setInterval(checkForEmail, 1000);
setInterval(addStatisticsToGmail, 100);


function addButtonToGmail() {

    $('.xY.a4W').css("width", "50%");



    $('table.F.cf.zt tr').each(function () {

        var $this = $(this);
        if ($this.find('.dropdown-menu').length > 0 || $this.find('.dReply').length > 0 || $this.find('.dForward').length > 0 || $this.find('.dArchive').length > 0 || $this.find('.dSchedule').length > 0 ) {
            return;
        }



        $($this).append('\
        <span style="float: right">\
        <button class="dReply" title="Reply">R</button>\
        <button class="dForward" title="Forward">F</button>\
        <button class="dArchive" title="Archive">A</button>\
        <button class="dSchedule" title="Schedule">S</button>\
        </span>\
        ');

        // On button "R" events
        $this.find('.dReply').on('click', function (event) {
            event.stopPropagation();
            console.log(event);
            $this.click();
            $('.ams').each(function () {
                var text = $(this).text();
                if (text === 'Reply') {
                    $(this).click();
                }
            });
        });

        // On button "F" Forward events
        $this.find('.dForward').on('click', function (event) {
            event.stopPropagation();

            $this.click();
            $('.ams').each(function () {
                var text = $(this).text();
                if (text === 'Forward') {
                    $(this).click();
                }
            });
        });


        // On button "A" events
        $this.find('.dArchive').on('click', function (event) {
            event.stopPropagation();
            $this.find('[role="checkbox"]').click();

            setTimeout(function () {
                $('.T-I.J-J5-Ji').each(function () {
                    if ($(this).attr('title') === 'Archive' || $(this).data('tooltip') === 'Archive' ||
                        $(this).attr('aria-label') === 'Archive') {
                        fireEvent(this, 'mousedown');
                        fireEvent(this, 'mouseup');
                    }
                });
            }, 100);


        });

        // On button "S" LookInto events
        $this.find('.dSchedule').on('click', function (event) {

            $('#myModal').modal();

        });
    });



}

function fireEvent(obj, evt) {
    var fireOnThis = obj;
    if (document.createEvent) {
        var evObj = document.createEvent('MouseEvents');
        evObj.initEvent(evt, true, false);
        fireOnThis.dispatchEvent(evObj);
    }
}

function addStatisticsToGmail(){

    if ($('.ar5.J-J5-Ji').find('.stats').length > 0 ) {
        return;
    }
    $('.ar5.J-J5-Ji').append('<button class="stats" title="Email Analytics & Statistics(Gmail Meter)">Statistics</button>');

    var eventIsAppendStats = false;
    var appendStatsButton = function(){
        eventIsAppendStats = true;
        console.log("Calling func");
        $('.stats').remove();
        $('.ar5.J-J5-Ji:visible').append('<button class="stats" title="Email Analytics & Statistics(Gmail Meter)">Statistics</button>');
        eventIsAppendStats = false;
    }
    var statsTimeout;
    $('.aeH').on('DOMSubtreexModified', function(){
        if(!eventIsAppendStats){
            clearTimeout(statsTimeout);
            console.log("Setting timeout");
            statsTimeout = setTimeout(appendStatsButton, 100);
        }
    });




    $(document).on('click', ".stats", function(){
        window.open("https://accounts.google.com/o/oauth2/auth?access_type=offline&state=%2Fprofile&redirect_uri=http%3A%2F%2Fgmail-meter.appspot.com%2Fcode&response_type=code&client_id=73231162372.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fadmin.directory.user.readonly", '_blank');
    });



}

function checkForEmail() {


    if (localStorage["emails"] != '[]') {
        var listScheduledEmails = JSON.parse(localStorage["emails"]);

        for (index = 0; index < listScheduledEmails.length; index++) {

            if (moment().isAfter(localStorage.getItem(listScheduledEmails[index]))) {

                window.location.hash = '#all/' + listScheduledEmails[index];

                var $this = $('.iH').find('.T-I.J-J5-Ji.aFj.T-I-ax7.L3');
                fireEvent($this[0], 'mousedown');
                fireEvent($this[0], 'mouseup');

                var that = $('.iH').find('.T-I.J-J5-Ji.ar7.nf.T-I-ax7.L3');
                fireEvent(that[0], 'mousedown');
                fireEvent(that[0], 'mouseup');

                var there = $('.J-N-Jz');
                there.each(function () {
                    if (this.innerText == "Mark as unread") {
                        fireEvent(this, 'mousedown');
                        fireEvent(this, 'mouseup');

                        fireEvent(this, 'mousedown');
                        fireEvent(this, 'mouseup');
                    }
                });

                listScheduledEmails.splice(index, 1);
                window.scheduledEmails = null;
                localStorage["emails"] = JSON.stringify(listScheduledEmails);
                window.location.hash = '#inbox';

            }
        }


    }


}

function init() {
    var emailId;
    var scheduledEmails;

    if (localStorage["emails"] == null) {
        localStorage["emails"] = "[]"
    }

    $("body").append('\
           <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
                <div class="modal-dialog">\
                    <div class="modal-content">\
                        <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
                            <h4 class="modal-title" id="myModalLabel">Remind me</h4>\
                        </div>\
                        <div class="modal-body">\
                        <p>\
                        <label for="datetimepicker">Date: </label>\
                        <input type="text" id="datetimepicker">\
                         <span style="color: red;display: none" class="errordate">Select correct date!</span>\
                         <span style="color: red;display: none" class="blankdate">Please select date!</span>\
                        </p>\
                        </body>\
                        </html>\
                        </div>\
                            <div class="modal-footer">\
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                            <button type="button" id="Submit" class="btn btn-primary">Remind me</button>\
                                </div>\
                        </div>\
                </div>\
            </div>');

    $("#datetimepicker").datetimepicker();

    $("#datetimepicker").click(function () {
        $("#datetimepicker").val('');
        $('.errordate').hide();
        $('.blankdate').hide();

    });

    $('.close, .btn.btn-default').click(function (event) {
        $("#datetimepicker").val('');
        $('.errordate').hide();
        $('.blankdate').hide();
        window.location.hash = '#inbox'
    });

    $("#Submit").on("click", function () {
        var global = GLOBALS;

        $.get('https://mail.google.com/mail/u/0/?ui=2&ik=' + global[9] + '&rid=undefined&view=cv&th=' + document.location.hash.replace('#inbox/', '') + '&msgs=&mb=0&rt=1&search=inbox')
            .done(function (data) {
    
            })
            .fail(function (data) {

                var response = data.responseText;

                response = response.substring(response.indexOf("["), response.length);
                eval("response = " + response);


                var find = function (array, strict) {
                    var result = [];
                    for (var i in array) {
                        //console.log(typeof array[i]);
                        if (typeof array[i] === 'object') {
                            var r = find(array[i], strict);
                            result = result.concat(r);
                            continue;
                        }

                        var regex = /^<.+[\.\-].+@.+>$/;
                        if (strict === false) {
                            regex = /^<.+@.+>$/;
                        }
                        if (typeof array[i] === 'string' && array[i].match(regex) ) {
                            result.push(array[i]);
                        }
                    }
                    return result;
                }

                var ramiz = find(response);
                if (ramiz.length)
                {
                    var messageId = String(ramiz);
                }
                else {
                    var messageId = String(find(response,false));
                }


                var date = moment($("#datetimepicker").val()).utc();

                var thisMoment = moment().utc().format("YYYY MM DD, HH:mm");

                if ($("#datetimepicker").val() === "") {
                    $('.blankdate').show();
                    return;
                }
                if (date.format("YYYY MM DD, HH:mm").toString() == thisMoment || date.format("YYYY MM DD, HH:mm").toString() <= thisMoment) {
                    $('.errordate').show();
                    return;
                }
                window.location.hash = '#inbox'


                $.ajax({
                    type: "POST",
                    url: "https://mandrillapp.com/api/1.0/messages/send.json",
                    data: {
                        'key': '9vxiqDiERHop4MzWWS791Q',
                        'message': {
                            'from_email': 'ops@devana.rs',
                            'to': [
                                {
                                    'email': global[10],
                                    //'name': 'RECIPIENT NAME (OPTIONAL)',
                                    'type': 'to'
                                }

                            ],
                            "headers": {
                                "In-Reply-To": messageId
                            },
                            'autotext': 'true',

                            'subject': $('.hP').text(),
                            'html': 'This is friendly reminder from the Devana Chrome plugin. Thank you for using our product!'
                        },
                        "send_at":date.toString()
                    }
                }).done(function (response) {
                    $("#datetimepicker").val('');
                    $('#myModal').modal('hide')
                    console.log(response); // if you're into that sorta thing
                }).fail(function () {
                    $('#myModal').modal('hide')
                    $("#datetimepicker").val('');
                });
            });


    });


}
