<?php

use Roots\Sage\Setup;
use Roots\Sage\Wrapper;

// use Roots\Sage\Extras;
// Extras\pretty_r($var);
?>

<!doctype html>
<html <?php language_attributes(); ?>>
	<?php get_template_part('template-parts/head'); ?>
	<body id="body-el" <?php body_class(); ?> data-rest="<?= get_rest_url()?>" data-js="body-el">
		<!--[if IE]>
		<div class="alert alert-warning">
			<?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage'); ?>
		</div>
		<![endif]-->
		<?php
			do_action('get_header');
			get_template_part('template-parts/header');
		?>

		<main id="main-el" class="main">
			<?php include Wrapper\template_path(); ?>
		</main><!-- /.main --><!-- /.wrap -->
		<!-- /.sidebar
			<?php if (Setup\display_sidebar()) : ?>
				<aside class="sidebar">
					<?php include Wrapper\sidebar_path(); ?>
				</aside>
			<?php endif; ?>
		-->
		<?php
			do_action('get_footer');
			get_template_part('template-parts/footer');
			wp_footer();
		?>
	</body>
</html>
