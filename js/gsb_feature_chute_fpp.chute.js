(function ($) {
  Drupal.behaviors.gsbFeatureChuteFPPChute = {
    attach: function (context) {
      // Find all chute panes
      $('.gsb-feature-chute-fpp-placeholder:not(.gsb-feature-chute-fpp-placeholder-processed)', context).addClass('gsb-feature-chute-fpp-placeholder-processed').each(function() {
        // Get some values from the placeholder.
        var id = $(this).data('chute-id');
        var name = $(this).data('chute-name');
        var campaign_id = $(this).data('chute-campaign-id');

        // Need the pane id so we can use this in our non jquery code.
        var paneID = $(this).closest('div[id^="panels-ipe-paneid-"]').attr('id');

        /**
         *  This section needs to be pure javascript or it won't load the
         *  javascript.
         */
        // Create the image element and add it to the page.
        var image = document.createElement('img');
        image.src = 'http://pixel.getchute.com/?dID=' + id + '&cID=' + campaign_id + '&eTp=view_served';
        image.setAttribute('style', 'wdith:0; height:0');
        document.getElementById(paneID).getElementsByClassName('gsb-feature-chute-fpp-placeholder')[0].appendChild(image);

        // Create the script element and add it to the page.
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'http://static.getchute.com/display-runners/' + name + '/' + name + '.js';
        script.setAttribute('data-chute-' + name, 'http://s3.amazonaws.com/store.getchute.com/' + id);
        document.getElementById(paneID).getElementsByClassName('gsb-feature-chute-fpp-placeholder')[0].appendChild(script);

      });
    }
  }

})(jQuery);
