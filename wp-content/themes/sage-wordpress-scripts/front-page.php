<?php
// use Roots\Sage\Extras;
// Extras\pretty_r($var);
?>
<div class="">
	<div class="box"></div>
	<div id="card-example" class=""></div>
</div>

<!-- lazy load example markup, first el is a lazyload background,
	second is a lazyload image, images must have a placeholder image in place for ADA
	third is a responsive lazyload image with multiple images
-->
<div class="lazyload" data-bgset="<?php // image url here?>"></div>

<img class="img-fluid lazyload" data-src="<?php // image url here?>" src="<?= get_template_directory_uri(); ?>/public/images/interchange-placeholder.png" alt="">

<picture>
	<source
		media="(max-width: 1023px)"
		data-srcset="<?php // image url here?>"
		srcset="<?= get_template_directory_uri(); ?>/public/images/interchange-placeholder.png" />
	<source
		data-srcset="<?php // image url here?>"
		srcset="<?= get_template_directory_uri(); ?>/public/images/interchange-placeholder.png" />
	<img
		alt=""
		class="lazyload img-fluid"
		src="<?= get_template_directory_uri(); ?>/public/images/interchange-placeholder.png"/>
</picture>
<!-- end lazy load example markup -->
<section class="container">
	<div class="row">
		<div class="col p-0 mb-5">

			<div id="bsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false" data-js="carousel-accessibility">
				<ol class="carousel-indicators align-items-center">
					<li data-bs-target="#bsCarousel" data-bs-slide-to="0" class="active">
						<span class="visually-hidden">
							<span data-js="update-indicator-text">current slide is</span>Slide 1
						</span>
					</li>
					<li data-bs-target="#bsCarousel" data-bs-slide-to="1">
						<span class="visually-hidden"><span data-js="update-indicator-text"></span>Slide 2</span>
					</li>
					<li data-bs-target="#bsCarousel" data-bs-slide-to="2">
						<span class="visually-hidden"><span data-js="update-indicator-text"></span>Slide 2</span>
					</li>
					<li class="carousel__play-pause">
						<button aria-label="pause carousel" data-js="pause-play-carousel" class="bs-carousel__play-pause">
							<i class="bi bi-play-fill" aria-hidden="true" data-js="play-pause-icon"></i>
						</button>
					</li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="https://via.placeholder.com/1920x1080" class="d-block w-100" alt="...">
					</div>
					<div class="carousel-item" aria-hidden="true" tabindex="-1">
						<img src="https://via.placeholder.com/1920x1080" class="d-block w-100" alt="...">
					</div>
					<div class="carousel-item" aria-hidden="true" tabindex="-1">
						<img src="https://via.placeholder.com/1920x1080" class="d-block w-100" alt="...">
					</div>
				</div>
				<button class="carousel-control-prev" href="#bsCarousel" role="button" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" href="#bsCarousel" role="button" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>

		</div>
	</div>
</section>

<section class="container">
	<div class="row">
		<div class="col p-0 mb-5">

			<div id="bsCarousel2" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false" data-js="carousel-accessibility">
				<ol class="carousel-indicators align-items-center">
					<li data-bs-target="#bsCarousel2" data-bs-slide-to="0" class="active">
						<span class="visually-hidden">
							<span data-js="update-indicator-text">current slide is</span>Slide 1
						</span>
					</li>
					<li data-bs-target="#bsCarousel2" data-bs-slide-to="1">
						<span class="visually-hidden"><span data-js="update-indicator-text"></span>Slide 2</span>
					</li>
					<li data-bs-target="#bsCarousel2" data-bs-slide-to="2">
						<span class="visually-hidden"><span data-js="update-indicator-text"></span>Slide 2</span>
					</li>
					<li class="carousel__play-pause">
						<button aria-label="pause carousel" data-js="pause-play-carousel" class="bs-carousel__play-pause">
							<i class="bi bi-play-fill" aria-hidden="true" data-js="play-pause-icon"></i>
						</button>
					</li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="https://via.placeholder.com/1920x1080" class="d-block w-100" alt="...">
					</div>
					<div class="carousel-item" aria-hidden="true" tabindex="-1">
						<img src="https://via.placeholder.com/1920x1080" class="d-block w-100" alt="...">
					</div>
					<div class="carousel-item" aria-hidden="true" tabindex="-1">
						<img src="https://via.placeholder.com/1920x1080" class="d-block w-100" alt="...">
					</div>
				</div>
				<button class="carousel-control-prev" href="#bsCarousel2" role="button" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" href="#bsCarousel2" role="button" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>

		</div>
	</div>
</section>

<section class="container mb-5 pb-md-4">
	<div class="row">
		<div class="col">
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<li class="nav-item" role="presentation">
					<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
				</li>
			</ul>
			<div class="tab-content" id="myTabContent">
				<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">1...</div>
				<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">2...</div>
				<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">3...</div>
			</div>
		</div>
	</div>
</section>

<div class="container">
	<div class="row">
		<div class="col">
		<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
			Button with data-bs-target
			</button>

			<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
				<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body">
				<div>
				Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
				</div>
				<div class="dropdown mt-3">
				<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
					Dropdown button
				</button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
				</div>
			</div>
			</div>
		</div>
	</div>
</div>

