<?php
/**
 * @file
 * gsb_feature_chute_fpp.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function gsb_feature_chute_fpp_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_metadata|fieldable_panels_pane|chute|form';
  $field_group->group_name = 'group_metadata';
  $field_group->entity_type = 'fieldable_panels_pane';
  $field_group->bundle = 'chute';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Metadata',
    'weight' => '3',
    'children' => array(
      0 => 'field_chute_campaign_id',
      1 => 'field_chute_id',
      2 => 'field_chute_name',
      3 => 'field_chute_environment',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Metadata',
      'instance_settings' => array(
        'required_fields' => 0,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_metadata|fieldable_panels_pane|chute|form'] = $field_group;

  return $export;
}
