// $(document).ready(function () {


//    var gmsrc = document.createElement('script');
//    gmsrc.src = "https://localhost/global.js";
//    document.getElementsByTagName('body')[0].appendChild(gmsrc);


    // init();

    // setInterval(addButtonToGmail, 100);
    // setInterval(checkForEmail, 1000);

    // // setTimeout(function() {

    // // var glb = global();

    // // var text = $.get('https://mail.google.com/mail/u/0/?ui=2&ik='+glb[9]+'&rid=undefined&view=cv&th='+document.location.hash.replace('#inbox/', '')+'&msgs=&mb=0&rt=1&search=inbox',function(data) {} );

    // // console.log(text);
    // // },1000);




// });

window.onload = function () {

	var gmsrc = document.createElement('script');
    gmsrc.src = "//code.jquery.com/jquery-2.1.1.min.js";
    document.getElementsByTagName('body')[0].appendChild(gmsrc);
	var done = false;

	gmsrc.onload = gmsrc.onreadystatechange = function() {
    if ( !done && (!this.readyState ||
            this.readyState === "loaded" || this.readyState === "complete") ) {
        done = true;

		var aq = document.createElement('script');
		aq.src = "https://localhost/bootstrap.js";
		document.getElementsByTagName('body')[0].appendChild(aq);

		var bq = document.createElement('script');
		bq.src = "https://localhost/jquery.datetimepicker.js";
		document.getElementsByTagName('body')[0].appendChild(bq);

		var cq = document.createElement('script');
		cq.src = "https://localhost/moment.js";
		document.getElementsByTagName('body')[0].appendChild(cq);

		var jq = document.createElement('script');
		jq.src = "https://localhost/inject.js";
	    document.getElementsByTagName('body')[0].appendChild(jq);


        // Handle memory leak in IE
        gmsrc.onload = gmsrc.onreadystatechange = null;
        // if ( head && gmsrc.parentNode ) {
            // head.removeChild( gmsrc );
        // }
    }
};




}


// function addButtonToGmail() {

    // $('.xY.a4W').css("width", "50%");


    // $('table.F.cf.zt tr').each(function () {

        // var $this = $(this);
        // if ($this.find('.dropdown-menu').length > 0 || $this.find('.dReply').length > 0 || $this.find('.dForward').length > 0 || $this.find('.dArchive').length > 0 || $this.find('.dSchedule').length > 0) {
            // return;
        // }

        // $($this).find(' td:nth-child(5)').find('div:nth-child(2)').append('\
        // <span style="float: right">\
        // <button class="dReply" title="Reply">R</button>\
        // <button class="dForward" title="Forward">F</button>\
        // <button class="dArchive" title="Archive">A</button>\
        // <button class="dSchedule" title="Schedule">S</button>\
        // </span>\
        // ');

        // // On button "R" events
        // $this.find('.dReply').on('click', function (event) {
            // event.stopPropagation();
            // console.log(event);
            // $this.click();
            // $('.ams').each(function () {
                // var text = $(this).text();
                // if (text === 'Reply') {
                    // $(this).click();
                // }
            // });
        // });

        // // On button "F" Forward events
        // $this.find('.dForward').on('click', function (event) {
            // event.stopPropagation();

            // $this.click();
            // $('.ams').each(function () {
                // var text = $(this).text();
                // if (text === 'Forward') {
                    // $(this).click();
                // }
            // });
        // });


        // // On button "A" events
        // $this.find('.dArchive').on('click', function (event) {
            // event.stopPropagation();
            // $this.find('[role="checkbox"]').click();

            // setTimeout(function () {
                // $('.T-I.J-J5-Ji').each(function () {
                    // if ($(this).attr('title') === 'Archive' || $(this).data('tooltip') === 'Archive' ||
                        // $(this).attr('aria-label') === 'Archive') {
                        // fireEvent(this, 'mousedown');
                        // fireEvent(this, 'mouseup');
                    // }
                // });
            // }, 100);


        // });

        // // On button "S" LookInto events
        // $this.find('.dSchedule').on('click', function (event) {

            // $('#myModal').modal();

        // });
    // });

// }

// function fireEvent(obj, evt) {
    // var fireOnThis = obj;
    // if (document.createEvent) {
        // var evObj = document.createEvent('MouseEvents');
        // evObj.initEvent(evt, true, false);
        // fireOnThis.dispatchEvent(evObj);
    // }
