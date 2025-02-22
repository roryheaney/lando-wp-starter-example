<?php

namespace Roots\Sage\Assets;

/**
 * Get paths for assets
 */
function asset_path($filename) {
	$dist_path = get_template_directory_uri() . '/public/';
	$directory = dirname($filename) . '/';
	$file = basename($filename);

	return $dist_path . $directory . $file;
}
