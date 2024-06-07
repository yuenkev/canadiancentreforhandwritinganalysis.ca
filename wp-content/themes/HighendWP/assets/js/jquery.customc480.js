var _gsScope =
	'undefined' != typeof module && module.exports && 'undefined' != typeof global
		? global
		: this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
	'use strict';
	var t = document.documentElement,
		e = window,
		i = function (i, s) {
			var r = 'x' === s ? 'Width' : 'Height',
				n = 'scroll' + r,
				o = 'client' + r,
				a = document.body;
			return i === e || i === t || i === a
				? Math.max(t[n], a[n]) - (e['inner' + r] || Math.max(t[o], a[o]))
				: i[n] - i['offset' + r];
		},
		s = _gsScope._gsDefine.plugin({
			propName: 'scrollTo',
			API: 2,
			version: '1.7.4',
			init: function (t, s, r) {
				return (
					(this._wdw = t === e),
					(this._target = t),
					(this._tween = r),
					'object' != typeof s && (s = { y: s }),
					(this.vars = s),
					(this._autoKill = s.autoKill !== !1),
					(this.x = this.xPrev = this.getX()),
					(this.y = this.yPrev = this.getY()),
					null != s.x
						? (this._addTween(
								this,
								'x',
								this.x,
								'max' === s.x ? i(t, 'x') : s.x,
								'scrollTo_x',
								!0
						  ),
						  this._overwriteProps.push('scrollTo_x'))
						: (this.skipX = !0),
					null != s.y
						? (this._addTween(
								this,
								'y',
								this.y,
								'max' === s.y ? i(t, 'y') : s.y,
								'scrollTo_y',
								!0
						  ),
						  this._overwriteProps.push('scrollTo_y'))
						: (this.skipY = !0),
					!0
				);
			},
			set: function (t) {
				this._super.setRatio.call(this, t);
				var s = this._wdw || !this.skipX ? this.getX() : this.xPrev,
					r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
					n = r - this.yPrev,
					o = s - this.xPrev;
				this._autoKill &&
					(!this.skipX &&
						(o > 7 || -7 > o) &&
						i(this._target, 'x') > s &&
						(this.skipX = !0),
					!this.skipY &&
						(n > 7 || -7 > n) &&
						i(this._target, 'y') > r &&
						(this.skipY = !0),
					this.skipX &&
						this.skipY &&
						(this._tween.kill(),
						this.vars.onAutoKill &&
							this.vars.onAutoKill.apply(
								this.vars.onAutoKillScope || this._tween,
								this.vars.onAutoKillParams || []
							))),
					this._wdw
						? e.scrollTo(this.skipX ? s : this.x, this.skipY ? r : this.y)
						: (this.skipY || (this._target.scrollTop = this.y),
						  this.skipX || (this._target.scrollLeft = this.x)),
					(this.xPrev = this.x),
					(this.yPrev = this.y);
			},
		}),
		r = s.prototype;
	(s.max = i),
		(r.getX = function () {
			return this._wdw
				? null != e.pageXOffset
					? e.pageXOffset
					: null != t.scrollLeft
					? t.scrollLeft
					: document.body.scrollLeft
				: this._target.scrollLeft;
		}),
		(r.getY = function () {
			return this._wdw
				? null != e.pageYOffset
					? e.pageYOffset
					: null != t.scrollTop
					? t.scrollTop
					: document.body.scrollTop
				: this._target.scrollTop;
		}),
		(r._kill = function (t) {
			return (
				t.scrollTo_x && (this.skipX = !0),
				t.scrollTo_y && (this.skipY = !0),
				this._super._kill.call(this, t)
			);
		});
}),
	_gsScope._gsDefine && _gsScope._gsQueue.pop()();

var $j = jQuery.noConflict();
var search_in_menu = 0;
var $body = $j('body');
var $main_wrapper = $j('#main-wrapper');
var $doc = $j(document);
var $wind = $j(window);
var hb_open_flag = 0;
var $is_fullpage = $j('#fullpage').length ? true : false;
var $preloader = $j('#hb-preloader').length;

var main_wrapper = document.getElementById('main-wrapper');

var is_safari = false;
if (
	navigator.userAgent.indexOf('Safari') != -1 &&
	navigator.userAgent.indexOf('Chrome') == -1
) {
	is_safari = true;
}
if ($body.hasClass('page-id-323')) {
	is_safari = true;
}

var hb_js = function () {
	hb_hide_preloader_after_s();
	hb_is_mobile();
	hb_menu_init();
	hb_menu_search();
	hb_init_tooltip();
	hb_max_height_fixes();
	hb_header_dropdown();
	hb_scroll_top_init();
	hb_fit_video();
	hb_anim_content();
	hb_pagination_ajax();
	hb_masonry();
	hb_to_top_click();
	hb_side_nav_handler();
	hb_modern_search();
	hb_fancy_search();
	hb_click_forms();
	hb_like_init();
	hb_mini_contact_form();
	// hb_header_effect();
	hb_validations();
	hb_fixed_footer_init();
	hb_ajax_search();
	hb_init_lightbox();
	hb_single_blog_scripts();
	hb_init_shortcodes();
	hb_counter();
	hb_charts();
	hb_progress_bar();
	hb_contact_forms();
	hb_contact_forms_spec();
	hb_animated_contents_ready();
	hb_woo_stuff();
	hb_count_gallery_filters();
	hb_faq_filter();
	hb_delayed_mh();
	hb_smooth_scroll();
	hb_fullwidth_page();
	hb_fullscreen_image();

	highendStickyHeader();
	highendOnePageNav();
};

// Window load
window.addEventListener('load', function () {
	hb_hide_preloader();
	hb_init_standard_gallery();
	hb_init_fw_gallery();
	hb_modal_on_load();
	hb_max_height_fixes();
	hb_parallax_init();
	hb_center_vertically();
	hb_center_me();
});

// DOM ready
document.addEventListener('DOMContentLoaded', function () {
	'use strict';
	window.hb_js();
});

window.addEventListener('scroll', function () {
	highendDebounce(hb_animated_contents());
	highendDebounce(hb_counter());
	highendDebounce(hb_charts());
	highendDebounce(hb_progress_bar());
});

window.addEventListener('resize', function () {
	if (is_responsive()) {
		highendDebounce(hb_center_me());
		highendDebounce(hb_center_vertically());
		highendDebounce(hb_fixed_footer_init());
		highendDebounce(hb_max_height_fixes());
		highendDebounce(hb_fullscreen_image());
		highendDebounce(hb_parallax_init());
	}
});

/*************************** Functions ***************************/

/**
 * Debounce functions for better performance
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 *
 * @since 1.0.0
 *
 * @param  {Function} fn The function to debounce
 */
function highendDebounce(fn) {
	// Setup a timer
	var timeout;

	// Return a function to run debounced
	return function () {
		// Setup the arguments
		var context = this;
		var args = arguments;

		// If there's a timer, cancel it
		if (timeout) {
			window.cancelAnimationFrame(timeout);
		}

		// Setup the new requestAnimationFrame()
		timeout = window.requestAnimationFrame(function () {
			fn.apply(this, args);
		});
	};
}

/* Hide Preloader after 5 seconds */
function hb_hide_preloader_after_s() {
	if ($preloader) {
		setTimeout(function () {
			if (!$j('#hb-preloader').hasClass('ajax-like-initiated')) {
				$j('#hb-preloader').css('opacity', 0);
				$j('#hb-preloader').hide();
				hb_animated_contents();
			}
		}, 5000);
	}
}

/* Hide Preloader */
function hb_hide_preloader() {
	$j('#hb-preloader').css('opacity', 0);
	setTimeout(function () {
		$j('#hb-preloader').hide();
		hb_animated_contents();
	}, 600);
}

/* Check if mobile device */
function hb_is_mobile() {
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		$body.addClass('mobile mobile-device');
	}
}

/* Check if responsive is enabled */
function is_responsive() {
	if (highend_vars.responsive) {
		return true;
	}

	return false;
}

/* Check if element exists */
jQuery.exists = function (selector) {
	return $j(selector).length > 0;
};

/* Tooltip Init */
function hb_init_tooltip() {
	$body.tooltip({ selector: '[rel=tooltip]' });
}

/* Animations document is loaded */
function hb_animated_contents_ready() {
	if (!$preloader) {
		hb_animated_contents();
	}
}

/* Animations when element is visible */
function hb_animated_contents() {
	if (
		$j.exists('.hb-animate-element') &&
		$j.inviewport &&
		!$body.hasClass('mobile') &&
		!$is_fullpage
	) {
		$j('.hb-animate-element:in-viewport').each(function (e) {
			hb_animation_in_viewport($j(this));
		});
	}
}

function hb_animation_in_viewport($element) {
	if ($element.hasClass('hb-in-viewport')) {
		return;
	}

	var delay = $element.attr('data-delay');

	if (typeof delay == 'undefined' || delay == '') {
		delay = 80;
	}

	delay = parseInt(delay);

	setTimeout(function () {
		$element.addClass('hb-in-viewport');
	}, delay);
}

/* Check if is touch device */
function is_touch_device() {
	return !!('ontouchstart' in window) || !!('onmsgesturechange' in window);
}

/* FitVids initialization */
function hb_fit_video() {
	$j('.fitVids, #pp_full_res').fitVids();
}

/* SuperFish initialization */
function hb_menu_init() {
	$j('.sf-menu').superfish({
		delay: 50,
		speed: 200,
		speedOut: 100,
		autoArrows: true,
		disableHI: true,
		animation: { opacity: 'show' },
		easing: 'easeOutQuad',
	});

	// Sub Indicators for the dropdown
	if ($j('#main-nav').length && !$j('#main-nav').hasClass('sf-subbed')) {
		$j('#main-nav li').each(function () {
			$j(this).parent().addClass('sf-subbed');
			if ($j(this).find('> ul').length > 0) {
				$j(this).addClass('has-ul');
				$j(this)
					.find('> a')
					.append('<i class="icon-angle-right sf-sub-indicator"></i>');
			}
		});
	}

	// Move current language to the top
	if ($j('.language-selector').length) {
		var lang = $j('.language-selector')
			.find('.active-language .icl_lang_sel_native')
			.html();
		var lang_img = $j('.language-selector')
			.find('.active-language .lang-img')
			.html();

		if (lang !== '') {
			$j('#hb-current-lang .lang-val').html(lang);
			$j('#hb-current-lang .active-lang-img').html(lang_img);
		}
	}

	if ($j('#mobile-menu').length && $j('#mobile-menu').hasClass('interactive')) {
		$j('#mobile-menu > div > .menu-main-menu-container > li').each(function () {
			if ($j(this).find('ul').length) {
				$j(this).append(
					'<span class="open-submenu"><i class="icon-angle-down"></i></span>'
				);
			}
		});

		$j('.open-submenu').on('click', function (e) {
			if ($j(this).hasClass('active')) {
				$j(this).find('i').attr('class', 'icon-angle-down');
				$j(this).parent().find('ul').css('display', 'none');
				$j(this).removeClass('active');
			} else {
				$j(this).addClass('active');
				$j(this).find('i').attr('class', 'icon-angle-up');
				$j(this).parent().find('ul').css('display', 'block');
			}
		});
	}

	// Mobile Menu
	function show_mobile_menu() {
		$body.addClass('mobile-menu-open');

		setTimeout(function () {
			$main_wrapper.on('click', clear_mobile_menu);
		}, 500);

		// Disable Scrolling Presentation scrolling
		if ($j('#fullpage').length) {
			$j.fn.fullpage.setAllowScrolling(false);
		}
	}

	$j('#show-nav-menu, .mobile-menu-close').on('touchstart click', function (e) {
		e.preventDefault();
		if ($body.hasClass('mobile-menu-open')) {
			hide_mobile_menu();
		} else {
			show_mobile_menu();
		}
	});

	$j('#mobile-menu li a').on('click', hide_mobile_menu);

	function hide_mobile_menu() {
		$body.removeClass('mobile-menu-open');
		$main_wrapper.off('click', clear_mobile_menu);

		// Allow Scrolling Presentation scrolling again
		if ($j('#fullpage').length) {
			$j.fn.fullpage.setAllowScrolling(true);
		}
	}

	function clear_mobile_menu() {
		$body.removeClass('mobile-menu-open');
		hide_mobile_menu();
	}
}

