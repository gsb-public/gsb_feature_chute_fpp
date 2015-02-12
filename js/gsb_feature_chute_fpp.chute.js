(function ($) {
  Drupal.behaviors.gsbFeatureChuteFPPChute = {
    attach: function (context) {
      // Find all chute panes
      $('div.pane-bundle-chute:not(.gsb-feature-chute-fpp-processed)', context).addClass('gsb-feature-chute-fpp-placeholder-processed').each(function() {
        // Get the unique class for this chute pane.
        var classes = $(this).attr('class').split(' ');
        for (var i = 0; i < classes.length; i++) {
          if (classes[i].substring(0, 10) == 'pane-uuid-') {
            var uniqueClass = classes[i];
            break
          }
        }

        // Find the placeholder
        var placeholder = document.getElementsByClassName(uniqueClass)[0].getElementsByClassName('gsb-feature-chute-fpp-placeholder')[0];

        // Get some values from the placeholder.
        var id = $(placeholder).data('chute-id');
        var name = $(placeholder).data('chute-name');
        var environment = ($(placeholder).data('chute-environment')) ? $(placeholder).data('chute-environment') + '/' : '';
        var campaign_id = $(placeholder).data('chute-campaign-id');

        /**
         *  This section needs to be pure javascript or it won't load.
         */

        // Create the image element and add it to the page.
        var image = document.createElement('img');
        image.src = '//pixel.getchute.com/?dID=' + id + '&cID=' + campaign_id + '&eTp=view_served';
        image.setAttribute('style', 'wdith:0; height:0');
        placeholder.appendChild(image);

        // Create the script element and add it to the page.
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//static.getchute.com/display-runners/' + name + '/' + environment + name + '.js';
        script.setAttribute('data-chute-' + name, '//s3.amazonaws.com/store.getchute.com/' + id);
        placeholder.appendChild(script);
      });
    }
  }

})(jQuery);
