function tog ( a ) {
  document.getElementById( "menu" + a ).classList.toggle( "disp" );
  document.getElementById( "click" + a ).classList.toggle( "ani" );
  document.getElementById( "men" + a ).classList.toggle( "ani1" );
}

function none ( a, b, c, d, e, f ) {
  document.getElementById( b ).style.display = 'none';
  document.getElementById( c ).style.display = 'none';
  document.getElementById( d ).style.display = 'none';
  document.getElementById( e ).style.display = 'none';
  document.getElementById( f ).style.display = 'none';
  document.getElementById( a ).style.display = 'block';
}

function high () {
  let a = document.getElementById( "ob0" ).scrollHeight;
  let b = document.getElementById( "ob0" ).clientHeight;
  let c = document.getElementById( "dig" ).offsetHeight;
  let d = document.getElementById( "cand" ).offsetTop;
  let e = document.getElementById( "rec" ).offsetTop;
  let f = document.getElementById( "dig" ).offsetTop;
  let g = document.getElementById( "pff" ).offsetTop;
  let p = document.getElementById( "ob0" ).scrollTop;
  let v = a - b - c;
  if ( p < d ) {
    none( "s51", "s52", "s53", "s54", "s55", "s56" );
  }
  if ( p > d && p < e ) {
    none( "s52", "s51", "s53", "s54", "s55", "s56" );
  }
  if ( p > e && p < f ) {
    none( "s53", "s51", "s52", "s54", "s55", "s56" );
  }
  if ( p > f && p < g ) {
    none( "s54", "s51", "s52", "s53", "s55", "s56" );
  }
  if ( p > g && p < v ) {
    none( "s55", "s51", "s52", "s53", "s54", "s56" );
  }
  if ( p > v ) {
    none( "s56", "s51", "s52", "s53", "s54", "s55" );
  }
}

function check () {
  if ( window.screen.width <= 992 ) {
    if ( document.querySelector( ".template-img-cont" ) ) {
      document.querySelector( ".template-img-cont" ).classList.add( "vis1" );
      document.querySelector( ".template-img-cont" ).classList.add( "ani4" );
    }
    if ( document.querySelector( ".template-p" ) ) {
      document.querySelector( ".template-p" ).classList.add( "vis1" );
      document.querySelector( ".template-p" ).classList.add( "ani2" );
    }
  }
  if ( window.screen.width >= 992 ) {
    if ( document.querySelector( ".template-img-cont" ) ) {
      document.querySelector( ".template-img-cont" ).classList.add( "vis1" );
    }
    if ( document.querySelector( ".template-div" ) ) {
      document.querySelector( ".template-div" ).classList.add( "vis1" );
    }
    if ( document.querySelector( ".template-p" ) ) {
      document.querySelector( ".template-p" ).classList.add( "vis1" );
    }
    if ( document.querySelector( ".template-img-0" ) ) {
      document.querySelector( ".template-img-0" ).classList.add( "vis1" );
    }
    if ( document.getElementById( "ob0" ) ) {
      document.getElementById( "ob0" ).classList.add( "vis1" );
    }
    if ( document.getElementById( "s5" ) ) {
      document.getElementById( "s5" ).classList.add( "vis1" );
    }
  }
}

function sani () {
  if ( window.screen.width <= 992 ) {
    let a = document.querySelector( "header" ).scrollHeight;
    let scroll_pos = window.scrollY + window.innerHeight;
    if ( scroll_pos > document.querySelector( ".template-div" ).offsetTop + a && !document.querySelector( ".template-div" ).querySelector( "ani3" ) ) {
      document.querySelector( ".template-div" ).classList.add( "vis1" );
      document.querySelector( ".template-div" ).classList.add( "ani3" );
    }
    if ( document.getElementById( "home-div" ) ) {
      if ( scroll_pos > document.getElementById( "home-div" ).offsetTop + a && !document.getElementById( "home-div" ).querySelector( "ani0" ) ) {
        document.getElementById( "home-div" ).classList.add( "ani0" );
      }
    }
    if ( document.querySelector( ".template-img-0" ) ) {
      if ( scroll_pos > document.querySelector( ".template-img-0" ).offsetTop + a && !document.querySelector( ".template-img-0" ).querySelector( "ani2" ) ) {
        document.querySelector( ".template-img-0" ).classList.add( "vis1" );
        document.querySelector( ".template-img-0" ).classList.add( "ani2" );
      }
    }
    if ( document.getElementById( "s4" ) ) {
      if ( scroll_pos > document.getElementById( "s4" ).offsetTop + a && !document.getElementById( "ob0" ).querySelector( "ani2" ) ) {
        document.getElementById( "ob0" ).classList.add( "vis1" );
        document.getElementById( "ob0" ).classList.add( "ani2" );
      }
    }
    if ( document.getElementById( "s5" ) ) {
      if ( scroll_pos > document.getElementById( "s5" ).offsetTop + a && !document.getElementById( "s5" ).querySelector( "ani2" ) && !document.getElementById(
          "s51" ).querySelector( "ani3" ) ) {
        document.getElementById( "s5" ).classList.add( "vis1" );
        document.getElementById( "s5" ).classList.add( "ani2" );
        document.getElementById( "s51" ).classList.add( "ani0" );
      }
    }
  }
}