function hb_fullwidth_page() {
	if ($j('#fullpage').length) {
		section_names = new Array();
		$light_logo_length = $j('.hb-light-logo').length;
		$is_special_header = $body.hasClass('hb-special-header-style');

		$j('.section').each(function () {
			section_names.push($j(this).attr('data-id'));
		});

		$j('#fullpage').fullpage({
			sectionsColor: [],
			anchors: section_names,
			navigation: true,
			navigationPosition: 'right',
			navigationTooltips: [],
			menu: '#menu',
			resize: false,
			loopTop: false,
			loopBottom: false,
			scrollingSpeed: 600,
			verticalCentered: true,
			easing: 'easeInOutQuad',
			autoScrolling: true,
			scrollOverflow: true,
			css3: true,

			onLeave: function (index, nextIndex, direction) {
				var i = nextIndex - 1;
				var style = $j('#fullpage .section').eq(i).attr('data-nav-color');

				if (style == 'dark') {
					$j('#fp-nav').addClass('dark-skin');

					if ($is_special_header) {
						$j('#header-inner-bg').addClass('dark-skin');
						$j('.hb-visible-logo').removeClass('hb-visible-logo');
						$j('.hb-dark-logo').addClass('hb-visible-logo');
					}
				} else {
					$j('#fp-nav').removeClass('dark-skin');

					if ($is_special_header) {
						$j('#header-inner-bg').removeClass('dark-skin');
						$j('.hb-visible-logo').removeClass('hb-visible-logo');
						$j('.hb-light-logo').addClass('hb-visible-logo');
					}
				}

				$j('#fullpage .section').eq(i).addClass('lazy-loaded');
			},
			afterLoad: function (anchorLink, index) {
				console.log(index);
				$j('#fullpage .section')
					.eq(index - 1)
					.addClass('lazy-loaded');
				var pb = $j('#fullpage .section')
					.eq(index - 1)
					.find('.hb-button.primary');
				var sb = $j('#fullpage .section')
					.eq(index - 1)
					.find('.hb-button.secondary');
				var ti = $j('#fullpage .section')
					.eq(index - 1)
					.find('h2');
				var pa = $j('#fullpage .section')
					.eq(index - 1)
					.find('p');

				var elements = new Array();
				elements.push(pb);
				elements.push(sb);
				elements.push(ti);
				elements.push(pa);

				$j.each(elements, function (index, val) {
					hb_animation_in_viewport($j(this));
				});
			},
			afterRender: function () {
				if ($j('video').length) {
					$j('video').get(0).play();
				}

				var i = 0;
				var style = $j('#fullpage .section').eq(i).attr('data-nav-color');

				if (style == 'dark') {
					$j('#fp-nav').addClass('dark-skin');

					if ($is_special_header) {
						$j('#header-inner-bg').addClass('dark-skin');
						$j('.hb-visible-logo').removeClass('hb-visible-logo');
						$j('.hb-dark-logo').addClass('hb-visible-logo');
					}
				} else {
					$j('#fp-nav').removeClass('dark-skin');

					if ($is_special_header) {
						$j('#header-inner-bg').removeClass('dark-skin');
						$j('.hb-visible-logo').removeClass('hb-visible-logo');
						$j('.hb-light-logo').addClass('hb-visible-logo');
					}
				}

				var pb = $j('#fullpage .section').eq(0).find('.hb-button.primary');
				var sb = $j('#fullpage .section').eq(0).find('.hb-button.secondary');
				var ti = $j('#fullpage .section').eq(0).find('h2');
				var pa = $j('#fullpage .section').eq(0).find('p');

				var elements = new Array();
				elements.push(pb);
				elements.push(sb);
				elements.push(ti);
				elements.push(pa);

				$j.each(elements, function (index, val) {
					hb_animation_in_viewport($j(this));
				});
			},
		});
	}
}

/* Make Elements to have equal heights */
function hb_max_height_fixes() {
	// Max Height MegaMenu
	var max;
	/*if ( $j('.main-navigation .megamenu').length && $wind.width() > 900 ){
		var element;
		var first_ul;
		var $mega_lis;

		$j('.main-navigation .megamenu').each(function() {
			element = $j(this);
			first_ul = element.find(">ul").css("display", "block");
			$mega_lis = first_ul.find('>li');
			$mega_lis.css("height", "auto");
			max = Math.max.apply(Math, $mega_lis.map(function() { return $j(this).outerHeight(); }));
			$mega_lis.css("height", max);
			first_ul.css("display", "none");
		});
	}*/

	if ($j('.hb-same-height').length && $wind.width() > 767) {
		$j('.hb-same-height').each(function () {
			var $cols = $j(this).find('.wpb_column');
			$cols.css('height', 'auto');
			max = Math.max.apply(
				Math,
				$cols.map(function () {
					return $j(this).outerHeight();
				})
			);
			$cols.css('height', max);
		});
	} else if ($wind.width() < 767) {
		$j('.hb-same-height .wpb_column').css('height', 'auto');
	}

	$j('.wpcf7-submit').on('touchstart click', function (e) {
		setTimeout(function () {
			$wind.trigger('resize');
		}, 500);
		setTimeout(function () {
			$wind.trigger('resize');
		}, 1000);
		setTimeout(function () {
			$wind.trigger('resize');
		}, 1500);
	});

	if ($j('.hb-flipbox-container').length) {
		$j('.hb-flipbox-container').each(function () {
			var front_height = $j(this)
				.find('.hb-flipbox-front .hb-flipbox-content')
				.outerHeight();
			var back_height = $j(this)
				.find('.hb-flipbox-back .hb-flipbox-content')
				.outerHeight();
			var min_height = Math.max(front_height, back_height);
			$j(this).css('min-height', min_height);
		});
	}
}

/* Delayed Max height fix */
function hb_dmh() {
	if ($j('.hb-same-height').length && $wind.width() > 767) {
		$j('.hb-same-height').each(function () {
			var $cols = $j(this).find('.hb-column');
			$cols.css('height', 'auto');
			max = Math.max.apply(
				Math,
				$cols.map(function () {
					return $j(this).outerHeight();
				})
			);
			$cols.css('height', max);
		});
	} else if ($wind.width() < 767) {
		$j('.hb-same-height .hb-column').css('height', 'auto');
	}

	hb_fixed_footer_init();
}

// Delayed Max Height
function hb_delayed_mh() {
	setTimeout(function () {
		hb_dmh();
	}, 2000);
	setTimeout(function () {
		hb_dmh();
	}, 4000);
	setTimeout(function () {
		hb_dmh();
	}, 8000);
}

/* Show dropdown menu on hover */
function hb_header_dropdown() {
	var $current;
	var $dropdown;

	$body
		.on('mouseenter', '.top-widget, .share-holder', function () {
			$dropdown = $j(this).find('.hb-dropdown-box');
			if ($dropdown.hasClass('dropdown-visible')) {
				$dropdown.removeClass('dropdown-visible');
			} else {
				$dropdown.addClass('dropdown-visible');
			}
			$current = $dropdown;
		})
		.on('mouseleave', '.top-widget, .share-holder', function () {
			$current.removeClass('dropdown-visible');
		});

	$j('.top-widget #password, .top-widget #username').keypress(function (e) {
		var keycode = event.keyCode ? event.keyCode : event.which;
		if (keycode == '13') {
			$j('#hb-login-form').submit();
		}
	});

	$j('#password-tmp, #username-tmp').keypress(function (e) {
		var keycode = event.keyCode ? event.keyCode : event.which;
		if (keycode == '13') {
			$j('#hb-login-form-tmp').submit();
		}
	});
}

/* Show Scroll Top */
function hb_scroll_top_init() {
	var win = $wind;
	(timeo = false),
		(scroll_top = $j('#to-top')),
		(set_status = function () {
			var st = win.scrollTop();
			if (st < 350) {
				scroll_top.removeClass('hb-pop-class');
			} else if (!scroll_top.is('.hb-pop-class')) {
				scroll_top.addClass('hb-pop-class');
			}
		});
	win.scroll(function () {
		highendDebounce(set_status());
	});
	set_status();
}

