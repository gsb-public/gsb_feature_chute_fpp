<?php
/**
 * @file
 * gsb_feature_chute_fpp.fieldable_panels_pane_type.inc
 */

/**
 * Implements hook_default_fieldable_panels_pane_type().
 */
function gsb_feature_chute_fpp_default_fieldable_panels_pane_type() {
  $export = array();

  $fieldable_panels_pane_type = new stdClass();
  $fieldable_panels_pane_type->disabled = FALSE; /* Edit this to true to make a default fieldable_panels_pane_type disabled initially */
  $fieldable_panels_pane_type->api_version = 1;
  $fieldable_panels_pane_type->name = 'chute';
  $fieldable_panels_pane_type->title = 'Chute';
  $fieldable_panels_pane_type->description = '';
  $export['chute'] = $fieldable_panels_pane_type;

  return $export;
}
