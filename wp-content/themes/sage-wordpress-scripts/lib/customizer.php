<?php

namespace Roots\Sage\Customizer;

use Roots\Sage\Assets;

/**
 * Add postMessage support
 */
function customize_register($wp_customize)
{
	$wp_customize->get_setting('blogname')->transport = 'postMessage';
}
add_action('customize_register', __NAMESPACE__ . '\\customize_register');

if (class_exists('GFCommon')) {
	//plugin is activated, do something
	// stop view count on gravity forms, causing rds spikes
	add_filter('gform_disable_view_counter', '__return_true');
}