/* Show Menu in Search */
function hb_menu_search() {
	if ($body.hasClass('vc_editor')) return false;

	hb_side_panel_added = 0;
	var $main_nav = $j('#main-nav');
	var $search_in_header = highend_vars.search_header;
	var $cart_count = highend_vars.cart_count;
	var $cart_url = highend_vars.cart_url;
	var $side_nav_socials = $j('#side-nav-socials');

	if (
		$j('#header-inner').length &&
		$j('#header-inner').hasClass('nav-type-2') &&
		!$j('#header-inner').hasClass('centered-nav')
	) {
		if (
			$main_nav.length &&
			$body.hasClass('has-side-section') &&
			hb_side_panel_added == 0
		) {
			$main_nav.append(
				'<li id="hb-panel-opener" class="external float-right"><a class="hb-open-side-section" href="#"><i class="icon-bars"></i></a></li>'
			);
			hb_side_panel_added = 1;
		}

		if ($main_nav.length && $main_wrapper.hasClass('with-shop-button')) {
			$main_nav.append(
				'<li id="hb-cart-count" class="external float-right"><a class="hb-cart-init" href="' +
					$cart_url +
					'"><i class="hb-icon-cart"></i><span class="cart-circle-count">' +
					$cart_count +
					'</span></a></li>'
			);
		}

		if ($main_nav.length && $search_in_header == 1 && search_in_menu == 0) {
			$main_nav.append(
				'<li id="nav-search" class="external float-right"><a href="#" id="search-trigger" class="no-transition external"><i class="icon-search"></i></a></li>'
			);
			search_in_menu = 1;
		}
	} else {
		if ($main_nav.length && $search_in_header == 1 && search_in_menu == 0) {
			$main_nav.append(
				'<li id="nav-search" class="external"><a href="#" id="search-trigger" class="no-transition external"><i class="icon-search"></i></a></li>'
			);
			search_in_menu = 1;
		}

		if ($main_nav.length && $main_wrapper.hasClass('with-shop-button')) {
			$main_nav.append(
				'<li id="hb-cart-count" class="external"><a class="hb-cart-init" href="' +
					$cart_url +
					'"><i class="hb-icon-cart"></i><span class="cart-circle-count">' +
					$cart_count +
					'</span></a></li>'
			);
		}

		if (
			$main_nav.length &&
			$body.hasClass('has-side-section') &&
			hb_side_panel_added == 0
		) {
			$main_nav.append(
				'<li id="hb-panel-opener" class="external"><a class="hb-open-side-section" href="#"><i class="icon-bars"></i></a></li>'
			);
			hb_side_panel_added = 1;
		}
	}

	$j('.hb-open-side-section').on('touchstart click', function (e) {
		e.preventDefault();

		if (hb_open_flag == 0) {
			hb_gs.TweenLite.to($j('#hb-side-section'), 0.55, {
				right: '0px',
				ease: hb_gs.Power2.easeInOut,
			});
			hb_gs.TweenLite.to(
				$j('#hb-wrap, .highend-sticky-header #header-inner'),
				0.55,
				{ left: '-300px', ease: hb_gs.Power2.easeInOut }
			);
			hb_gs.TweenLite.fromTo(
				$j('#hb-modal-overlay'),
				0.55,
				{ opacity: 0 },
				{ opacity: 1, display: 'block', ease: hb_gs.Power2.easeInOut }
			);
			hb_open_flag = 1;
		} else {
			hb_gs.TweenLite.to($j('#hb-side-section'), 0.55, {
				right: '-300px',
				ease: hb_gs.Power2.easeInOut,
			});
			hb_gs.TweenLite.to($j('#hb-wrap, #header-inner'), 0.55, {
				left: '0px',
				ease: hb_gs.Power2.easeInOut,
			});
			hb_gs.TweenLite.fromTo(
				$j('#hb-modal-overlay'),
				0.55,
				{ opacity: 1 },
				{ opacity: 0, display: 'none', ease: hb_gs.Power2.easeInOut }
			);
			hb_open_flag = 0;
		}
	});

	$j('.hb-close-side-section, #hb-modal-overlay').on(
		'touchstart click',
		function (e) {
			e.preventDefault();

			if (hb_open_flag == 1) {
				hb_gs.TweenLite.to($j('#hb-side-section'), 0.55, {
					right: '-300px',
					ease: hb_gs.Power2.easeInOut,
				});
				hb_gs.TweenLite.to($j('#hb-wrap, #header-inner'), 0.55, {
					left: '0px',
					ease: hb_gs.Power2.easeInOut,
				});
				hb_gs.TweenLite.fromTo(
					$j('#hb-modal-overlay'),
					0.55,
					{ opacity: 1 },
					{ opacity: 0, display: 'none', ease: hb_gs.Power2.easeInOut }
				);
				hb_open_flag = 0;
			}
		}
	);
}

/* Add hb-transform class to the body if animations are supported */
function hb_anim_content() {
	if (!is_touch_device()) {
		$body.addClass('hb-transform');
	}
}

/* Scroll to top on click */
function hb_to_top_click() {
	$j('#to-top,.go-to-top').click(function (e) {
		e.preventDefault();
		var win = $wind;

		hb_gs.TweenMax.to(win, 0.6, {
			scrollTo: { y: 0, autoKill: true },
			ease: hb_gs.Power2.easeOut,
		});
	});
}

/* Init Masonry */
function hb_masonry() {
	var $container = $j('.masonry-holder');
	if ($container.length) {
		var $layoutMode = $container.attr('data-layout-mode');

		if ($layoutMode == 'fitRows') {
			$container.isotope({
				itemSelector: 'article',
				animationEngine: 'best-available',
				layoutMode: 'fitRows',
			});
		} else if ($layoutMode == 'masonry') {
			$container.isotope({
				itemSelector: 'article',
				animationEngine: 'best-available',
				layoutMode: 'masonry',
			});
		} else if ($layoutMode == 'straightDown') {
			$container.isotope({
				itemSelector: 'article',
				animationEngine: 'best-available',
				layoutMode: 'straightDown',
			});
		} else {
			$container.isotope({
				itemSelector: 'article',
				animationEngine: 'best-available',
				layoutMode: 'masonry',
			});
		}

		$container.imagesLoaded(function () {
			if ($layoutMode == 'fitRows') {
				$container.isotope({
					itemSelector: 'article',
					animationEngine: 'best-available',
					layoutMode: 'fitRows',
				});
			} else if ($layoutMode == 'masonry') {
				$container.isotope({
					itemSelector: 'article',
					animationEngine: 'best-available',
					layoutMode: 'masonry',
				});
			} else if ($layoutMode == 'straightDown') {
				$container.isotope({
					itemSelector: 'article',
					animationEngine: 'best-available',
					layoutMode: 'straightDown',
				});
			} else {
				$container.isotope({
					itemSelector: 'article',
					animationEngine: 'best-available',
					layoutMode: 'masonry',
				});
			}
		});
	}
}

/* Side nav handlers */
function hb_side_nav_handler() {
	if ($body.hasClass('hb-side-navigation')) {
		var $panel = $j('#hb-side-navigation');
		var hb_window_y;

		function sideNavScroll() {
			hb_window_y = $wind.scrollTop();

			if (hb_window_y > 200 && $wind.width() >= 1024) {
				$body.removeClass('transparent-side-navigation');
				$panel.removeClass('hb-transparent');
				$panel.addClass('hb-non-transparent');
				window.dispatchEvent(new Event('resize'));
			} else if (hb_window_y < 200 && $wind.width() >= 1024) {
				$body.addClass('transparent-side-navigation');
				$panel.addClass('hb-transparent');
				$panel.removeClass('hb-non-transparent');
				window.dispatchEvent(new Event('resize'));
			} else if ($wind.width() < 1024) {
				$body.removeClass('transparent-side-navigation');
				$panel.removeClass('hb-transparent');
				$panel.addClass('hb-non-transparent');
				window.dispatchEvent(new Event('resize'));
			}
		}

		// check for transparent type
		if ($body.hasClass('transparent-side-navigation')) {
			// Check on load
			sideNavScroll();

			$wind.scroll(function () {
				highendDebounce(sideNavScroll());
			});
		}

		// check if animation is enabled
		if ($body.hasClass('side-navigation-with-animation')) {
			if ($j('.hb-side-nav > li').length) {
				$wind.on('load', function () {
					hb_gs.TweenLite.to($j('.side-logo-wrapper #logo'), 0.4, {
						delay: 1,
						left: '0px',
						opacity: 1,
						ease: hb_gs.Power1.easeOut,
					});

					setTimeout(function () {
						$j(
							'.hb-side-nav > li, .side-nav-bottom-part ul li, .side-nav-bottom-text'
						).each(function (i, l) {
							hb_gs.TweenLite.to(l, 0.4, {
								delay: i * 0.12,
								left: '0px',
								opacity: 1,
								ease: hb_gs.Power1.easeOut,
							});
						});
					}, 1000);
				});
			} else {
				hb_gs.TweenLite.to($j('.side-logo-wrapper #logo'), 0.4, {
					delay: 1,
					left: '0px',
					opacity: 1,
					ease: hb_gs.Power1.easeOut,
				});
			}
		}
	}
}

/* Init Parallax for each section */
function hb_parallax_init() {
	if (
		$j('#hb-page-title.parallax').length &&
		!$body.hasClass('mobile') &&
		navigator.userAgent.match(/iPad/i) == null
	) {
		var $scroll_val;
		var $scrollTop;
		var $opac;

		// Parallax Headers
		$wind.scroll(function () {
			highendDebounce(function () {
				$scrollTop = $wind.scrollTop();
				$scroll_val = $wind.scrollTop() * 0.3;
				$scroll_val_img = $wind.scrollTop() * 0.2;

				$opac = 1 - $scrollTop / 260;

				if ($scroll_val <= 0) {
					$scroll_val = 0;
				}

				if ($scroll_val_img <= 0) {
					$scroll_val_img = 0;
				}

				if ($opac <= 0) {
					$opac = 0;
				}

				if (
					!$body.hasClass('mobile') &&
					navigator.userAgent.match(/iPad/i) == null
				) {
					hb_gs.TweenLite.to($j('.hb-image-bg-wrap'), 0, {
						y: $scroll_val_img,
						ease: hb_gs.Linear.easeNone,
						autoRound: true,
					});
					hb_gs.TweenLite.to($j('.hb-page-title, .breadcrumbs-wrapper'), 0, {
						y: $scroll_val,
						opacity: $opac,
						ease: hb_gs.Linear.easeNone,
						autoRound: true,
					});
				}
			});
		});
	}
	if (typeof revapi4 != 'undefined') {
		revapi4.bind('revolution.slide.onloaded', function (e) {
			$j('#slider-section .rev_slider_wrapper').addClass('parallax-slider');
			$j('#slider-section').addClass('parallax-slider-wrapper');
		});

		var $scroll_val;
		var $scrollTop;
		var $opac;

		// Parallax Headers
		$wind.scroll(function () {
			highendDebounce(function () {
				$scrollTop = $wind.scrollTop();
				$scroll_val = $wind.scrollTop() * 0.65;
				$scroll_val_img = $wind.scrollTop() * 0.45;

				$opac = 1 - $scrollTop / 560;

				if ($scroll_val <= 0) {
					$scroll_val = 0;
				}

				if ($scroll_val_img <= 0) {
					$scroll_val_img = 0;
				}

				if ($opac <= 0) {
					$opac = 0;
				}

				$j('#slider-section .rev_slider_wrapper').css({
					transform: 'translateY(' + $scroll_val_img + 'px)',
				});
				$j('#slider-section .rev_slider_wrapper').css({ opacity: $opac });
			});
		});
	}

	$j('.hb-parallax-wrapper').each(function () {
		$j(this).jarallax({
			speed: 0.2,
		});
	});
}

function hb_fullscreen_image() {
	var $hght = $wind.outerHeight() + 1;
	$j('.fullscreen-image').css('height', $hght + 'px');
}

/* Expand sections to full width */
function hb_fw_sections() {
	var $fwh;
	var $width = $wind.width();

	var $pad_left = '0px';
	var $pad_right = '0px';
	var $mar_left = '-50px';

	if ($main_wrapper.hasClass('hb-boxed-layout') && $width > 767) {
		if ($j('.hb-main-content').length) {
			$fwh = parseInt($j('.hb-main-content').width()) + 102;
		} else {
			$fwh = parseInt($j('.main-row').width()) + 70;
		}

		$j('.fw-section').each(function () {
			$j(this).css({
				'margin-left': $mar_left,
				'padding-left': $pad_left,
				'padding-right': $pad_right,
				'margin-right': '0px',
				width: $fwh,
				visibility: 'visible',
			});
		});
	} else {
		if ($j('.hb-main-content').length) {
			$fwh = ($width - parseInt($j('.hb-main-content').width())) / 2;
		} else {
			$fwh = ($width - parseInt($j('.main-row').width())) / 2 + 15;
		}

		if ($body.hasClass('hb-side-navigation') && $width > 1024) {
			$fwh = $fwh - 132;
			$width = $width - 265;
		}

		$j('.fw-section').each(function () {
			if ($j(this).hasClass('fw-columns')) {
				$j(this).css({
					left: -$fwh,
					width: $width + 2,
					height: 'auto',
				});
			} else {
				$j(this).css({
					'margin-left': -$fwh,
					'padding-left': $fwh,
					'padding-right': $fwh,
					visibility: 'visible',
					width: '100%',
					'margin-right': '0px',
				});
			}
		});
	}

	if ($j('.content-total-fw').length) {
		$j('.content-total-fw').each(function () {
			var $that = $j(this);
			$that.parent().css('height', $that.outerHeight());
			$that.imagesLoaded(function () {
				$that
					.parent()
					.stop()
					.animate({ height: $that.outerHeight() }, 350, 'easeOutCubic');
				$that.stop().animate({ opacity: 1 }, 350, 'easeOutCubic');
			});
		});
	}
}

