var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbz21z8VIK2WOM1lmE567aV-xDgLYJ6Za0vLUkaP8Gk94XLHyC0k/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success: function() {
         window.location.href="takkfyrir.html"
      }
});
  })


