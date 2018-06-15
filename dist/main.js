//Demo
layui.use(['form', 'laydate', 'upload', 'jquery'], function () {
    var laydate = layui.laydate;
    var $ = layui.jquery
        , upload = layui.upload;
    var form = layui.form;
    lay('.item').each(function () {
        laydate.render({
            elem: this
            , trigger: 'click',
            type: 'time'
        });
    });

    //监听提交
    /* form.on('submit(formDemo)', function (data) {
         var a = ['like[1]', 'like[2]', 'like[3]', 'like[4]'];
         for (var i = 0; i < a.length; i++) {
         if(data.field[a[i]]=='on'){

         }

             console.log(data.field[a[i]]);
         }

         console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
         console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
         console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
         return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
         layer.msg(JSON.stringify(data.field));
         return false;
     });*/
    $('h3').click(function () {
        layer.msg('不开心。。', {
            icon: 5,
            anim: 6
        });
    })

    form.verify({
        //爱好
        isLike: [/(^$)|(^[\u4E00-\u9FA5]{1,20}$)/, '爱好只能输入汉字不能有标点符号'],
        isCaiwu:[/(^$)|(^[\u4E00-\u9FA5]{1,20}$)/,'财务人姓名格式不正确请重输'],
        isCaiwuTel:[/(^$)|(^[1-9][0-9]{10}$)/,'财务联系方式'],
        //pankong
        isNull: [/(^$)|(^\d{11,12}$)/, '座机2号码格式不对请重输'],
        //检验是否带有两位小数
        isDecimal: [/^\d{1,5}\.\d{2}$/, '店铺面积整数部分最大5位，必须保留小数点后两位'],
        //校验手机位数11/12
        isTelnum: [/^[0-9][0-9]{9,10}$/, '只能输入11或12位电话号'],
        //校验手机位数11
        isTel: [/^[1-9][0-9]{10}$/, '只能输入11手机号'],
        //校验星钻等级1-5    ^[A-Za-z0-9]+$
        isFive: [/^[1-5]{1}$/, '星钻等级为1-5'],

        //校验是否是5位以内数字
        isFiveNum: [/^[1-9]\d{0,4}$/, '大厅或包间的内容格式不正确请重输'],

        //校验是否是百位以内数字
        isThree: [/^[1-9][0-9]{0,2}$/, '餐具套数范围为999-1'],
        //校验是否中文名称
        isChina: [/^[\u4E00-\u9FA5]{1,30}$/, '商户名称和后缀最多可输入30个汉字'],
        isChina2: [/^[\u4E00-\u9FA5]{1,20}$/, '最多可输入20个汉字'],
        isChina3: [/^[\u4E00-\u9FA5]{1,10}$/, '最多可输入10个汉字'],
        //校验登录密码
        isPass: [
            /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
            , '登录密码必须是6到20位英文数字混合且不能出特殊字符'
        ], merchantname: [/^[\u4E00-\u9FA5]{1,30}$/, '商户名称最多可输入30个汉字'],
        merchantsuffix: [/^[\u4E00-\u9FA5]{1,30}$/, '商户名称后缀最多可输入30个汉字'],
        area: [/^\d{1,5}\.\d{2}$/, '店铺面积整数部分最大5位，必须保留小数点后两位'],
        loginaccount: [/^[1-9][0-9]{10}$/, '登录账号只能输入11位手机号'],
        seatmachine: [/^[0-9][0-9]{10,11}$/, '餐厅座机只能输入11或12位数字'],
        head: [/^[\u4E00-\u9FA5]{1,10}$/, '餐厅负责人姓名最多可输入10个汉字'],
        headtel: [/^[0-9][0-9]{10,11}$/, '餐厅负责人电话只能输入11或12位数字'],
        legalperson: [/^[\u4E00-\u9FA5]{1,20}$/, '法人姓名最多可输入20个汉字'],
        legaltel: [/^[1-9][0-9]{10}$/, '法人联系方式只能输入11位手机号'],
        legalider: [/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, '法人身份证号不对请重输']
    });
    //普通图片上传

    var uploadInst = upload.render({
        elem: '#test1'
        , url: '/upload/'
        , auto: true, type: 'image',
        /* bindAction: '#submit',*/
        exts: "jpg|png|gif|jpeg"//允许后缀
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#demo1').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code > 0) {
                return layer.msg('上传失败');
            }
            //上传成功
        }
        , error: function () {
            //演示失败状态，并实现重传
            var demoText = $('.demoText');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function () {
                uploadInst.upload();
            });
        }
    });

    var uploadInst2 = upload.render({
        elem: '#test2'
        , url: '/upload/'
        , auto: true, type: 'image',
        /* bindAction: '#submit',*/
        exts: "jpg|png|gif|jpeg"//允许后缀
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#demo2').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code > 0) {
                return layer.msg('上传失败');
            }
            //上传成功
        }
        , error: function () {
            //演示失败状态，并实现重传
            var demoText = $('.demoText2');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function () {
                uploadInst2.upload();
            });
        }
    });
    var uploadInst3 = upload.render({
        elem: '#test3'
        , url: '/upload/'
        , auto: true, type: 'image',
        /*
                    bindAction: '#submit',
        */
        exts: "jpg|png|gif|jpeg"//允许后缀
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#demo3').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code > 0) {
                return layer.msg('上传失败');
            }
            //上传成功
        }
        , error: function () {
            //演示失败状态，并实现重传
            var demoText = $('.demoText3');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function () {
                uploadInst3.upload();
            });
        }
    });
    var uploadInst4 = upload.render({
        elem: '#test4'
        , url: '/upload/'
        , auto: true, type: 'image',
        /* bindAction: '#submit',*/
        exts: "jpg|png|gif|jpeg"//允许后缀
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#demo4').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code > 0) {
                return layer.msg('上传失败');
            }
            //上传成功
        }
        , error: function () {
            //演示失败状态，并实现重传
            var demoText = $('.demoText4');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function () {
                uploadInst4.upload();
            });
        }
    });
    /*失去焦点判断*/
    $('.merchant-name').blur(function () {
        if (!ischina($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.merchant-suffix').blur(function () {
        if (!ischina($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.area ').blur(function () {
        if (!isDecimal($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.merchant-address ').blur(function () {
        if (!ischina4($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.login-account').blur(function () {
        if (!isTelnum($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.login-password').blur(function () {
        if (!isPass($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.seat-machine').blur(function () {
        if (!isTelnum2($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    //
    $('.seat-machine2').blur(function () {
        if (!isTelnum3($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            if ($(this).val() == '') {
                $(this).siblings('span').remove();
            } else {
                $(this).siblings('span').remove();
                $(this).after("<span style='color:green'>✔ </span>")
            }
        }
    });
    $('.head').blur(function () {
        if (!ischina2($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.head-tel').blur(function () {
        if (!isTelnum2($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.head-like').blur(function () {
        if (!ischina1($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.legal-person').blur(function () {
        if (!ischina1($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.legal-tel').blur(function () {
        if (!isTelnum($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.legal-ider').blur(function () {
        if (!isID($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.finance-name').blur(function () {
        if (!ischina1($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    $('.finance-tel').blur(function () {
        if (!isTelnum($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:red ;min-height: 36px;line-height: 36px'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span style='color:green'>✔ </span>")
        }
    });
    /*星钻等级*/
    $('.lable-warp >.layui-input-block').on('blur', '.lable', function (e) {

        if (!isFive($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span class='aa' style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span class='aa' style='color:green'>✔ </span>")
        }
    });

    /*餐具套系↓*/
    $('.select').on('blur', '.asa', function (e) {

        if ($(this).val() > 0 && $(this).val() < 999) {
            $(this).siblings('span').remove();
            $(this).after("<span class='aa' style='color:green'>✔ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span class='aa' style='color:red'>✘ </span>")

        }
    });
    /*  $('.lable-warp >.layui-input-block').on('blur', '.lable', function (e) {

          if (!isFive($(this).val())) {
              $(this).siblings('span').remove();
              $(this).after("<span class='aa' style='color:red'>✘ </span>")
          } else {
              $(this).siblings('span').remove();
              $(this).after("<span class='aa' style='color:green'>✔ </span>")
          }
      });*/

    /*桌数*/
    $('.desk-number >.layui-input-block').on('blur', '.desk', function (e) {
        if (!isFiveNum($(this).val())) {
            $(this).siblings('span').remove();
            $(this).after("<span class='aa' style='color:red'>✘ </span>")
        } else {
            $(this).siblings('.aa').remove();
            $(this).after("<span class='aa' style='color:green'>✔ </span>")
        }
    });
    $('.desk-number >.layui-input-block').on('blur', '.desk2', function (e) {
        if (!isFiveNum($(this).val())) {
            $(this).siblings('.aaa').remove();
            $(this).after("<span class='aaa' style='color:red'>✘ </span>")
        } else {
            $(this).siblings('span').remove();
            $(this).after("<span class='aaa' style='color:green'>✔ </span>")
        }
    });

    //

    //动态添加套餐数量
    $('.select .layui-unselect').click(function () {

        if ($(this).hasClass('layui-form-checked')) {
            $(this).after("<input class='asa' type=\"text\" name=\"password\" required lay-verify=\"isThree\"  placeholder=\"最大3位数\"autocomplete=\"off\" class=\"layui-input\" style=\"width: 100px;display:inline-block;height: 30px; line-height: 1.3;line-height: 30px\\9; border-width: 1px;border-style: solid;background-color: #fff; border-radius: 2px;border-color: #e6e6e6;\"maxlength=3>")
        } else {
            $(this).siblings('.asa').remove()
            $(this).siblings('.aa').remove()
        }
    });
    /*星钻*/
    $('.lable-warp>div>div:nth-child(6) ').click(function () {
        if ($(this).hasClass('layui-form-checked')) {
            $(this).after(" <input type=\"number\" name=\"title\" required lay-verify=\"isFive\" placeholder=\"请输入星钻等级1-5\"autocomplete=\"off\" class=\"layui-input lable\" style=\"display:inline-block;height:32px;width: 180px\" maxlength=\"1\">")
        } else {
            $(this).siblings('.lable').remove()
            $(this).siblings('.aa').remove()
        }
    });

    $('.frist>div>div:nth-child(4)').click(function () {
        if ($(this).hasClass('layui-form-checked')) {
            $(this).after(" <textarea name=\"desc\" placeholder=\"请输入50字以内信息\" lay-verify=\"required\" class=\"layui-textarea classify\"maxlength=\"50\" ></textarea>")
        } else {
            $(this).siblings('.classify').remove()
            $(this).siblings('.aa').remove()
        }
    });

    /*动态添加桌数后的input框*/
    $('.desk-number>div>div:nth-child(2) ').click(function () {
        if ($(this).hasClass('layui-form-checked')) {
            $(this).after(" <input type=\"number\" name=\"title\"  lay-verify=\"required|isFiveNum\" placeholder=\"请输入5位以内数字\"autocomplete=\"off\" class=\"layui-input ab desk\" style=\"display:inline-block;height:32px;width: 180px\" >")
        } else {
            $(this).siblings('.desk').remove()
            $(this).siblings('.aa').remove()
        }
    });
    $('.desk-number>div>div:nth-child(4) ').click(function () {
        if ($(this).hasClass('layui-form-checked')) {
            $(this).after(" <input type=\"number\" name=\"title\"  lay-verify=\"required|isFiveNum\" placeholder=\"请输入5位以内数字\"autocomplete=\"off\" class=\"layui-input ab desk2\" style=\"display:inline-block;height:32px;width: 180px\" >")
        } else {
            $(this).siblings('.desk2').remove()
            $(this).siblings('.aaa').remove()
        }
    });

    //检验是否带有两位小数
    function isDecimal(strValue) {
        var objRegExp = /^\d{1,5}\.\d{2}$/;
        return objRegExp.test(strValue);
    }

    //校验是否为5位数
    function isFiveNum(strValue){
        var objRegExp = /^[1-9]\d{0,4}$/;
        return objRegExp.test(strValue);
    }

    //校验手机位数11/12
    function isTelnum2(str) {
        var reg = /^[0-9]{11,12}$/;///(^$)|(^\d{11,12}$)/
        return reg.test(str);
    }
    function isTelnum3(str) {
        var reg = /(^$)|(^\d{11,12}$)/;///(^$)|(^\d{11,12}$)/
        return reg.test(str);
    }
    function isTelnum(str) {
        var reg = /^[1-9][0-9]{10}$/;
        return reg.test(str);
    }

    //校验是否中文名称
    function ischina(str) {
        var reg = /^[\u4E00-\u9FA5]{1,30}$/;
        return reg.test(str);
    }
    function ischina1(str) {
        var reg = /^[\u4E00-\u9FA5]{1,20}$/;
        return reg.test(str);
    }
    function ischina2(str) {
        var reg = /^[\u4E00-\u9FA5]{1,10}$/;
        return reg.test(str);
    }
    function ischina3(str) {
        var reg = /^[\u4E00-\u9FA5]{1,50}$/;
        return reg.test(str);
    }
    function ischina4(str) {
        var reg = /^[\u4E00-\u9FA5]{1,300}$/;
        return reg.test(str);
    }

    //校验星钻等级1-5    ^[A-Za-z0-9]+$
    function isFive(str) {
        var reg = /^[1-5]{1}$/;
        return reg.test(str);
    }

//最大三位数
    function isThree(str) {
        var reg = /^[1-9][0-9]{0,2}$/;
        return reg.test(str);
    }

    //校验身份证
    function isID(str) {
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return reg.test(str);
    }

    //校验登录密码
    function isPass(str) {
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        return reg.test(str);
    }
});