<section class="container mb-5 pb-md-4">
	<div class="row">
		<div class="col">
			<!-- Button trigger modal -->
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
					Launch demo modal
				</button>

				<!-- Modal -->
				<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								...
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button type="button" class="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
		</div>
	</div>
	<div class="row">
		<div class="col text-center">
			<h2>
				This is an intro title
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula viverra, semper neque a, porta velit. Integer nulla elit, placerat id orci et, feugiat ultrices justo. Sed ornare tincidunt augue, a varius est condimentum a. Vivamus mattis pulvinar odio, vitae bibendum quam efficitur id. Aliquam elementum, urna commodo pretium ultricies, velit nisi blandit orci, eu finibus metus nisl in ipsum. Donec vestibulum felis mauris, et porta eros dictum ac. Pellentesque congue nisi metus, nec maximus turpis ultrices vitae. Sed luctus purus quis nulla porttitor pellentesque. Fusce mauris sem, fringilla eu malesuada eu, faucibus eget lorem.
			</p>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<form autocomplete="off">
				<div class="row">
					<div class="col">
						<input type="text" class="form-control" placeholder="First name" aria-label="First name">
					</div>
					<div class="col">
						<input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
					</div>
				</div>
				<div class="mb-3">
					<label for="email1" class="form-label">Email address</label>
					<input type="email" class="form-control" id="email1" aria-describedby="emailHelp" autocomplete="off">
					<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div class="mb-3">
					<label for="password1" class="form-label">Password</label>
					<input type="password" class="form-control" id="password1">
				</div>
				<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1">
					<label class="form-check-label" for="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		</div>
	</div>
</section>

<section class="container mb-5 pb-md-4">
	<div class="row align-items-center">
		<div class="col-sm-12 col-md-6 order-1 order-md-2 mb-3 mb-md-0">
			<img class="d-block w-100" src="https://via.placeholder.com/750x500" alt="First slide">
		</div>
		<div class="col-sm-12 col-md-6 order-2 order-md-1">
			<h2>
				Alternating Content
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula viverra, semper neque a, porta velit. Integer nulla elit, placerat id orci et, feugiat ultrices justo. Sed ornare tincidunt augue, a varius est condimentum a. Vivamus mattis pulvinar odio, vitae bibendum quam efficitur id. Aliquam elementum, urna commodo pretium ultricies, velit nisi blandit orci, eu finibus metus nisl in ipsum. Donec vestibulum felis mauris, et porta eros dictum ac. Pellentesque congue nisi metus, nec maximus turpis ultrices vitae. Sed luctus purus quis nulla porttitor pellentesque. Fusce mauris sem, fringilla eu malesuada eu, faucibus eget lorem.
			</p>
		</div>
	</div>
</section>

<section class="container mb-5 pb-md-4">
	<div class="row align-items-center">
		<div class="col-sm-12 col-md-6 mb-3 mb-md-0">
			<img class="d-block w-100" src="https://via.placeholder.com/750x500" alt="First slide">
		</div>
		<div class="col-sm-12 col-md-6">
			<h2>
				Alternating Content
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula viverra, semper neque a, porta velit. Integer nulla elit, placerat id orci et, feugiat ultrices justo. Sed ornare tincidunt augue, a varius est condimentum a. Vivamus mattis pulvinar odio, vitae bibendum quam efficitur id. Aliquam elementum, urna commodo pretium ultricies, velit nisi blandit orci, eu finibus metus nisl in ipsum. Donec vestibulum felis mauris, et porta eros dictum ac. Pellentesque congue nisi metus, nec maximus turpis ultrices vitae. Sed luctus purus quis nulla porttitor pellentesque. Fusce mauris sem, fringilla eu malesuada eu, faucibus eget lorem.
			</p>
		</div>
	</div>
</section>

<section class="container mb-5 pb-md-4">
	<div class="row align-items-center">
		<div class="col-sm-12 col-md-6 order-1 order-md-2 mb-3 mb-md-0">
			<img class="d-block w-100" src="https://via.placeholder.com/750x500" alt="First slide">
		</div>
		<div class="col-sm-12 col-md-6 order-2 order-md-1">
			<h2>
				Alternating Content
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula viverra, semper neque a, porta velit. Integer nulla elit, placerat id orci et, feugiat ultrices justo. Sed ornare tincidunt augue, a varius est condimentum a. Vivamus mattis pulvinar odio, vitae bibendum quam efficitur id. Aliquam elementum, urna commodo pretium ultricies, velit nisi blandit orci, eu finibus metus nisl in ipsum. Donec vestibulum felis mauris, et porta eros dictum ac. Pellentesque congue nisi metus, nec maximus turpis ultrices vitae. Sed luctus purus quis nulla porttitor pellentesque. Fusce mauris sem, fringilla eu malesuada eu, faucibus eget lorem.
			</p>
		</div>
	</div>
</section>

<section class="container mb-5 pb-md-5">
	<div class="row align-items-start text-center">
		<div class="col-sm-12 col-md-4">
			<h2>
				Reason 1
			</h2>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula viverra, semper neque a, porta velit. Integer nulla elit, placerat id orci et, feugiat ultrices justo. Sed ornare tincidunt augue
		</div>
		<div class="col-sm-12 col-md-4">
			<h2>
				Reason 2
			</h2>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula viverra, semper neque a, porta velit. Integer nulla elit, placerat id orci et, feugiat ultrices justo. Sed ornare tincidunt augue
		</div>
		<div class="col-sm-12 col-md-4">
			<h2>
				Reason 3
			</h2>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula viverra, semper neque a, porta velit. Integer nulla elit, placerat id orci et, feugiat ultrices justo. Sed ornare tincidunt augue
		</div>
	</div>
</section>