/* Modern Search */
function hb_modern_search() {
	if ($body.hasClass('hb-modern-search')) {
		$search_overlay = $j('#modern-search-overlay');
		$close_search = $j('.hb-modern-search-close');
		$search_init = $j('#search-trigger');

		$close_search.on('touchstart click', function (e) {
			e.preventDefault();

			if (
				$search_overlay.length &&
				$search_overlay.hasClass('overlay-visible')
			) {
				hb_gs.TweenLite.to($search_overlay, 0.8, {
					opacity: 0,
					scale: 1.5,
					ease: hb_gs.Power3.easeOut,
					onComplete: function () {
						this.target.removeClass('overlay-visible');
					},
				});
			}
		});

		$search_init.on('touchstart click', function (e) {
			e.preventDefault();

			$search_overlay.addClass('overlay-visible');
			hb_gs.TweenLite.to($search_overlay, 0.5, {
				opacity: 1,
				scale: 1,
				ease: hb_gs.Power3.easeOut,
				onComplete: function () {},
			});
			$j('#hb-modern-search-input').focus();
		});

		$body.keyup(function (e) {
			if ($search_overlay.hasClass('overlay-visible')) {
				var keycode = event.keyCode ? event.keyCode : event.which;
				if (keycode == '27') {
					try {
						e.preventDefault();
					} catch (x) {
						//Non-IE
						e.returnValue = false;
					} //IE

					hb_gs.TweenLite.to($search_overlay, 0.5, {
						opacity: 0,
						scale: 1.5,
						ease: hb_gs.Power3.easeOut,
						onComplete: function () {
							this.target.removeClass('overlay-visible');
						},
					});
				}
			}
		});
	}
}

/* Fancy Search in header */
function hb_fancy_search() {
	var $open_flag = false;
	var $header_inner = $j('#header-inner');
	$j('#nav-search, #close-fancy-search').click(function (e) {
		e.preventDefault();

		if ($body.hasClass('hb-modern-search')) {
			return false;
		} else {
			if (!$open_flag) {
				$j('#fancy-search #s').val('');
				if ($header_inner.hasClass('nav-type-2')) {
					$j('#main-nav, #sticky-shop-button').stop(true, false).hide();
				} else {
					$j('#logo, #main-nav, #sticky-shop-button').stop(true, false).hide();
				}
				$j('#fancy-search').fadeIn(300);
				$j('#fancy-search-form #s').focus();
				$body.addClass('fancy-s-open');
				$open_flag = true;
			} else {
				$j('#fancy-search').hide();
				$j('#fancy-search #s').blur();
				$j('#logo, #main-nav, #sticky-shop-button')
					.stop(true, false)
					.fadeIn(300);
				$body.removeClass('fancy-s-open');
				$open_flag = false;
			}
		}
	});

	$doc.mouseup(function (e) {
		var $container = $j('#fancy-search');
		if (
			!$container.is(e.target) &&
			$container.has(e.target).length === 0 &&
			$open_flag
		) {
			$j('#close-fancy-search').trigger('click');
		}
	});

	$doc.keyup(function (e) {
		if ($j('#fancy-search').is(':visible') && e.keyCode == 27) {
			$j('#close-fancy-search').trigger('click');
		}

		if (hb_open_flag == 1 && e.keyCode == 27) {
			hb_gs.TweenLite.to($j('#hb-side-section'), 0.55, {
				right: '-300px',
				ease: hb_gs.Power2.easeInOut,
			});
			hb_gs.TweenLite.to($j('#hb-wrap, #header-inner'), 0.55, {
				left: '0px',
				ease: hb_gs.Power2.easeInOut,
			});
			hb_gs.TweenLite.fromTo(
				$j('#hb-modal-overlay'),
				0.55,
				{ opacity: 1 },
				{ opacity: 0, display: 'none', ease: hb_gs.Power2.easeInOut }
			);
			hb_open_flag = 0;
		}
	});
}

/* Mask the clicks for forms */
function hb_click_forms() {
	$j('#hb-submit-login-form').click(function (e) {
		e.preventDefault();
		if ($j('#hb-login-form').validate().form()) {
			$j('#hb-login-form').submit();
		}
	});

	$j('#hb-submit-login-form-tmp').click(function (e) {
		e.preventDefault();
		if ($j('#hb-login-form-tmp').validate().form()) {
			$j('#hb-login-form-tmp').submit();
		}
	});
}

/* Init Likes */
function hb_like_init() {
	$body.on('click touchstart', '.like-holder', function (e) {
		var $this = jQuery(this);

		var data = {
			action: 'highend_like_this',
			post_id: $this.data('post-id'),
			nonce: $this.data('nonce'),
		};

		jQuery.post(highend_vars.ajaxurl, data, function (response) {
			if (response.success) {
				if (response.data.message) {
					$this
						.addClass('like-active')
						.find('span')
						.html(response.data.message);
				}
			}
		});
	});
}

/* Mini Contact Form */
function hb_mini_contact_form() {
	var toggle = false;

	$j('#contact-button').click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$j(this).toggleClass('active-c-button');
		$panel = $j('#contact-panel');

		if (!toggle) {
			hb_gs.TweenLite.to($panel, 0.2, {
				opacity: 1,
				visibility: 'visible',
				scale: 1,
				ease: hb_gs.Power3.easeOutBouce,
			});
			toggle = true;
		} else {
			hb_gs.TweenLite.to($panel, 0.2, {
				opacity: 0,
				scale: 0.8,
				ease: hb_gs.Power3.easeOutBouce,
				onComplete: function () {
					$panel.css('visibility', 'hidden');
					toggle = false;
				},
			});
		}
	});

	$j('#contact-panel').click(function (e) {
		e.stopPropagation();
	});

	$doc.click(function (e) {
		if (toggle) {
			$j('#contact-button').removeClass('active-c-button');
			hb_gs.TweenLite.to($panel, 0.2, {
				opacity: 0,
				scale: 0.9,
				ease: hb_gs.Power1.easeOutBouce,
				onComplete: function () {
					$panel.css('visibility', 'hidden');
					toggle = false;
				},
			});
			return false;
		}
	});
}

/* HB Header Effect */
function hb_header_effect() {
	var $header = $j('#header-inner');
	var header_els = $j(
		'#header-inner, #header-inner #logo, .main-navigation, .plain-logo, #show-nav-menu'
	);

	if (
		($header.hasClass('centered-nav') || $header.hasClass('nav-type-2')) &&
		$header.hasClass('sticky-nav')
	) {
		$j('.main-navigation').sticky();
	}

	if ($header.hasClass('sticky-nav') && $header.hasClass('nav-type-1')) {
		$header.sticky();

		// Disable CSS Transition
		$j('.image-logo, .plain-logo, #main-nav li a').addClass('no-transition');

		/* Main Navigation */
		var header_height = parseInt(highend_vars.header_height);
		var header_height_sticky = parseInt(highend_vars.sticky_header_height);

		/* Check on Page Load */
		var hb_window_y = $wind.scrollTop();
		var new_height = 0;
		var offset = 0;
		var header_els = $j(
			'#header-inner, #header-inner #logo, .main-navigation, .plain-logo, #show-nav-menu'
		);

		if ($main_wrapper.hasClass('hb-boxed-layout')) {
			offset += 40;
		}

		// Header Fancy Effect
		if (!$body.hasClass('hb-special-header-style')) {
			if (hb_window_y > $j('#header-bar').height() + offset) {
				if (
					hb_window_y <
					header_height -
						header_height_sticky +
						$j('#header-bar').height() +
						offset
				) {
					new_height =
						header_height - hb_window_y + $j('#header-bar').height() + offset;
				} else {
					new_height = header_height_sticky;
				}
			} else if (hb_window_y < 0 && is_safari == false) {
				new_height = header_height - hb_window_y;
			} else {
				new_height = header_height;
			}
			header_els.css({
				height: new_height + 'px',
				lineHeight: new_height + 'px',
			});
			if (new_height > header_height) {
				$j('#header-inner-sticky-wrapper').css({
					height: new_height + 'px',
					lineHeight: new_height + 'px',
				});
			}
			/* End */

			$j(window).scroll(function () {
				highendDebounce(function () {
					var hb_window_y = $wind.scrollTop();
					var new_height = 0;
					var offset = 0;

					if ($main_wrapper.hasClass('hb-boxed-layout')) {
						offset += 40;
					}

					if (hb_window_y > $j('#header-bar').height() + offset) {
						if (
							hb_window_y <
							header_height -
								header_height_sticky +
								$j('#header-bar').height() +
								offset
						) {
							new_height =
								header_height -
								hb_window_y +
								$j('#header-bar').height() +
								offset;
						} else {
							new_height = header_height_sticky;
						}
					} else if (hb_window_y < 0 && is_safari == false) {
						new_height = header_height - hb_window_y;
					} else {
						new_height = header_height;
					}

					header_els.css({
						height: new_height + 'px',
						lineHeight: new_height + 'px',
					});

					if (new_height > header_height) {
						$j('#header-inner-sticky-wrapper').css({
							height: new_height + 'px',
							lineHeight: new_height + 'px',
						});
					}
				});
			});
		}
	}
}

/* Function Validations */
function hb_validations() {
	if (jQuery().validate) {
		$j('#commentform').validate();
	}
}

function hb_fixed_footer_init() {
	var $fixedFooterBool = $body.hasClass('hb-fixed-footer');
	if ($fixedFooterBool && $wind.width() > 768) {
		hb_fixed_footer();
	} else if ($wind.width() <= 768) {
		hb_reset_fixed_footer();
	}
}

/* Fixed Footer */
function hb_fixed_footer() {
	var $footer_height = 0;
	var $copyright_height = 0;
	var $total_height = 0;

	if ($j('#copyright-wrapper').length) {
		$copyright_height = $j('#copyright-wrapper').outerHeight(true);
	}

	if ($main_wrapper.hasClass('hb-boxed-layout')) {
		$j('#footer').css({
			position: 'fixed',
			bottom: 0,
			'margin-bottom': $copyright_height + 'px',
			width: 'inherit',
			'max-width': 'inherit',
			'z-index': -1,
		});

		$j('#copyright-wrapper').css({
			position: 'fixed',
			bottom: 0,
			width: 'inherit',
			'max-width': 'inherit',
			'z-index': -2,
		});
	} else {
		$j('#footer').css({
			position: 'fixed',
			bottom: 0,
			'margin-bottom': $copyright_height + 'px',
			left: 0,
			width: '100%',
			'z-index': -1,
		});

		$j('#copyright-wrapper').css({
			position: 'fixed',
			bottom: 0,
			left: 0,
			width: '100%',
			'z-index': -2,
		});
	}

	if ($j('#footer').length) {
		$footer_height = $j('#footer').outerHeight(true);
	} else if ($j('#copyright-wrapper').length) {
		$footer_height = $j('#copyright-wrapper').outerHeight(true);
	}

	$total_height = $footer_height;

	$main_wrapper.css({
		'margin-bottom': $total_height,
	});
}

