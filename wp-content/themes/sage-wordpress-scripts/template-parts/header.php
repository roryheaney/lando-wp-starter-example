<header class="banner header-block">
	<a class="header-block__skip-link visually-hidden-focusable" href="#main-el">Skip to main content</a>

	<nav class="navbar navbar-expand-lg">
		<div class="container">
			<a class="navbar-brand" href="<?= esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<?php
				wp_nav_menu([
					'theme_location'  => 'primary_navigation',
					'container'       => 'div',
					'container_id'    => 'navbarSupportedContent',
					'container_class' => 'collapse navbar-collapse',
					'menu_id'         => false,
					'menu_class'      => 'navbar-nav ms-auto mb-2 mb-lg-0 main-menu',
					'depth'           => 2,
					'fallback_cb'     => 'bs5navwalker::fallback',
					'walker'          => new bs5navwalker()
				]);
			?>
		</div>
	</nav>
</header>
