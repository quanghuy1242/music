$(document).ready(function () {

    $("form[name='dnhap']").validate({
      rules : {
        tendangnhap: {
          required : true,
        },
        password : {
          required : true,
          minlength: "8"
        }
      },
      messages : {
        tendangnhap: {
          required : "Tên đăng nhập không được để trống!",
        },
        password : {
          required : "Mật khẩu không được để trống!!",
          minlength: "Mật khẩu có ít nhất 8 kí tự"
        }
      },
      submitHandler : function(form) {
        var mnw = window.open("","KetQua");
        mnw.document.write("==========================================================================<br>");
        mnw.document.write("Tên đăng nhập: " + $("#tendangnhap").val() + "<br>");
        mnw.document.write("Mật khẩu: " + $("#password").val() + "<br>");
        window.open("../../index.html","_self");
        // form.submit();
      },
      wrapper : 'span',
      errorPlacement: function (error, element) {
          error.insertAfter(element);
      }
    });
  
    $("form[name='dki']").validate({
      rules:{
        tendangki: "required",
        email: {
          email:true,
          required:true
        },
        ngay: {
          min: 1,
          max: 31,
          required:true,
          digits: true
        },
        nam: {
          required:true,
          digits: true
        },
        pass: {
          required:true,
          minlength: 8
        },
        repass: {
          equalTo: "#pa",
          required:true
        },
        dieukhoan: "required"
      },
      messages:{
        tendangki: "Tên đăng kí không được để trống!",
        email: "Email phải có dạng abc@email.com",
        ngay: {
          min: "Ngày sinh phải nằm trong khảong 1 - 31 !",
          max: "Ngày sinh phải nằm trong khảong 1 - 31 !",
          required:"Ngày sinh không được để trống!",
          digits: "Ngày phải là một số!"
        },
        nam: {
          required:"Năm sinh không được để trống",
          digits: "Năm phải là một số!"
        },
        pass: {
          required:"Mật khẩu không để trống!",
          minlength: "Mật khẩu có ít nhất 8 kí tự"
        },
        repass: {
          equalTo: "Mật khẩu không trùng khớp!",
          required:"Mật khẩu không để trống!"
        },
        dieukhoan: "Vui lòng click để chấp nhận điều khoản!"
      },
      submitHandler : function(form) {
        var mnw = window.open("","KetQua");
        mnw.document.write("==========================================================================<br>");
        mnw.document.write("Tên đăng kí: " + $("#tendangki").val() + "<br>");
        mnw.document.write("Mật khẩu: " + $("#pa").val() + "<br>");
        mnw.document.write("Ngày sinh: " + $("#ngay").val() + "/" + $("#chonthang").val() + "/" + $("#nam").val() + "<br>");
        mnw.document.write("Email: " + $("#email").val() + "<br>");
        mnw.document.write("Phái: " + $("input[type=radio]:checked").val() + "<br>");
        window.open("../../index.html","_self");
      },
      // wrapper : 'span',
      errorPlacement: function (error, element) {
          error.insertAfter(element);
      }
    });
  
  });