function hb_reset_fixed_footer() {
	$j('#footer').css({
		position: 'static',
		bottom: 0,
		'margin-bottom': 0,
		left: 0,
		width: '100%',
		'z-index': 991,
	});

	$j('#copyright-wrapper').css({
		position: 'static',
		bottom: 0,
		left: 0,
		width: '100%',
		'z-index': 992,
	});

	$main_wrapper.css({
		'margin-bottom': '0',
	});
}

function hb_init_fw_gallery() {
	var $fw_gallery_container = $j('#fw-gallery-grid');
	var $isotope_gallery = $j('.fw-gallery-wrap');
	var $enableFilter = $fw_gallery_container.attr('data-enable-filter');
	var $enableSort = $fw_gallery_container.attr('data-enable-sort');

	if ($fw_gallery_container.length) {
		$fw_gallery_container.imagesLoaded(function () {
			$isotope_gallery.removeClass('loading');

			$j('#fw-gallery-grid .col').each(function (i) {
				var $that = $j(this);
				var $counter = i;

				setTimeout(function () {
					$that.addClass('animate');
					setTimeout(function () {
						$that.removeClass('animate').addClass('visible');
					}, 800);
				}, $counter * 110 + 300);
			});

			$isotope_gallery.isotope({
				itemSelector: '.elastic-item',
				getSortData: {
					name: '.hb-gallery-item-name',
					date: function (elem) {
						return $j(elem).attr('data-value');
					},
					count: '.photo-count parseInt',
				},
			});

			$wind.resize(function () {
				highendDebounce($isotope_gallery.isotope());
			});
		});

		$j('li.hb-dd-header').hover(
			function () {
				var $dropdown = $j(this).find('.hb-gallery-dropdown');
				$dropdown.addClass('dropdown-visible');
			},
			function () {
				var $dropdown = $j(this).find('.hb-gallery-dropdown');
				$dropdown.removeClass('dropdown-visible');
			}
		);

		$j('ul.hb-sort-filter > li.hb-dd-header > ul > li > a').click(function () {
			$j(this).addClass('hb-current-item');
			var $new_sort_value = $j(this).html();
			var $sort_value = $j(this).parent().parent().parent().find('strong');
			var $sort_ascending = false;
			var selector = $j(this).attr('data-sort-value');

			$sort_value.html($new_sort_value);
			$sort_value.siblings('.hb-gallery-dropdown').trigger('mouseout');

			if (selector == 'name') {
				$sort_ascending = true;
			} else if (selector == 'date') {
				$sort_ascending = false;
			}

			if (selector == 'random') {
				$isotope_gallery.isotope({ sortBy: 'random' });
			} else {
				$isotope_gallery.isotope({
					sortBy: selector,
					sortAscending: $sort_ascending,
				});
			}

			return false;
		});

		$j('ul.hb-grid-filter > li.hb-dd-header > ul > li > a').click(function () {
			$j(this).addClass('hb-current-item');
			var selector = $j(this).attr('data-filter');
			if (selector != '*') {
				selector = '.' + selector;
			}
			$isotope_gallery.isotope({ filter: selector });

			var $new_sort_value = $j(this).attr('data-filter-name');
			var $sort_value = $j(this).parent().parent().parent().find('strong');

			$sort_value.html($new_sort_value);
			$sort_value.siblings('.hb-gallery-dropdown').trigger('mouseout');

			return false;
		});
	}
}

/* Standard Gallery Initialization */
function hb_init_standard_gallery() {
	var $standard_gallery_masonry = $j('#standard-gallery-masonry');

	var $enableFilter = $standard_gallery_masonry.attr('data-enable-filter');
	var $enableSort = $standard_gallery_masonry.attr('data-enable-sort');

	if ($standard_gallery_masonry.length) {
		$standard_gallery_masonry.imagesLoaded(function () {
			$j('#gallery-loading').stop(true, true).fadeOut(200);

			$j('.standard-gallery-item').each(function (i) {
				var $that = $j(this);
				var $counter = i;

				setTimeout(function () {
					$that.addClass('animate');
					setTimeout(function () {
						$that.removeClass('animate').css('opacity', 1);
					}, 800);
				}, $counter * 110 + 300);
			});

			$standard_gallery_masonry.isotope({
				itemSelector: '.standard-gallery-item-wrap',
				animationEngine: 'best-available',
				layoutMode: 'fitRows',
				getSortData: {
					name: '.hb-gallery-item-name',
					date: function (elem) {
						return $j(elem).attr('data-value');
					},
				},
			});
		});

		$j('ul.filt-tabs > li > a').click(function () {
			$j('ul.filt-tabs').find('.selected').removeClass('selected');
			$j(this).parent().addClass('selected');

			var selector = $j(this).attr('data-filter');
			$standard_gallery_masonry.isotope({ filter: selector });

			return false;
		});

		$j('ul.sort-tabs > li > a').click(function () {
			$j('ul.sort-tabs').find('.selected').removeClass('selected');
			$j(this).parent().addClass('selected');
			var $sort_ascending = false;

			var selector = $j(this).attr('data-sort');

			if (selector == 'name') {
				$sort_ascending = true;
			} else if (selector == 'date') {
				$sort_ascending = false;
			}

			$standard_gallery_masonry.isotope({
				sortBy: selector,
				sortAscending: $sort_ascending,
			});

			return false;
		});
	}
}

/* Ajax Search - Only for header menu search */
function hb_ajax_search() {
	if ($body.hasClass('hb-modern-search')) return false;

	if (
		$j('#nav-search').length &&
		$j('#header-inner').hasClass('hb-ajax-search')
	) {
		$j('#fancy-search #s')
			.autocomplete({
				delay: 50,
				minLength: 2,
				appendTo: $j('#fancy-search'),
				search: function (event, ui) {
					$j('#fancy-search').addClass('ajax-searching');
				},
				source: function (req, response) {
					$j.getJSON(
						highend_vars.ajaxurl + '?callback=?&action=hb_ajax_search',
						req,
						response
					);
				},
				select: function (event, ui) {
					if (typeof ui.item != 'undefined') {
						window.location.href = ui.item.link;
					} else {
						$j('#fancy-search-form').submit();
					}
				},
				response: function (event, ui) {
					$j('#fancy-search').removeClass('ajax-searching');
				},
				open: function (event, ui) {
					var len = $j('#fancy-search .ui-autocomplete > li').length;
					if (len == 5) {
						$j('#fancy-search .ui-autocomplete').append(
							'<li class="ui-menu-item" role="presentation"><a id="ui-view-all-results" href="#" class="ui-corner-all" tabindex="-1"><i class="hb-moon-search-3"></i><span class="search-title all-results">View all results</span></a></li>'
						); //See all results);
					}
				},
			})
			.data('ui-autocomplete')._renderItem = function (ul, item) {
			return $j('<li>')
				.append(
					'<a>' +
						item.image +
						"<span class='search-title'>" +
						item.label +
						"</span><span class='search-date'>" +
						item.date +
						'</span></a>'
				)
				.appendTo(ul);
		};
	} else {
		return false;
	}
}

/* Function Lighbox Init */
function hb_init_lightbox() {
	if (!$j.fn.prettyPhoto) {
		return;
	}

	$j(
		"a[rel^='prettyPhoto'], a[rel^='prettyPhoto[gallery]'], .gallery-icon a, a[rel^='lightbox']"
	).prettyPhoto({
		animation_speed: 'fast',
		opacity: 0.85,
		overlay_gallery: true,
		slideshow: false,
		allow_resize: true,
		show_title: true,
		changepicturecallback: function () {
			if (viewportWidth < 1025) {
				var viewportWidth = $j('html').innerWidth();
				$j('.pp_pic_holder.pp_default').css('top', window.pageYOffset + 'px');
			}
		},
		default_width: 970,
		default_height: 643,
		social_tools: '',
	});

	$j('.gallery-item-init').click(function (e) {
		e.preventDefault();
		var $api_images = $j(this).attr('data-gallery-images');
		$j.prettyPhoto.open($api_images);
	});
}

/* Window Popup */
function popWindow(url, winName, w, h) {
	if (window.open) {
		if (poppedWindow) {
			poppedWindow = '';
		}
		windowW = w;
		windowH = h;
		var windowX = screen.width / 2 - windowW / 2;
		var windowY = screen.height / 2 - windowH / 2;
		var myExtra =
			'status=no,menubar=no,resizable=yes,toolbar=no,scrollbars=yes,addressbar=no';
		var poppedWindow = window.open(
			url,
			winName,
			'width=' +
				w +
				',height=' +
				h +
				',top=' +
				windowY +
				',left=' +
				windowX +
				',' +
				myExtra +
				''
		);
	} else {
		alert(
			'Your security settings are not allowing our popup windows to function. Please make sure your security software allows popup windows to be opened by this web application.'
		);
	}
	return false;
}

/* Single Blog Scripts */
function hb_single_blog_scripts() {
	/* Scroll To #comments when clicked */
	$j('.scroll-to-comments').click(function (e) {
		e.preventDefault();
		if ($j('#comments').length) {
			$j('html, body').animate(
				{
					scrollTop: $j('#comments').offset().top - 120,
				},
				800,
				'easeOutCubic'
			);
		} else {
			$j('html, body').animate(
				{
					scrollTop: $j('#respond').offset().top - 120,
				},
				800,
				'easeOutCubic'
			);
		}
	});

	/* Scroll to #respond when clicked */
	$j('.leave-your-reply').click(function (e) {
		e.preventDefault();
		if ($j('#respond').length) {
			$j('html, body').animate(
				{
					scrollTop: $j('#respond').offset().top - 120,
				},
				800,
				'easeOutCubic'
			);
		}
	});
}

