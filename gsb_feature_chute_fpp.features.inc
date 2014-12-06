<?php
/**
 * @file
 * gsb_feature_chute_fpp.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function gsb_feature_chute_fpp_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "fieldable_panels_panes" && $api == "fieldable_panels_pane_type") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}
