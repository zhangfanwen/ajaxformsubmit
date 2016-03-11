
function ajaxFormSubmit(param) {
    param.stopPropagation(), param.preventDefault();
    target = param.data.target;
    var beforepost = window[param.data.beforepost];
    if (beforepost && isFunc(beforepost) && beforepost(target)==false) return;
    if (localStorage.isSubmiting == 1) {
        alertMessage("处理中请稍候", "error");
        return;
    }
    afterpost = window[param.data.afterpost];    

    localStorage.isSubmiting = 1;
    $.ajax({
    type: "POST",
    dataType: "json",
    url: $(param.target).data('url'),
    data: $(target).serialize(),
    success: function(retdata) {
        if (0 === retdata.result) {
            if (retdata.msg) alertMessage(retdata.msg, "success");
            else if (retdata.url) document.location.href = retdata.url;
            else if (retdata.data["function"]) {
                var func = window[retdata.data["function"]];
                "function" == typeof func && func.apply(null, retdata.data.arguments)
            } 
        } else alertMessage(retdata.msg, "error");
        localStorage.isSubmiting = 0;
        if (afterpost && isFunc(afterpost)) afterpost(retdata);
    },
    error: function() {
        localStorage.isSubmiting = 0;
    }
    });
}

function alertMessage(msg, msgtype) {
    switch (msgtype) {
        case "success":
            // may want to change alerting style
            alert(msg);
            break;
        case "error":
            // may want to change alerting style
            alert(msg);
            break;
    }
}

function isFunc(func){
    return typeof func == 'function';
}