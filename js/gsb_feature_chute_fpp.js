(function ($) {
  Drupal.behaviors.gsbFeatureChuteFPP = {
    attach: function (context) {

      // Check for keyup in url field
      $(':input[name="field_link_single[und][0][url]"]').keyup(function(e) {

        // Make sure the url is valid
        var url = $(this).val();
        if (url.indexOf('admin.getchute.com/#/campaigns/') > 0 && url.indexOf('/displays/') > 0) {

          // Get campaign id and chute id
          var split1 = url.split('/campaigns/');
          var data = split1[1].split('/displays/');

          // Set the values of the fields.
          $(':input[name="field_chute_id[und][0][value]"]').val(data[1]);
          $(':input[name="field_chute_campaign_id[und][0][value]"]').val(data[0]);

          // Get the name from the json file on the server.
          $.getJSON("http://s3.amazonaws.com/store.getchute.com/" + data[1], function( data ) {
            // Set the name field value.
            $(':input[name="field_chute_name[und][0][value]"]').val(data.runner);
          });
        }
      });
    }
  }
})(jQuery);