/* Various Shortcode Inits */
function hb_init_shortcodes() {
	/* Wrap Select elements */
	//$j( "select" ).not("#rating, .esg-sorting-select").not('#calc_shipping_state, #calc_shipping_country, #billing_country, #billing_state, #billing-state, #shipping_country, #shipping_state').wrap( "<div class='hb-custom-select'></div>" );

	/* Typed JS */
	if ($j('.hb-typed-text').length) {
		$j('.hb-typed-text').each(function () {
			var $that = $j(this);
			var strings_to_type = $that.parent().find('.hb-typed-strings').html();
			strings_to_type = strings_to_type.replace('<p>', '');
			strings_to_type = strings_to_type.replace('</p>', '');

			var strings = strings_to_type.split('<br>');

			if ($that.data('highlight') == true) {
				$that
					.css('background-color', $that.data('highlightcolor'))
					.parent()
					.addClass('with-highlight');
				$that.css('color', $that.data('highlighttextcolor'));
			}

			var options = {
				strings: strings,
				typeSpeed: $that.data('speed'),
				backDelay: $that.data('backdelay'),
				loopCount: $that.data('loopcount'),
				loop: $that.data('loop'),
				contentType: 'html',
			};

			$that.typed(options);
		});
	}

	/* Owl Carousel */
	// if ( $j('.hb-owl-slider').length ){
	// 	$j('.hb-owl-slider').each(function(){
	// 		var $that = $j(this);
	// 		setTimeout(function() {
	// 			$that.owlCarousel({
	// 				'navigationText' : ["<i class='hb-moon-arrow-left-4'></i>","<i class='hb-moon-arrow-right-5'></i>"],
	// 				'items' : $that.data("items"),
	// 				'slideSpeed' : $that.data("slidespeed"),
	// 				'autoPlay' : $that.data("autoplay"),
	// 				'stopOnHover' : $that.data("stoponhover"),
	// 				'rewindNav' : $that.data("rewindnav"),
	// 				'lazyLoad' : $that.data("lazyload"),
	// 				'pagination' : $that.data("pagination"),
	// 				'data-navigation' : $that.data("navigation"),
	// 			});
	// 			$that.parent().fadeIn(450);
	// 		}, 500);
	// 	});
	// }
	//

	document.querySelectorAll('.hb-owl-slider').forEach((item) => {
		var args = {
			items: parseInt(item.getAttribute('data-items')),
			nav: item.getAttribute('data-navigation'),
			navText: [
				"<i class='hb-moon-arrow-left-4'></i>",
				"<i class='hb-moon-arrow-right-5'></i>",
			],
			autoplay: 'true' === item.getAttribute('data-autoplay'),
			autoplayHoverPause: item.getAttribute('data-stoponhover') == 'true',
			autoplaySpeed:
				'true' === item.getAttribute('data-autoplay')
					? parseInt(item.getAttribute('data-autoplaySpeed'))
					: false,
			dots: item.getAttribute('data-pagination') == 'true',
			lazyLoad: item.getAttribute('data-lazyload') == 'true',
			rewind: item.getAttribute('data-rewindnav') == 'true',
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				769: {
					items: parseInt(item.getAttribute('data-items')),
				},
			},
		};

		$j(item).owlCarousel(args);
	});

	/* Testimonial Slider */
	if ($j('.init-testimonial-slider').length) {
		$j('.init-testimonial-slider').each(function () {
			var $that = $j(this);
			var $speed = $j(this).attr('data-slideshow-speed');

			if ($speed < 1000) {
				$speed = 1000;
			}

			$that.flexslider({
				selector: '.testimonial-slider > li',
				slideshow: true,
				animation: 'fade',
				smoothHeight: false,
				slideshowSpeed: $speed,
				animationSpeed: 350,
				directionNavArrowsLeft: '<i class="icon-chevron-left"></i>',
				directionNavArrowsRight: '<i class="icon-chevron-right"></i>',
				pauseOnHover: false,
				controlNav: true,
				directionNav: false,
				prevText: '',
				nextText: '',
			});
		});
	}

	var init_flexslider = function ($slider) {
		var speed = $slider.attr('data-speed');
		var pause = $slider.attr('data-pause-on-hover');
		var control = $slider.attr('data-control-nav');
		var nav = $slider.attr('data-direction-nav');

		pause = pause == 'true';
		control = control == 'true';
		nav = nav == 'true';

		$slider.fitVids().flexslider({
			selector: '.hb-flex-slides > li',
			slideshow: true,
			animation: 'slide',
			smoothHeight: true,
			slideshowSpeed: speed,
			animationSpeed: 500,
			pauseOnHover: pause,
			controlNav: control,
			directionNav: nav,
			prevText: '',
			nextText: '',
			start: function () {
				$slider.removeClass('loading');

				if ($slider.parents('.masonry-holder').length) {
					$slider.parents('.masonry-holder').isotope();
				}
			},
		});
	};

	$j('#main-wrapper').on('init', '.init-flexslider', function () {
		init_flexslider($j(this));
	});

	$j('.init-flexslider').trigger('init');

	/* Carousel */
	if ($j('.init-carousel').length) {
		$j('.init-carousel').each(function () {
			var $that = $j(this);
			var visible_var = parseInt($that.attr('data-visible'), 10);
			var speed_var = parseInt($that.attr('data-speed'), 10);
			var autorotate = $that.attr('data-auto-rotate');

			if (autorotate == 'false') {
				speed_var = false;
			}

			$that.hbcarousel({
				visible: visible_var,
				speed: 400,
				itemMargin: 20,
				carousel: true,
				autoRotate: speed_var,
				itemMinWidth: 200,
			});
		});
	}

	/* Carousel */
	if ($j('.init-team-carousel').length) {
		$j('.init-team-carousel').each(function () {
			var $that = $j(this);
			var visible_var = parseInt($that.attr('data-visible'), 10);
			var speed_var = parseInt($that.attr('data-speed'), 10);
			var autorotate = $that.attr('data-auto-rotate');

			if (autorotate == 'false') {
				speed_var = false;
			}

			$that.hbcarousel({
				visible: visible_var,
				speed: 400,
				itemMargin: 30,
				carousel: true,
				autoRotate: speed_var,
				itemMinWidth: 200,
			});
		});
	}

	/* Countdowns */
	if ($j('.hb-countdown-unit').length) {
		var date_value;

		$j('.hb-countdown-unit').each(function () {
			date_value = $j(this).attr('data-date');
			$j(this).highendCountdown({
				date: date_value,
				format: 'on',
			});
		});
	}

	/* Accordions */
	if ($j('.hb-accordion').length) {
		$j('.hb-accordion').each(function () {
			var $index = $j(this).attr('data-initialindex');
			if ($index != '-1') {
				var $tog = $j(this)
					.find('.hb-accordion-single')
					.eq($index)
					.find('.hb-accordion-tab');
				$tog.addClass('active-toggle');
				$tog.siblings('.hb-accordion-pane').slideDown(200);
				hb_animated_contents();
				hb_counter();
				hb_charts();
				hb_progress_bar();
			}
		});

		$j('.hb-accordion .hb-accordion-tab').click(function (e) {
			e.preventDefault();

			var $that = $j(this);

			$that
				.parent()
				.parent()
				.find('.hb-accordion-tab')
				.removeClass('active-toggle');
			$that.parent().parent().find('.hb-accordion-pane').slideUp(200);

			if ($that.next().is(':hidden') == true) {
				$that.next().slideDown(200);
				$that.addClass('active-toggle');
				hb_animated_contents();
				hb_counter();
				hb_charts();
				hb_progress_bar();
			}
		});
	}

	/* Toggles */
	if ($j('.hb-toggle').length) {
		$j('.hb-toggle').each(function () {
			var $index = $j(this).attr('data-initialindex');
			if ($index != '-1') {
				var $tog = $j(this)
					.find('.hb-accordion-single')
					.eq($index)
					.find('.hb-accordion-tab');
				$tog.addClass('active-toggle');
				$tog.siblings('.hb-accordion-pane').slideDown(200);
				hb_animated_contents();
				hb_counter();
				hb_charts();
				hb_progress_bar();
			}
		});

		$j('#main-wrapper').on(
			'click',
			'.hb-toggle .hb-accordion-tab',
			function (e) {
				e.preventDefault();
				var $that = $j(this);

				if (!$that.hasClass('active-toggle')) {
					$that
						.addClass('active-toggle')
						.siblings('.hb-accordion-pane')
						.slideDown(200);
					hb_animated_contents();
					hb_counter();
					hb_charts();
					hb_progress_bar();
				} else {
					$j(this)
						.removeClass('active-toggle')
						.siblings('.hb-accordion-pane')
						.slideUp(200);
				}
			}
		);
	}

	$j('.map-info-section').on('click', '.minimize-section', function (e) {
		e.preventDefault();
		$j(this).closest('.map-info-section').toggleClass('minimized');
	});
	// End Toggle

	// Overlay hover
	if ($j('.overlay').length) {
		$j('.hb-circle-frame a, .hb-box-frame a').hover(
			function () {
				var $that = $j(this);

				$that.find('.overlay').stop().animate(
					{
						opacity: 0.85,
					},
					220,
					'easeOutCubic'
				);

				$that
					.find('.plus-sign')
					.stop()
					.animate(
						{
							top: 50 + '%',
						},
						420,
						'easeOutCubic'
					);
			},
			function () {
				var $that = $j(this);
				$that.find('.overlay').stop().animate(
					{
						opacity: 0,
					},
					220,
					'easeOutCubic'
				);

				$that
					.find('.plus-sign')
					.stop()
					.animate(
						{
							top: 40 + '%',
						},
						420,
						'easeOutCubic'
					);
			}
		);
	}

	// Tabs
	if ($j('.hb-tabs-wrapper').length) {
		$j('.hb-tabs-wrapper ul.nav-tabs').find('li:first').addClass('active');
		$j('.wpb_tabs.hb-tabs-wrapper').find('.tab-content:first').show();
		var interval = 0;

		$j('.wpb_tabs.hb-tabs-wrapper').each(function () {
			var $this_el = $j(this);
			interval = parseInt($this_el.attr('hb-data-interval')) * 1000;
			if (
				typeof interval !== typeof undefined &&
				interval !== false &&
				interval > 0
			) {
				setInterval(function () {
					var $current = $this_el.find(
						'.nav.nav-tabs > li.ui-tabs-active.ui-state-active > a'
					);
					var $next = $current.parent().next().find('a');

					if ($next.length == 0) {
						$next = $this_el.find('.nav.nav-tabs > li:first-child > a');
					}

					$next.trigger('click');
				}, interval);
			}
		});

		$j('.nav-tabs > li > a').click(function (e) {
			e.preventDefault();

			$j(window).trigger('scroll');
			hb_animated_contents();
			hb_counter();
			hb_charts();
			hb_progress_bar();

			var tabs_container = $j(this).parent().parent().parent();
			var tabs = tabs_container.children('.nav-tabs');
			var label = $j(this).attr('id');
			var elem = null;

			tabs.children('li').removeClass('active');
			$j(this).parent().addClass('active');

			tabs_container.find('.tab-content').each(function (e) {
				if ($j(this).find('.tab-pane').attr('aria-labelledby') == label) {
					$j(this).find('.tab-pane').parent().show();
				} else {
					$j(this).find('.tab-pane').parent().hide();
				}
			});
		});
	}

	$j('.wpb_tabs_nav li a').click(function () {
		$wind.trigger('resize');
	});

	// Modal
	if ($j('.hb-modal-window').length) {
		$j('.modal-open').on('click', function (e) {
			e.preventDefault();
			var $modal_id = $j(this).attr('data-modal-id');

			$j('#' + $modal_id)
				.parent()
				.addClass('hb-visible-modal');

			if ($j('#' + $modal_id).hasClass('rendered')) {
				setTimeout(function () {
					$j('#' + $modal_id).addClass('animate-modal');
				}, 220);
				$body.addClass('no-scroll');
			} else {
				if ($j('.hb-accordion').length) {
					init_modal_accordion();
				}
				setTimeout(function () {
					$j('#' + $modal_id).addClass('rendered animate-modal');
				}, 220);
				$body.addClass('no-scroll');
			}
		});

		$j('.hb-modal-window').on('click touchstart', '.close-modal', function (e) {
			e.preventDefault();
			var $close_id = $j(this).attr('data-close-id');
			$j('#' + $close_id).removeClass('animate-modal');
			$body.removeClass('no-scroll');
			$j('#' + $close_id)
				.parent()
				.removeClass('hb-visible-modal');
		});
	}
}

function init_modal_accordion() {
	$j('.hb-accordion').each(function () {
		var $that = $j(this);

		$that
			.parent()
			.parent()
			.find('.hb-accordion-tab')
			.removeClass('active-toggle');
		$that.parent().parent().find('.hb-accordion-pane').slideUp(200);

		var $index = $j(this).attr('data-initialindex');
		if ($index != '-1') {
			var $tog = $j(this)
				.find('.hb-accordion-single')
				.eq($index)
				.find('.hb-accordion-tab');
			$tog.addClass('active-toggle');
			$tog.siblings('.hb-accordion-pane').slideDown(200);
			hb_animated_contents();
			hb_counter();
			hb_charts();
			hb_progress_bar();
		}
	});
}

