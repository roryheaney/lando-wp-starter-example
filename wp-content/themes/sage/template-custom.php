<?php
/**
 * Template Name: Custom Template
 */

// use Roots\Sage\Extras;
// Extras\pretty_r($var);
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('template-parts/page', 'header'); ?>
  <?php get_template_part('template-parts/post-types/content', 'page'); ?>
<?php endwhile; ?>
