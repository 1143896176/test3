layui.checked_HasValue = function (jquery, checkedName, msg) {
    var arr = new Array();
    jquery("input:checkbox[name=" + checkedName + "]:checked").each(function () {
        arr.push(jquery(this).val());
    });
    if (arr.length > 0) {
        var val = arr.join(',');
        return val;
    }
    layer.msg(msg, {icon: 5,anim: 6});
    return false;
}