/* Counter Function */
function hb_counter() {
	if ($j.exists('.hb-counter') && $j.inviewport) {
		/* Counters */
		$j('.hb-counter:in-viewport').each(function () {
			if (!$j(this).hasClass('activated')) {
				var countAsset = $j(this),
					countNumber = countAsset.find('.count-number'),
					countDivider = countAsset.find('.count-separator').find('span'),
					countSubject = countAsset.find('.count-subject'),
					countTo = countAsset.find('.count-number').attr('data-to'),
					countFrom = countAsset.find('.count-number').attr('data-from'),
					countSpeed = parseInt(
						countAsset.find('.count-number').attr('data-speed')
					);

				countAsset.addClass('activated');

				$j({ countNum: countFrom }).animate(
					{ countNum: countTo },
					{
						duration: countSpeed,
						easing: 'linear',
						step: function () {
							countAsset.find('.count-number').text(
								Math.floor(this.countNum)
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
							);
						},
						complete: function () {
							countAsset
								.find('.count-number')
								.text(
									this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
								);
							countDivider.animate({ width: 50 }, 650, 'easeOutCubic');
							countSubject
								.delay(100)
								.animate({ opacity: 1, bottom: '0px' }, 650, 'easeOutCubic');
						},
					}
				);
			}
		});
	}
}

function highendIsInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

/* Charts */
function hb_charts() {
	var charts = document.querySelectorAll('.hb-chart');

	charts.forEach(function (chart) {
		if (
			null === chart.getAttribute('initialized') &&
			highendIsInViewport(chart)
		) {
			chart.setAttribute('initialized', true);
			var $that = $j(chart);
			var $animation_speed = $that.attr('data-animation-speed');
			var $size = $that.attr('data-barSize');
			$that.easyPieChart({
				animate: $animation_speed,
				lineCap: 'round',
				lineWidth: $that.attr('data-lineWidth'),
				size: $size,
				barColor: $that.attr('data-barColor'),
				trackColor: $that.attr('data-trackColor'),
				scaleColor: 'transparent',
				onStep: function (value) {
					this.$el.find('.chart-percent span').text(Math.ceil(value));
				},
				onStop: function (value) {
					this.$el
						.siblings('.hb-chart-desc')
						.animate({ opacity: 1, bottom: '0px' }, 650, 'easeOutCubic');
				},
			});
		}
	});
}

/* Progress Bar */
function hb_progress_bar() {
	if ($j.exists('.hb-progress-bar') && $j.inviewport) {
		$j('.hb-progress-bar .progress-outer:in-viewport').each(function () {
			if (!$j(this).hasClass('activated')) {
				$j(this).addClass('activated');
				var $that = $j(this);
				$that.animate(
					{
						width: $j(this).attr('data-width') + '%',
					},
					1400,
					'easeOutCubic'
				);
			}
		});
	}
}

/* Contact Forms */
function onSuccessSend(results) {
	var success_text = $j('#success_text').val();
	$j('#hb-submit-contact-panel-form i').attr('class', 'hb-moon-checkmark');
	$j('#hb-submit-contact-panel-form')
		.removeClass('hb-asbestos')
		.addClass('hb-nephritis disabled');
	$j('#hb-submit-contact-panel-form span.hb-push-button-text').html(
		success_text
	);
	$j('#hb-submit-contact-panel-form span.hb-push-button-icon').html(
		"<i class='hb-moon-checkmark-2'></i>"
	);

	$j('#hb_contact_name_id').attr('disabled', 'disabled');
	$j('#hb_contact_email_id').attr('disabled', 'disabled');
	$j('#hb_contact_message_id').attr('disabled', 'disabled');
}
function hb_contact_forms() {
	var sent = false;
	var nameValidate = false;
	var emailValidate = false;
	var commentsValidate = false;

	$j('#hb_contact_name_id').blur(function () {
		nameValidate = $j('#contact-panel-form')
			.validate()
			.element('#hb_contact_name_id');
	});
	$j('#hb_contact_email_id').blur(function () {
		emailValidate = $j('#contact-panel-form')
			.validate()
			.element('#hb_contact_email_id');
	});
	$j('#hb_contact_message_id').blur(function () {
		commentsValidate = $j('#contact-panel-form')
			.validate()
			.element('#hb_contact_message_id');
	});

	$j('#hb-submit-contact-panel-form').click(function (e) {
		e.preventDefault();
		if (!sent) {
			if ($j('#hb_contact_subject_id').val()) {
				alert('Sorry - bots are not allowed!');
				return false;
			}

			if (nameValidate && emailValidate && commentsValidate) {
				$j('#contact-name #contact-email, #contact-message').attr(
					'disabled',
					true
				);

				var data = {};
				data.contact_email = $j('#hb_contact_email_id').val();
				data.contact_name = $j('#hb_contact_name_id').val();
				data.contact_comments = $j('#hb_contact_message_id').val();
				data.action = 'mail_action';

				$j.post(highend_vars.ajaxurl, data, onSuccessSend);
				$j('#hb-submit-contact-panel-form i').attr(
					'class',
					'hb-moon-spinner-8'
				);

				sent = true;
				return;
			} else {
				$j('#contact-panel-form').validate().form();
			}
		}
	});
}

function hb_smooth_scroll() {
	var offs = 0;

	if ($j('#header-inner').hasClass('sticky-nav')) {
		offs = highend_vars.sticky_header_height;
	}

	$j('.smooth-scroll').click(function (e) {
		e.preventDefault();

		if ($j(this).is('a')) {
			var anch = $j(this).attr('href');
			$j.scrollTo(anch, 800, { easing: 'easeInOutQuad', offset: -offs });
		} else {
			var $that = $j(this).find('a');
			var anch = $that.attr('href');
			$j.scrollTo(anch, 800, { easing: 'easeInOutQuad', offset: -offs });
		}
	});
}

/* Other Contact Forms */
function hb_contact_forms_spec() {
	var sent_spec = false;
	var sNameValidate = false;
	var sEmailValidate = false;
	var sCommentsValidate = false;

	$j('#sp-contact-name').blur(function () {
		sNameValidate = $j('#sp-contact-form')
			.validate()
			.element('#sp-contact-name');
	});
	$j('#sp-contact-email').blur(function () {
		sEmailValidate = $j('#sp-contact-form')
			.validate()
			.element('#sp-contact-email');
	});
	$j('#sp-contact-message').blur(function () {
		sCommentsValidate = $j('#sp-contact-form')
			.validate()
			.element('#sp-contact-message');
	});

	$j('#special-submit-form').click(function (e) {
		e.preventDefault();
		if (!sent_spec) {
			if ($j('#hb_contact_subject_id').val()) {
				alert('Sorry - bots are not allowed!');
				return false;
			}

			if (sNameValidate && sEmailValidate && sCommentsValidate) {
				$j('#sp-contact-name, #sp-contact-email, #sp-contact-message').attr(
					'disabled',
					true
				);

				var data_s = {};
				data_s.contact_email = $j('#sp-contact-email').val();
				data_s.contact_name = $j('#sp-contact-name').val();
				data_s.contact_comments = $j('#sp-contact-message').val();
				data_s.action = 'mail_action';

				$j.post(highend_vars.ajaxurl, data_s, onSuccessSendSpec);

				sent_spec = true;
				return;
			} else {
				$j('#sp-contact-form').validate().form();
			}
		}
	});
}

/* Contact Forms */
function onSuccessSendSpec(results) {
	var success_text = $j('#success_text_special').val();
	$j('#special-submit-form i').attr('class', 'hb-moon-checkmark');
	$j('#special-submit-form').html(success_text).addClass('disabled-button');

	$j('#sp-contact-name').attr('disabled', 'disabled');
	$j('#sp-contact-email').attr('disabled', 'disabled');
	$j('#sp-contact-message').attr('disabled', 'disabled');
}

/* Toggle the overlay */
function hb_toggle_modal_overlay() {
	var $overlay = $j('#hb-modal-overlay');

	if ($overlay.length) {
		if ($overlay.hasClass('visible')) {
			$j('#hb-modal-overlay').fadeOut(220);
			$overlay.removeClass('visible');
		} else {
			$j('#hb-modal-overlay').fadeIn(220);
			$overlay.addClass('visible');
		}
	}
}

function hb_woo_stuff() {
	var $sticky_count = 0;
	var $hb_woo_notif = $j('#hb-woo-notif');

	if ($hb_woo_notif.length) {
		var cart_url = $hb_woo_notif.data('cart-url');
		var cart_text = $hb_woo_notif.data('cart-text');
		var text = $hb_woo_notif.data('text');
	}

	$body.bind('added_to_cart', function () {
		if ($hb_woo_notif.length) {
			var product_name = $j('.product-loading-icon.preloading.hb-spin')
				.parent()
				.parent()
				.siblings('.hb-product-meta-wrapper')
				.find('a h3')
				.text();
			var notif = $j(
				'<li><div><i class="hb-moon-checkmark-2"></i><span>' +
					product_name +
					' ' +
					text +
					' <a href="' +
					cart_url +
					'">' +
					cart_text +
					'</a></span></div></li>'
			);

			if (product_name.length) {
				notif.appendTo('#hb-woo-notif').fadeIn(350);
				setTimeout(function () {
					notif.fadeOut(350);
				}, 6000);
			}
		}

		$j('.product-loading-icon')
			.removeClass('preloading hb-spin')
			.addClass('hb-added-to-cart');
		if ($j('#sticky-shop-button').length) {
			$sticky_count =
				parseInt($j('#sticky-shop-button').find('span').html()) + 1;
			$j('#sticky-shop-button').find('span').html($sticky_count);
		}
	});

	$body.on('click touchstart', '.hb-buy-button', function () {
		if (!$j(this).hasClass('no-action-mark')) {
			$j(this)
				.parent()
				.find('.product-loading-icon')
				.addClass('preloading hb-spin')
				.removeClass('hb-added-to-cart')
				.css('opacity', '1');

			if ($j('.cart-circle-count').length) {
				var ctemp = parseInt($j('.cart-circle-count').html());
				ctemp++;
				$j('.cart-circle-count').html(ctemp);

				if (ctemp == 1) {
					$j('.cart-tab .contents').html(ctemp + ' item');
				} else {
					$j('.cart-tab .contents').html(ctemp + ' items');
				}
			}

			if ($j('.hb-cart-total-header').length) {
				setTimeout(function () {
					if ($j('#top-cart-widget').length) {
						var price = $j('#top-cart-widget .amount').html();
						$j('.hb-cart-total-header .amount, .cart-tab .amount').html(price);
					}
				}, 900);
			}
		}
	});

	$j(document).on('click', '.plus, .minus', function () {
		var b = $j(this).closest('.quantity').find('.qty'),
			c = parseFloat(b.val()),
			d = parseFloat(b.attr('max')),
			e = parseFloat(b.attr('min')),
			f = b.attr('step');
		(c && '' !== c && 'NaN' !== c) || (c = 0),
			('' === d || 'NaN' === d) && (d = ''),
			('' === e || 'NaN' === e) && (e = 0),
			('any' === f || '' === f || void 0 === f || 'NaN' === parseFloat(f)) &&
				(f = 1),
			$j(this).is('.plus')
				? b.val(d && (d == c || c > d) ? d : c + parseFloat(f))
				: e && (e == c || e > c)
				? b.val(e)
				: c > 0 && b.val(c - parseFloat(f)),
			b.trigger('change');
	});

	var $current_hovered;
	$body
		.on('mouseenter', '.hb-woo-image-wrap', function () {
			$j(this).find('.product-hover-image').css('opacity', '1');
			$current_hovered = $j(this);
		})
		.on('mouseleave', '.hb-woo-image-wrap', function () {
			$current_hovered.find('.product-hover-image').css('opacity', '0');
		});
}

