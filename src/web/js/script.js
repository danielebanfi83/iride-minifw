/**
 * Created by Daniele on 01/06/16.
 */

(function($) {
    $.fn.saveForm = function (options) {
        var defaults = {
            route: "/",
            materializeContext: true, //TODO For later implementations
            onCompleteCallback: null,
            onBeforeSubmitCallback: true,
            formName: "form1"
        };

        var settings = $.extend({}, defaults, options );

        this.click(function () {
            iwFormSubmit(settings.route, true, settings.onCompleteCallback, settings.onBeforeSubmitCallback, settings.formName);
        });
    };
    
    $.fn.iwLogin = function (route) {
        this.click(function () {
            return iwFormSubmit(route, false, function (res, json) {
                if(!res) return false;
                window.location.href = "/home";

                return true;
            });
        });
    };
    
    $.fn.iwLogout = function (route) {
        this.click(function () {
            $.ajax({
                url: route,
                type: "get",
                dataType: "json",
                success: function () {
                    window.location.href = "/";
                }
            });    
        });
        
    };
    
    function iwFormSubmit(route, saveInDb, onCompleteCallback, onBeforeSubmitCallback, formName){
        if(saveInDb == null) saveInDb = false;
        if(formName == null) formName = "form1";
        var opts = {
            beforeSubmit: function () {
                $(".btnFormSubmit").prop("disabled", true);
                $(".preloader-wrapper").addClass( "active" );
                if(typeof onBeforeSubmitCallback === "function") onBeforeSubmitCallback();
            },
            success: function (json) {
                var ret = json.ret;
                if(json.csrf_result == "FAILED") Materialize.toast("Bad Request. Please refresh the page", 4000, "toast_error");
                if(ret)
                {
                    Materialize.toast("Success", 4000, "toast_success");
                    $("#id").val(json.id);
                    if(typeof onCompleteCallback === "function") onCompleteCallback(true, json);
                }
                else
                {
                    Materialize.toast(json.msg, 4000, "toast_error");
                    if(typeof onCompleteCallback === "function") onCompleteCallback(false, json);
                }
                $(".preloader-wrapper").removeClass( "active" );
                $(".btnFormSubmit").prop("disabled", false);
                $("#"+json.csrfNameKey).val(json.csrfName);
                $("#"+json.csrfValueKey).val(json.csrfValue);
            },
            url: route,
            type: "post",
            data: {OP_FROM_AJAX: saveInDb ? 1 : 0},
            dataType: "json"
        };

        $("#"+formName).off("submit").on("submit", function (event) {
            event.preventDefault();
            $(this).ajaxSubmit(opts);
            return true;
        }).submit();
    }
})(jQuery);