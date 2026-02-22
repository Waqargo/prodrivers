"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  window.Contact =
  /*#__PURE__*/
  function () {
    function Contact() {
      _classCallCheck(this, Contact);
    }

    _createClass(Contact, [{
      key: "setTimeDefaultFirst",
      value: function setTimeDefaultFirst() {
        var text;
        text = $('input#time-input').val();

        if (text !== '時間を指定してください。' && text.length === 5) {
          $('#timeform select[name=time-hour] option[value="' + text.split(':')[0] + '"]').prop('selected', true);
          return $('#timeform select[name=time-mins] option[value="' + text.split(':')[1] + '"]').prop('selected', true);
        }
      }
    }, {
      key: "setTimeFromModaal",
      value: function setTimeFromModaal() {
        $('input#time-input').val($('#timeform select[name=time-hour]').val() + ":" + $('#timeform select[name=time-mins]').val());
        $('#time-input-text').html($('#timeform select[name=time-hour]').val() + ":" + $('#timeform select[name=time-mins]').val());
        return $('#time-input-text').removeClass('error');
      }
    }, {
      key: "setDate",
      value: function setDate(datedata) {
        var date, datestr, day, mon;
        datestr = datedata;

        if (jQuery.type(datedata) !== 'string') {
          date = new Date(datedata.select);

          if (date.toString() === "Invalid Date") {
            return;
          }

          mon = date.getMonth() + 1;

          if (mon < 10) {
            mon = "0" + mon;
          }

          day = date.getDate();

          if (day < 10) {
            day = "0" + day;
          }

          datestr = "" + date.getFullYear() + "-" + mon + "-" + day;
          $('#date-input-text').html(datestr);
          return $('#date-input-text').removeClass('error');
        }
      }
    }, {
      key: "winclose",
      value: function winclose() {
        var e;
        $('#spinner').hide();

        try {
          Custombox.modal.close();
        } catch (error1) {
          // IEだとなぜかエラーになるので回避 @FIXME
          e = error1;
        } // do nothing


        return $.PD.redirect('/business/contact_complete.html');
      }
    }, {
      key: "sendMail",
      value: function sendMail() {
        var address1, address2, body, city, content, email, postalcode, pref, prefix, ride_number, subject;
        $('#spinner').show();
        prefix = '[テスト]';

        if (document.domain === 'p-drivers.com') {
          prefix = '';
        }

        subject = prefix + '【ProDrivers法人お見積り】 ' + $('#name').val() + '様';
        email = $('#mailaddress').val();
        postalcode = '';
        pref = '';
        city = '';
        address1 = '';
        address2 = '';
        ride_number = '';
        content = '';

        if ($('#postalcode').val() !== '') {
          ({
            postalcode: $('#postalcode').val()
          });
        }

        if ($('#pref').val() !== '') {
          ({
            pref: $('#pref').val()
          });
        }

        if ($('#city').val() !== '') {
          ({
            city: $('#city').val()
          });
        }

        if ($('#address1').val() !== '') {
          ({
            address1: $('#address1').val()
          });
        }

        if ($('#address2').val() !== '') {
          ({
            address2: $('#address2').val()
          });
        }

        if ($('#ride_number').val() !== '') {
          ({
            ride_number: $('#ride_number').val()
          });
        }

        if ($('#content').val() !== '') {
          ({
            content: $('#content').val()
          });
        }

        body = "\u4E0B\u8A18\u5185\u5BB9\u3067\u304A\u898B\u7A4D\u4F9D\u983C\u3092\u53D7\u3051\u4ED8\u3051\u307E\u3057\u305F\u3002\n---------------------------------\n\u4F1A\u793E\u540D: ".concat($('#company').val(), "\n\u304A\u540D\u524D: ").concat($('#name').val() + " " + $('#name-mei').val(), "\n\u96FB\u8A71\u756A\u53F7: ").concat($('#phoneNumber').val(), "\n\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9: ").concat($('#mailaddress').val(), "\n\u51FA\u767A\u5730\u70B9: ").concat($('#pickup').val(), "\n\u76EE\u7684\u5730 : ").concat($('#dropoff').val(), "\n\u5229\u7528\u65E5 : ").concat($('input[name="_submit"]').val(), "\n\u4E57\u8ECA\u4EBA\u6570 : ").concat($('#ride_number').val(), "\n\u304A\u652F\u6255\u3044\u65B9\u6CD5: ").concat($("[name=payment]:checked").val(), "\n\u5099\u8003: ").concat($('#content').val(), "\n---------------------------------\n\u304A\u554F\u3044\u5408\u308F\u305B\u3044\u305F\u3060\u304D\u307E\u3057\u305F\u5185\u5BB9\u3092\u78BA\u8A8D\u306E\u4E0A\u3001\u62C5\u5F53\u3088\u308A\u3054\u9023\u7D61\u3044\u305F\u3057\u307E\u3059\u306E\u3067\u3001\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002"); // body = """
        // 下記内容でお見積依頼を受け付けました。
        // ---------------------------------
        // 会社名: #{$('#company').val()}
        // お名前: #{$('#name').val()}
        // 電話番号: #{$('#tel').val()}
        // メールアドレス: #{$('#mailaddress').val()}
        // 郵便番号: #{postalcode}
        // 都道府県: #{pref}
        // 市区町村: #{city}
        // 番地: #{address1}
        // 建物名: #{address2}
        // 乗車場所: #{$('#pickup').val()}
        // 降車場所: #{$('#dropoff').val()}
        // ご乗車予定人数: #{$('#ride_number').val()}
        // お支払い方法: #{$("[name=payment]:checked").val()}
        // 備考: #{$('#content').val()}
        // ---------------------------------
        // お問い合わせいただきました内容を確認の上、担当よりご連絡いたしますので、しばらくお待ちください。
        // """

        console.log(body); // _trick.js 内にある sendMail関数 を呼び出す

        return $.PD.sendMail(subject, body, email).then(function () {
          console.log('success sendmail');
          window.contact.winclose();
        }, function (error) {
          alert('申し訳ありません。問い合わせ送信中にエラーが発生しました。' + error.message);
        });
      }
    }]);

    return Contact;
  }();

  $(function () {
    var _datepicker, address, date;

    window.contact = new window.Contact(); // set modaal page

// Locate this in your business_contact.js
$('.confirm').modaal({
    type: 'confirm',
    confirm_title: "送信確認",
    confirm_content: "この内容で送信をしてよろしいですか？",
    confirm_button_text: "送信する",
    confirm_cancel_button_text: "キャンセル",
    confirm_callback: function confirm_callback() {
        // This is the "Bridge" to your Express Server
        // It finds your <form id="contact"> and sends it to your route
        document.getElementById("contact").submit(); 
    }
});
    $("#contact-form").validate({
      submitHandler: function submitHandler(form) {
        if ($("#agree-policy").prop('checked')) {
          $("#confirmbtn").click();
        } else {
          $("#policy-error").show();
        }

        return false;
      }
    });
    date = new Date();
    date.setDate(date.getDate() + 3);

    if ($.PD.isIE()) {
      $('#date-input').datepicker({
        dateFormat: "yy-mm-dd",
        onSelect: function onSelect(dateText, inst) {
          return window.contact.setDate(dateText);
        }
      });
    } else {
      _datepicker = $('#date-input').pickadate({
        min: date,
        onSet: function onSet(datedata) {
          return window.contact.setDate(datedata);
        }
      });
    } // popup datepicker when user clicks buttons


    $('#select-day').on('click', function (event) {
      var picker;
      $('#date-input-error').hide();

      if ($.PD.isIE()) {
        $('#date-input').datepicker('show');
      } else {
        picker = $('#date-input').first().pickadate("picker");

        if (picker.get('open')) {
          picker.close();
        } else {
          picker.open(false);
        }
      }

      event.stopPropagation();
    });
    $("#select-time").modaal({
      content_source: '#timepicker',
      type: 'inline',
      width: 340,
      after_open: window.contact.setTimeDefaultFirst
    });
    $("#close-timepicker").on('click', function () {
      window.contact.setTimeFromModaal();
      return $("#select-time").modaal('close');
    });
    $("#cancel-timepicker").on('click', function () {
      return $("#select-time").modaal('close');
    }); // postalcode

    address = {};
    address['#pref'] = '%3';
    address['#city'] = '%4%5';
    $('#postalcode').jpostal({
      postcode: ['#postalcode'],
      address: address
    }); // ポリシーに同意

    $("#agree-policy").change(function (evt) {
      $("#policy-error").toggle(!evt.target.checked);
    }); // メールアドレスを半角に変換する

    $("#mailaddress").focusout(function () {
      $("#mailaddress").val($("#mailaddress").val().replace(/−/g, "-").replace(/[Ａ-Ｚａ-ｚ０-９＠．]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      }));
    }); // 電話番号を半角数字に変更する

    return $('#tel').focusout(function () {
      $('#tel').val($('#tel').val().replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      }).replace(/[-−]/g, ''));
    });
  });
}).call(void 0);