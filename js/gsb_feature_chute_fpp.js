(function ($) {
  Drupal.behaviors.gsbFeatureChuteFPP = {
    attach: function (context) {
      // Wait for the form to show up.
      var timer = setInterval(function() {
        if ($(':input[name="field_link_single[und][0][url]"]').length) {
          // Only add the icon if it doesn't already exist.
          if (!$('span.chute-url-icon').length) {
            // Add icon for validation.
            $(':input[name="field_link_single[und][0][url]"]').after('<span class="chute-url-icon chute-invalid-url"></span>');
          }

          // Validate the url on load.
          Drupal.gsbFeatureChuteFPP.validate($(':input[name="field_link_single[und][0][url]"]').val());

          // Check for keyup in url field
          $(':input[name="field_link_single[und][0][url]"]').keyup(function(e) {

            // Make sure the url is valid
            Drupal.gsbFeatureChuteFPP.validate($(this).val());
          });
          clearInterval(timer);
        }
      }, 1000);
    }
  }

  Drupal.gsbFeatureChuteFPP = Drupal.gsbFeatureChuteFPP || {};

  Drupal.gsbFeatureChuteFPP.validate = function (url) {
    var valid = false;
    if (url.indexOf('admin.getchute.com/#/campaigns/') > 0 && url.indexOf('/displays/') > 0) {

      // Get chute id
      var data = url.split('/displays/');

      // Check to see if we get a valid response from that url.
      $.ajax({
        url: "http://s3.amazonaws.com/store.getchute.com/" + data[1],
        async: false,
        dataType: 'json',
        success: function( data ) {
          valid = true;
        }
      });
    }

    // Toggle the icon depending if the url was valid or not.
    if (valid) {
      $('span.chute-url-icon').removeClass('chute-invalid-url').addClass('chute-valid-url');
    }
    else {
      $('span.chute-url-icon').addClass('chute-invalid-url').removeClass('chute-valid-url');
    }
  }
})(jQuery);