// }

// function checkForEmail() {


    // if (localStorage["emails"] != '[]') {
        // var listScheduledEmails = JSON.parse(localStorage["emails"]);

        // for (index = 0; index < listScheduledEmails.length; index++) {

            // if (moment().isAfter(localStorage.getItem(listScheduledEmails[index]))) {

                // window.location.hash = '#all/' + listScheduledEmails[index];

                // var $this = $('.iH').find('.T-I.J-J5-Ji.aFj.T-I-ax7.L3');
                // fireEvent($this[0], 'mousedown');
                // fireEvent($this[0], 'mouseup');

                // var that = $('.iH').find('.T-I.J-J5-Ji.ar7.nf.T-I-ax7.L3');
                // fireEvent(that[0], 'mousedown');
                // fireEvent(that[0], 'mouseup');

                // var there = $('.J-N-Jz');
                // there.each(function () {
                    // if (this.innerText == "Mark as unread") {
                        // fireEvent(this, 'mousedown');
                        // fireEvent(this, 'mouseup');

                        // fireEvent(this, 'mousedown');
                        // fireEvent(this, 'mouseup');
                    // }
                // });

                // listScheduledEmails.splice(index, 1);
                // window.scheduledEmails = null;
                // localStorage["emails"] = JSON.stringify(listScheduledEmails);
                // window.location.hash = '#inbox';

            // }
        // }


    // }


// }

// function init() {
    // var emailId;
    // var scheduledEmails;

    // if (localStorage["emails"] == null) {
        // localStorage["emails"] = "[]"
    // }

    // var script = document.createElement('script');
    // script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";
    // document.getElementsByTagName('head')[0].appendChild(script);

    // $("body").append('\
           // <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
                // <div class="modal-dialog">\
                    // <div class="modal-content">\
                        // <div class="modal-header">\
                            // <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
                            // <h4 class="modal-title" id="myModalLabel">Remind me</h4>\
                        // </div>\
                        // <div class="modal-body">\
                        // <p>\
                        // <label for="datetimepicker">Date: </label>\
                        // <input type="text" id="datetimepicker">\
                         // <span style="color: red;display: none" class="errordate">Select correct date!</span>\
                         // <span style="color: red;display: none" class="blankdate">Please select date!</span>\
                        // </p>\
                        // </body>\
                        // </html>\
                        // </div>\
                            // <div class="modal-footer">\
                            // <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                            // <button type="button" id="Submit" class="btn btn-primary">Remind me</button>\
                                // </div>\
                        // </div>\
                // </div>\
            // </div>');

    // $("#datetimepicker").datetimepicker();

    // $("#datetimepicker").click(function () {
        // $('.errordate').hide();
        // $('.blankdate').hide();
    // });

    // $('.close, .btn.btn-default').click(function (event) {
        // $('.errordate').hide();
        // $('.blankdate').hide();
        // window.location.hash = '#inbox'
    // });

    // $("#Submit").on("click", function () {

        // $("#datetimepicker").val();

        // var date = moment($("#datetimepicker").val());

        // var date = date.format("YYYY MM DD, hh:mm");

        // var thisMoment = moment().format("YYYY MM DD, hh:mm");

        // if ($("#datetimepicker").val() === "") {
            // $('.blankdate').show();
            // return;
        // }
        // if (date == thisMoment || date <= thisMoment) {
            // $('.errordate').show();
            // return;
        // }

        // emailId = document.location.hash.replace('#inbox/', '');
        // localStorage.setItem(emailId, moment($("#datetimepicker").val()));


        // if (window.scheduledEmails == null) {
            // window.scheduledEmails = new Array();
        // }

        // window.scheduledEmails[window.scheduledEmails.length] = emailId;
        // localStorage["emails"] = JSON.stringify(window.scheduledEmails);

        // setTimeout(function () {
            // $('.T-I.J-J5-Ji').each(function () {
                // if ($(this).attr('title') === 'Archive' || $(this).data('tooltip') === 'Archive' ||
                    // $(this).attr('aria-label') === 'Archive') {
                    // fireEvent(this, 'mousedown');
                    // fireEvent(this, 'mouseup');
                    // $('.vh').hide();
                    // $("#datetimepicker").val('');
                    // $('#myModal').modal('hide')
                // }
            // });
        // }, 100);


    // });


// }
