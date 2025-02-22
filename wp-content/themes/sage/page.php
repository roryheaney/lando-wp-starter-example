<?php
// use Roots\Sage\Extras;
// Extras\pretty_r($var);
$postID = $post->ID;
?>
<?php while (have_posts()) : the_post(); ?>
	<?php get_template_part('template-parts/page', 'header'); ?>
	<?php get_template_part('template-parts/post-types/content', 'page'); ?>
<?php endwhile; ?>


<?php
	//
	// *** This is so we can dynamically load ACF flexible content sections without specifically calling them out individually.
	//
	// get main content
	// if ( have_rows( 'body_flexible_content', $postID ) ) :
	// 	$count = 0;
	// 	// loop through the selected ACF layouts and display the matching partial
	// 	while ( have_rows( 'body_flexible_content', $postID ) ) : the_row();
	// 		// increase counter per loop
	// 		// count will be put on the href
	// 		$count++;
	// 		get_template_part( 'template-parts/flexible-content/' . get_row_layout(), null, array(
	// 			'index' => $count
	// 		) );

	// 	endwhile;

	// elseif ( get_the_content() ) :
	// 	// no layouts found
	// 	echo 'Select A layout';
	// endif;
?>
<!-- OR -->
<?php
// if ( have_rows( 'body_flexible_content' ) ) {
// 	$block_index = 0;
// 	while ( have_rows( 'body_flexible_content' ) ) {
// 		the_row();
// 		$block_index++;
// 		$data = get_row( true ); // render fields with $data - $data['field_name_here'] // logisteed reference
// 		include __DIR__ . '/template-parts/flexible-content/' . get_row_layout() . '.php';
// 	}
// }
