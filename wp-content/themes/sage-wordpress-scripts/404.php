<?php
// use Roots\Sage\Extras;
// Extras\pretty_r($var);
?>

<div class="container pt-5 pb-5">
	<div class="row">
		<div class="col">
			<?php get_template_part('template-parts/page', 'header'); ?>

			<div class="alert alert-warning">
				<?php _e('Sorry, but the page you were trying to view does not exist.', 'sage'); ?>
			</div>
			<?php get_search_form(); ?>
		</div>
	</div>
</div>