function hb_center_me() {
	if ($j('.hb-center-me').length) {
		$j('.hb-center-me').each(function () {
			var $hght = $j(this).outerHeight() / 2;
			$j(this).css('margin-top', -$hght + 'px');
		});
	}
}

function hb_center_vertically() {
	var max = 0;
	var $cols = null;

	if ($j('.hb-center-vertically').length && $wind.width() > 767) {
		$j('.hb-center-vertically').each(function () {
			$cols = $j(this).parent().children('.wpb_column');
			$cols.css('height', 'auto');
			max = Math.max.apply(
				Math,
				$cols.map(function () {
					return $j(this).innerHeight();
				})
			);
			$cols.css('height', max);
		});
	} else if ($j('.hb-center-vertically').length && $wind.width() < 767) {
		$j('.hb-center-vertically')
			.parent()
			.children('.wpb_column')
			.css('height', 'auto');
	}
}

function hb_count_gallery_filters() {
	if ($j('.hb-grid-filter').length) {
		var $that = null;
		var $filter = null;
		var $filter_count = null;
		var count = 0;

		$j('.hb-grid-filter .hb-gallery-dropdown li').each(function () {
			$that = $j(this);
			$filter = $that.find('a').attr('data-filter');
			$filter_count = $that.find('a').find('.hb-filter-count');

			if ($filter == '*') {
				// Count all gallery items
				count = $j('.fw-gallery-wrap .elastic-item').length;
			} else {
				// Count for each category
				count = $j('.fw-gallery-wrap .' + $filter).length;
			}
			$filter_count.html('(' + count + ')');
		});
	} else if ($j('.standard-gallery-filter').length) {
		var $that = null;
		var $filter = null;
		var $filter_count = null;
		var count = 0;

		$j('.filt-tabs li').each(function () {
			$that = $j(this);
			$filter = $that.find('a').attr('data-filter');
			$filter_count = $that.find('a').find('.item-count');

			if ($filter == '*') {
				// Count all gallery items
				count = $j(
					'#standard-gallery-masonry .standard-gallery-item-wrap'
				).length;
			} else {
				// Count for each category
				count = $j('#standard-gallery-masonry ' + $filter).length;
			}
			$filter_count.html(count);
		});
	}
}

function hb_faq_filter() {
	if ($j('.faq-filter').length) {
		var $elems = $j('.faq-filter li a');
		var $data_filter = null;

		if ($j('.faq-filter').length) {
			$elems.each(function () {
				$that = $j(this);
				$data_filter = $that.attr('data-filter');

				if ($data_filter == '*') {
					$that
						.find('.hb-filter-count')
						.html($j('.faq-module-wrapper').find('.hb-toggle').length);
				} else {
					$that
						.find('.hb-filter-count')
						.html($j('.faq-module-wrapper').find('.' + $data_filter).length);
				}
			});
		}

		$doc.on('touchstart click', '.faq-filter li a', function (event) {
			event.stopPropagation();
			event.preventDefault();
			if (event.handled !== true) {
				$that = $j(this);
				$data_filter = $that.attr('data-filter');

				$j('.faq-module-wrapper').find('.selected').removeClass('selected');
				$that.parent().addClass('selected');

				if ($data_filter == '*') {
					$j('.faq-module-wrapper').find('.hb-toggle').slideDown(0);
				} else {
					$j('.faq-module-wrapper').find('.hb-toggle').slideUp(0);
					$j('.faq-module-wrapper')
						.find('.' + $data_filter)
						.slideDown(0);
				}

				event.handled = true;
			} else {
				return false;
			}
		});
	}
}

function hb_modal_on_load() {
	if ($j('.modal-show-on-load').length) {
		$j('.modal-show-on-load').each(function () {
			var $that = $j(this);

			var $modal_id = $that.attr('id');

			$j('#' + $modal_id)
				.parent()
				.addClass('hb-visible-modal');
			if ($j('#' + $modal_id).hasClass('rendered')) {
				setTimeout(function () {
					$j('#' + $modal_id).addClass('animate-modal');
				}, 220);
				$body.addClass('no-scroll');
			} else {
				setTimeout(function () {
					$j('#' + $modal_id).addClass('rendered animate-modal');
				}, 220);
				$body.addClass('no-scroll');
			}
		});

		/* Countdowns */
		if ($j('.hb-countdown-unit').length) {
			var date_value;

			$j('.hb-countdown-unit').each(function () {
				date_value = $j(this).attr('data-date');
				$j(this).highendCountdown({
					date: date_value,
					format: 'on',
				});
			});
		}
	}
}

function hb_pagination_ajax() {
	pagination_count = highend_vars.paged;

	var $container = $j('#hb-blog-posts');
	var col_count = $container.attr('data-column-size');
	var category = $container.attr('data-categories');

	if ($container.siblings('.load-more-posts').length) {
		$container.addClass('masonry-holder');

		$j('.load-more-posts').on('click', function (e) {
			e.preventDefault();
			if (!$j(this).hasClass('inactive')) {
				$j('.load-more-posts > .load-more-text ').hide(0);
				$j('.load-more-posts > .hb-spin').toggleClass('non-visible');
				load_article(
					pagination_count,
					$j(this).data('postid'),
					$j(this).data('template'),
					$j(this).data('query-vars')
				);
				pagination_count++;
			}
		});
	}

	var load_article = function (paged, post_id, template, query_vars) {
		var data = {
			action: 'highend_pagination_ajax',
			_ajax_nonce: highend_vars.nonce,
			paged: paged,
			post_id: post_id,
			template: template,
			query_vars: query_vars,
			// category: category,
			// col_count: col_count,
		};

		$j.post(highend_vars.ajaxurl, data, function (response) {
			if ('string' === typeof response && '' !== response.trim()) {
				$j('.load-more-posts > .load-more-text')
					.html(highend_vars.texts['load-more'])
					.show(0);
				$j('.load-more-posts > .hb-spin').addClass('non-visible');
				//jQuery("#hb-blog-posts").append(html);    // This will be the div where our content will be loaded

				var $to_insert = $j(response);
				$container.append($to_insert).isotope('appended', $to_insert);

				$container.imagesLoaded(function () {
					$container.isotope();
				});

				if ($to_insert.find('.hb-flexslider').length) {
					$to_insert.find('.hb-flexslider').trigger('init');
				}
			} else {
				$j('.load-more-posts > .load-more-text')
					.html(highend_vars.texts['no-more-posts'])
					.show(0)
					.parent()
					.addClass('inactive');
				$j('.load-more-posts > .hb-spin').addClass('non-visible');
			}
		});

		return false;
	};
}

function highendStickyHeader() {
	if (document.body.classList.contains('hb-side-navigation')) {
		return;
	}

	var header = document.getElementById('header-inner');
	var headerInner = document.getElementById('header-inner-bg');

	if (null == header || null == headerInner) {
		return;
	}

	if (!header.classList.contains('sticky-nav')) {
		return;
	}

	if (header.classList.contains('nav-type-2')) {
		header = document.querySelector('.main-navigation-container');
		headerInner = document.querySelector('.main-navigation');
	}

	var wpadminbar = document.getElementById('wpadminbar');
	var stickyPosition = headerInner.getBoundingClientRect().top;
	var tolerance;

	if (null === wpadminbar) {
		tolerance = 0;
	} else if (window.outerWidth <= 600) {
		tolerance = 0;
	} else {
		tolerance = wpadminbar.getBoundingClientRect().height;
	}

	var stickyPlaceholder = null;
	var sticky = stickyPosition - tolerance < 0;

	var checkPosition = function () {
		if (null === wpadminbar) {
			tolerance = 0;
		} else if (window.outerWidth <= 600) {
			tolerance = 0;
		} else {
			tolerance = wpadminbar.getBoundingClientRect().height;
		}

		stickyPosition = header.getBoundingClientRect().top;
		sticky = stickyPosition - tolerance < 0;

		maybeStickHeader();
	};

	var maybeStickHeader = function () {
		if (sticky) {
			if (!document.body.classList.contains('highend-sticky-header')) {
				stickyPlaceholder = document.createElement('div');
				stickyPlaceholder.setAttribute('id', 'highend-sticky-placeholder');

				stickyPlaceholder.style.height =
					header.getBoundingClientRect().height + 'px';

				header.appendChild(stickyPlaceholder);

				document.body.classList.add('highend-sticky-header');
			}
		} else {
			if (document.body.classList.contains('highend-sticky-header')) {
				document.body.classList.remove('highend-sticky-header');
				document.getElementById('highend-sticky-placeholder').remove();
			}
		}
	};

	// Initial check.
	maybeStickHeader();

	// Debounce scroll.
	window.addEventListener('scroll', function () {
		highendDebounce(checkPosition());
	});

	// Debounce resize.
	window.addEventListener('resize', function () {
		highendDebounce(checkPosition());
	});
}

/**
 * Re-written in plain JS in v3.6.14.
 */
function highendOnePageNav() {
	if (null == main_wrapper || !main_wrapper.classList.contains('hb-one-page')) {
		return;
	}

	var header = document.getElementById('header-inner');
	var bullets = document.getElementById('hb-one-page-bullets');

	// Calculate scroll offset.
	var getOffset = () => {
		var offset = 0;

		if (header && header.classList.contains('sticky-nav')) {
			offset = parseInt(highend_vars.sticky_header_height);
		}

		if (document.getElementById('wpadminbar')) {
			offset += document.getElementById('wpadminbar').clientHeight;
		}

		return offset;
	};

	// Get offset.
	var offset = getOffset();

	// Add bullets for each one page section.
	document.querySelectorAll('.hb-one-page-section').forEach((item) => {
		var li = document.createElement('li');
		li.classList.add('hb-animate-element', 'top-to-bottom');
		li.setAttribute('rel', 'tooltip');
		li.setAttribute('data-placement', 'right');

		if (item.getAttribute('data-title')) {
			li.setAttribute('title', item.getAttribute('data-title'));
		}

		var anch = document.createElement('a');
		anch.setAttribute('href', '#' + item.getAttribute('id'));

		var i = document.createElement('i');
		i.classList.add('hb-moon-radio-unchecked');

		anch.appendChild(i);
		li.appendChild(anch);
		bullets.append(li);
	});

	// Center bullets vertically.
	bullets.style.marginTop = -(bullets.clientHeight / 2) + 'px';

	// Listen for menu clicks.
	document
		.querySelectorAll(
			'#main-nav li a, #hb-side-menu li a, #hb-one-page-bullets li a'
		)
		.forEach((item) => {
			var section_id = item.getAttribute('href');

			if (section_id.length <= 1 || '#' !== section_id[0]) {
				return;
			}

			var section = document.querySelector(section_id);

			if (section) {
				item.addEventListener('click', (e) => {
					e.preventDefault();

					window.scroll({
						top: section.getBoundingClientRect().top + window.scrollY - offset,
						behavior: 'smooth',
					});
				});
			}
		});
}
