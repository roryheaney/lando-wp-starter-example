<?php

namespace Roots\Sage\Setup;

use Roots\Sage\Assets;

/**
 * Theme setup
 */
function setup()
{
	// Make theme available for translation
	// Community translations can be found at https://github.com/roots/sage-translations
	load_theme_textdomain('sage', get_template_directory() . '/lang');

	// Enable plugins to manage the document title
	// http://codex.wordpress.org/Function_Reference/add_theme_support#Title_Tag
	add_theme_support('title-tag');

	// Register wp_nav_menu() menus
	// http://codex.wordpress.org/Function_Reference/register_nav_menus
	register_nav_menus([
		'primary_navigation' => __('Primary Navigation', 'sage')
	]);

	// Enable post thumbnails
	// http://codex.wordpress.org/Post_Thumbnails
	// http://codex.wordpress.org/Function_Reference/set_post_thumbnail_size
	// http://codex.wordpress.org/Function_Reference/add_image_size
	add_theme_support('post-thumbnails');

	// Enable post formats
	// http://codex.wordpress.org/Post_Formats
	//   add_theme_support('post-formats', ['aside', 'gallery', 'link', 'image', 'quote', 'video', 'audio']);

	// Enable HTML5 markup support
	// http://codex.wordpress.org/Function_Reference/add_theme_support#HTML5
	add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form']);

	// Use main stylesheet for visual editor
	// To add custom styles edit /assets/styles/layouts/_tinymce.scss
	// add_editor_style(Assets\asset_path('styles/common.css'));
}
add_action('after_setup_theme', __NAMESPACE__ . '\\setup');

/**
 * Register sidebars
 */
function widgets_init()
{
	register_sidebar([
		'name'          => __('Primary', 'sage'),
		'id'            => 'sidebar-primary',
		'before_widget' => '<section class="widget %1$s %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>'
	]);

	register_sidebar([
		'name'          => __('Footer', 'sage'),
		'id'            => 'sidebar-footer',
		'before_widget' => '<section class="widget %1$s %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>'
	]);
}
add_action('widgets_init', __NAMESPACE__ . '\\widgets_init');

/**
 * Determine which pages should NOT display the sidebar
 */
function display_sidebar()
{
	static $display;

	isset($display) || $display = !in_array(true, [
		// The sidebar will NOT be displayed if ANY of the following return true.
		// @link https://codex.wordpress.org/Conditional_Tags
		is_404(),
		is_front_page(),
		is_page_template('template-custom.php'),
	]);

	return apply_filters('sage/display_sidebar', $display);
}

/**
 * Theme assets
 */
function assets()
{

	// comments
	if (is_single() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}

	/**
	 * CSS Files
	 */

	// common css
	$common_css_time = filemtime(get_stylesheet_directory() . '/public/styles/common.css');
	wp_enqueue_style('sage/css', Assets\asset_path('styles/common.css'), false, $common_css_time);

	/**
	 * JS Files
	 */
	// bootstrap 5 CDN
	wp_enqueue_script('bs5', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', '', '', true);

	// common js
	$common_js_time = filemtime(get_stylesheet_directory() . '/public/scripts/common.js');
	wp_enqueue_script('sage/js', Assets\asset_path('scripts/common.js'), ['jquery'], $common_js_time, true);

	// home js
	if (is_front_page()) {
		$home_js_time = filemtime(get_stylesheet_directory() . '/public/scripts/home.js');
		wp_enqueue_script('home/js', Assets\asset_path('scripts/home.js'), ['jquery'], $home_js_time, true);
	}

	// vue js
	// $vue_js_time = filemtime(get_stylesheet_directory() . '/public/scripts/vue.js');
	// wp_enqueue_script('sage/vue', Assets\asset_path('scripts/vue.js'), ['jquery'], $vue_js_time, true);
}
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\assets', 100);

/**
 *  make jpeg quality 100 be default, smush after
 */
add_filter('jpeg_quality', function ($arg) {
	return 100;
});


// rest thumbnail size
update_option('thumbnail_size_w', 585);
update_option('thumbnail_size_h', 585);

// rest medium size
update_option('medium_size_w', 960);
update_option('medium_size_h', 960);

// reset medium_large size
// update_option('medium_large_size_w',1024);
// update_option('medium_large_size_h',1024);

// rest large size
update_option('large_size_w', 1260);
update_option('large_size_h', 1260);

// Disable specific image sizes
function disable_extra_image_sizes()
{
	// Remove medium_large size
	update_option('medium_large_size_w', 0);
	update_option('medium_large_size_h', 0);

	// Return false for the big image threshold to disable 1536px and 2048px sizes
	add_filter('big_image_size_threshold', '__return_false');
}
add_action('after_setup_theme', __NAMESPACE__ . '\\disable_extra_image_sizes');


// Prevent registration of other image sizes
function remove_custom_sizes($sizes)
{
	// Only allow these sizes
	$allowed_sizes = ['thumbnail', 'medium', 'large'];
	foreach (array_keys($sizes) as $size) {
		if (!in_array($size, $allowed_sizes)) {
			unset($sizes[$size]);
		}
	}
	return $sizes;
}
add_filter('intermediate_image_sizes_advanced', __NAMESPACE__ . '\\remove_custom_sizes');
