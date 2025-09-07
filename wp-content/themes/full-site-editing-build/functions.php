<?php

/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package fancy-squares-base
 * @since 1.0.0
 */

/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */
function fancy_squares_base_styles()
{
	wp_enqueue_style(
		'fancy-squares-base-style',
		get_stylesheet_uri(),
		[],
		wp_get_theme()->get('Version')
	);
}
add_action('wp_enqueue_scripts', 'fancy_squares_base_styles');

function fancy_squares_theme_enqueue_scripts()
{
	// Helper function to load asset file data
	$load_asset_file = function ($entry) {
		$asset_file = get_template_directory() . "/dist/js/{$entry}.assets.php";
		if (file_exists($asset_file)) {
			return include $asset_file;
		}
		return ['dependencies' => [], 'version' => null];
	};

	// Enqueue main JS
	$main_asset = $load_asset_file('main');
	wp_enqueue_script(
		'my-theme-main',
		get_template_directory_uri() . '/dist/js/main.js',
		$main_asset['dependencies'], // Load dependencies from main.assets.php
		$main_asset['version'] ?: filemtime(get_template_directory() . '/dist/js/main.js'), // Use asset version or filemtime
		true
	);

	// Enqueue CSS (assuming main.css is output; adjust if using a different CSS file)
	wp_enqueue_style(
		'my-theme-style',
		get_template_directory_uri() . '/dist/css/style.css',
		'', // Load style dependencies, if any
		filemtime(get_template_directory() . '/dist/css/style.css') // Use asset version or filemtime
	);

	// Uncomment the following lines to include Bootstrap 5 from CDN
	// wp_enqueue_script(
	// 	'bs5',
	// 	'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
	// 	'',
	// 	'',
	// 	true
	// );
}
add_action('wp_enqueue_scripts', 'fancy_squares_theme_enqueue_scripts');

function fancy_squares_admin_enqueue_scripts()
{
	// Helper function to load asset file data
	$load_asset_file = function ($entry) {
		$asset_file = get_template_directory() . "/dist/js/{$entry}.assets.php";
		if (file_exists($asset_file)) {
			return include $asset_file;
		}
		return ['dependencies' => [], 'version' => null];
	};
	$admin_asset = $load_asset_file('admin');
	wp_enqueue_script(
		'logisteed-admin-js',
		get_theme_file_uri() . '/dist/js/admin.js',
		$admin_asset['dependencies'], // Load dependencies from admin.assets.php
		$admin_asset['version'] ?: filemtime(get_template_directory() . '/dist/js/admin.js'), // Use asset version or filemtime
		true
	);


	// Enqueue CSS (assuming main.css is output; adjust if using a different CSS file)
	wp_enqueue_style(
		'logisteed-admin-style',
		get_theme_file_uri() . '/dist/css/style.css',
		'', // Load style dependencies, if any
		filemtime(get_template_directory() . '/dist/css/style.css') // Use asset version or filemtime
	);


	// Uncomment the following lines to include Bootstrap 5 from CDN
	// wp_enqueue_script(
	// 	'bs5',
	// 	'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
	// 	'',
	// 	'',
	// 	true
	// );
}
add_action('enqueue_block_assets', 'fancy_squares_admin_enqueue_scripts');


add_action('enqueue_block_assets', 'fancy_squares_admin_enqueue_scripts');

// Uncomment the following lines to add excerpts support for 'service' post type
// add_action('init', 'fancy_squares_add_excerpts_to_pages');
// function fancy_squares_add_excerpts_to_pages()
// {
// 	add_post_type_support('service', 'excerpt');
// }
