<!doctype html>

<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?>> <!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<title><?php wp_title(''); ?></title>

		<!-- Google Chrome Frame for IE -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<!-- mobile meta -->
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<!-- icons & favicons -->
		<?php $template_directory_uri = get_template_directory_uri(); ?>
		<link rel="apple-touch-icon" href="<?php echo $template_directory_uri; ?>/library/images/apple-icon-touch.png">
		<link rel="icon" href="<?php echo $template_directory_uri; ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo $template_directory_uri; ?>/favicon.ico">
		<![endif]-->
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo $template_directory_uri; ?>/library/images/win8-tile-icon.png">

  	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php wp_head(); ?>

		<!-- Drop Google Analytics here -->
		<!-- end analytics -->

	</head>

	<body <?php body_class(); ?>>
		
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>

	<div class="off-canvas-wrap">
		<div class="inner-wrap">
			<div id="container">

				<header class="header" role="banner">

					<div id="inner-header" class="row">
						
						<?php get_template_part( 'partials/nav', 'offcanvas' ); ?>
						
						<div id="branding" class="large-12 columns">
							<h1 id="logo"><?php bloginfo('name'); ?></h1>
							
							<div id="social-follow-widgets">
								<div class="fb-like" data-href="https://facebook.com/omegaconVA" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>
								
								<script type="text/javascript" src="https://apis.google.com/js/platform.js"></script>
								<div class="g-follow" data-annotation="bubble" data-height="20" data-href="//plus.google.com/u/0/108459089226316214541" data-rel="publisher"></div>
								
								<a href="https://twitter.com/omegaconVA" class="twitter-follow-button" data-show-count="true" data-show-screen-name="false" data-lang="en">Follow</a>
								<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
							</div>
							
							<div id="dates" class="branding-centered">
								August 15 - 17 at <a id="venue-logo" title="Main Street Arena" href="http://www.mainstarena.com" target="_blank">Main Street Arena</a> in Charlottesville
							</div>
							
							<div id="header-ctas" class="branding-centered">
								<a id="volunteer-cta" title="Volunteer staff get free admission!" class="header-cta" href="/volunteer">Volunteer</a>
								<a id="vendor-cta" title="Book a booth to sell your merchandise in our vending area" class="header-cta" href="/vendors">Vendors</a>
								<a id="sponsor-cta" title="Make a donation to keep ticket costs low!" class="header-cta" href="/sponsor">Sponsor</a>
								<a id="tournaments-cta" title="Compete in tournaments with fabulous prizes!" class="header-cta" href="/tournaments">Tournaments</a>
							</div>
						</div>

						 <?php // get_template_part( 'partials/nav', 'topbar' ); ?>

						 <?php // get_template_part( 'partials/nav', 'offcanvas-sidebar' ); ?>

						<!-- You only need to use one of the above navigations.
							 Offcanvas-sidebar adds a sidebar to a "right" offcanavas menus. -->

					</div> <!-- end #inner-header -->

				</header> <!-- end header -->