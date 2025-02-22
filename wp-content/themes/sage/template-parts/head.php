<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<?php
		$common_css_time = filemtime(get_stylesheet_directory() . '/public/styles/common.css');
	?>

	<link rel="preload" href="<?= get_template_directory_uri(); ?>/public/vendor/jquery-migrate.js" as="script">
	<link rel="preload" href="<?= get_template_directory_uri(); ?>/public/vendor/jquery.js" as="script">
	<link rel="preload" href="<?= get_template_directory_uri() . '/public/styles/common.css?ver=' .$common_css_time; ?>" as="style">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
	<?php wp_head(); ?>

</head>
