let group = $(".group");
let form = $("#command-form");
let prepend = $(".prepend");
let lastCommand = "";
let delay = 500;
$("#browser-info").html(navigator.userAgent);
function bottom() {
  $(".window").animate({ scrollTop: $(document).height() }, 1);
  
}

$("#help").click(function () {
  $(".commandline").val("help").focus();
});

$(document).keydown(function (e) {
  if (e.keyCode == 38) {
    $(".commandline").val(lastCommand);
  }
});

let search = [
  "about",
  "help",
  "hello",
  "hi",
  "merhaba",
  "references",
  "contact",
  "blog",
  "open blog",
  "clear",
  "red",
  "green",
  "rainbow",
  "def",
  "delay 0",
  "delay 100",
  "delay 500",
  "delay def",
  "github",
  "exit",
];

$(function () {
  $(".commandline").on("keyup", function () {
    let val = $.trim(this.value);
    if (val.length < 2) {
      $("#placeholder").html("");
      return;
    }
    if (val) {
      val = val.toLowerCase();
      $.each(search, function (_, obj) {
        if (obj.toLowerCase().indexOf(val) != -1) {
          $("#placeholder").html(obj);
          $(document).keydown(function (e) {
            if (e.keyCode == 39) {
              $(".commandline").val(obj);
            }
          });
        }
      });
    }
  });
});

$(form).submit(function () {
  let input = $(".commandline").val().toLowerCase();
  lastCommand = input;
  if (input == "") {
    return;
  }

  let notfound =
    "<p>>> Girdiğiniz komut anlaşılamadı. Girebileceğiniz komutları öğrenmek için 'help' yazabilirsiniz.";
  let help =
    "<p>>> Bu sayfada aşağıdaki komutları kullanabilirsiniz <br>-hello / hi / merhaba  -> Merhaba<br> -about  -> Hakkımda Detaylı Bilgiler<br>-references  -> Referanslarım<br>-contact   -> İletişim Bilgilerim<br>-blog  -> Blog Sayfam<br>-open blog  -> Blog Sayfamı Açar<br>-clear  -> Sayfayı Temizler<br>-green -> Rengi Yeşil Olarak Değiştirir<br>-red -> Rengi Kırmızı Olarak Değiştirir<br>-rainbow -> Rengi Rainbow Effect İle Değiştirir<br>-def -> Rengi Varsayılan Olarak Değiştirir<br>-delay 0 -> Gecikmeyi Kaldırır<br>-delay 100 -> Gecikmeyi 100ms Düşürür<br>-delay def -> Gecikmeyi Varsayılan Olarak Değiştirir<br>-Üst Yön Tuşu   -> Bir Önceki Girdiğiniz Komutu Getirir<br>-github   -> Projeyi GitHub'da Açar<br>-exit   -> Sekmeyi kapatır</p>";
  let about =
    "<p>>> Ben Buğra, 26 yaşındayım. Bursa'da ikamet etmekteyim. Uluslararası web projeleri ile online freelance hizmet veriyorum. Yaklaşık 10 yıl önce ilk web projemi gerçekleştirdim. Uzun yıllar boyunca amatör olarak web geliştirme ile uğraştım ancak son 5 yıldır profesyonel seviyede işler üretiyorum. Benimle birlikte hayal ettiğiniz web sitesini gerçeğe dönüştürebiliriz. Sizin fikirlerinize uygun olarak adım adım ilerleyen bir hizmet anlayışıyla çalışırım. Güncel teknolojiler ile kullanımı basit, tüm cihazlara uyumlu, arama motoru dostu, profesyonel web sitesi sahibi olmak isterseniz doğru yerdesiniz.</p>";
  let blog =
    "<br>>> <a target='_blank' href='https://blog.bugra.work'>Blog için tıklayınız.</a><br>";
  let contact =
    "<br>>> <a href='mailto:bugraskl@gmail.com'>Mail Adresim: bugraskl@gmail.com</a> <br>";
  let references =
    "<p><br><a target='_blank' href='https://arquistudiointeriors.com/'>Arqui Studio</a><br><a target='_blank' href='https://isigimozelegitim.com/'>Işığım Özel Eğitim</a><br><a target='_blank' href='https://revizyonmarket.com/'>Revizyon Market</a><br><a target='_blank' href='https://buluttanrisever.com/'>Kişisel Blog</a><br><a target='_blank' href='https://besisiklimlendirme.com.tr/'>Besis İklimlendirme</a><br><a target='_blank' href='https://rgsteknoloji.com.tr/'>RGS Teknoloji</a><br><a target='_blank' href='https://lotusatik.com/'>Lotus Atık</a><br><a target='_blank' href='https://wiouniform.com/'>Wio Uniform</a><br><a target='_blank' href='https://ilmetal.com/'>İLMETAL</a><br> </p>";
  prepend.append("<br>-" + input + "..");
  form.trigger("reset");
  setTimeout(function () {
    switch (input) {
      case "help":
        prepend.append(help);

        break;
      case "open blog":
        prepend.append("<br>>>Blog açılıyor...");
        setTimeout(function () {
          window.open("https://blog.bugra.work", "_blank");
          prepend.append("<br>>>Blog açıldı.");
        }, 1000);

        break;
      case "github":
        prepend.append("<br>>>GitHub projesi açılıyor...");
        setTimeout(function () {
          window.open("https://github.com/bugraskl/cmd-portfolio", "_blank");
          prepend.append("<br>>>GitHub projesi açıldı.");
        }, 1000);

        break;
      case "references":
        prepend.append(references);
        break;
      case "clear":
        prepend.html("");
        break;
      case "about":
        prepend.append(about);
        break;
      case "blog":
        prepend.append(blog);
        break;
      case "contact":
        prepend.append(contact);
        break;
      case "def":
        $(".window-inside").css("color", "#aeaeae");
        $(".commandline").css("color", "#aeaeae");
        break;
      case "green":
        $(".window-inside").css("color", "#7FFF00");
        $(".commandline").css("color", "#7FFF00");
        break;
      case "red":
        $(".window-inside").css("color", "#FF0000");
        $(".commandline").css("color", "#FF0000");
        break;
      case "rainbow":
        $(".window-inside").css("color", "transparent");
        $(".commandline").css("color", "transparent");
        $(".window-inside").addClass("rainbow");
        $(".commandline").addClass("rainbow");
        break;
      case "delay 0":
        delay = 0;
        prepend.append("<br>Gecikme 100ms Olarak Ayarlandı.");
        break;
      case "delay 100":
        delay = 100;
        prepend.append("<br>Gecikme 100ms Olarak Ayarlandı.");
        break;
      case "delay def":
        prepend.append("<br>Gecikme 500ms Olarak Ayarlandı.");
        delay = 500;
        break;
      case "exit":
        prepend.append("<br>Konsol kapatılıyor..");
        window.top.close();
        break;
      case "hello":
        prepend.append(
          '<br>Merhaba sevgili ziyaretçim, ben Buğra. Sana daha iyi yardımcı olabilmem için "help" komutunu kullanabilirsin.'
        );
        break;
      case "hi":
        prepend.append(
          '<br>Merhaba sevgili ziyaretçim, ben Buğra. Sana daha iyi yardımcı olabilmem için "help" komutunu kullanabilirsin.'
        );
        break;
      case "merhaba":
        prepend.append(
          '<br>Merhaba sevgili ziyaretçim, ben Buğra. Sana daha iyi yardımcı olabilmem için "help" komutunu kullanabilirsin.'
        );
        break;
      default:
        prepend.append(notfound);
    }
    bottom();
  }, delay);
});

$(function () {
  $("#draggable").draggable();
});
