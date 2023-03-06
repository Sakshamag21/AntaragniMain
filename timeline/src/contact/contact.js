import $ from "jquery"
import "./contact.css";
import "./contactCard.css"
 export default function Contact() {
    $(document).ready(function(){
        var contentSection = $('.contactcontent-section');
        var navigation = $('.contactnav');
        
        //when a nav link is clicked, smooth scroll to the section
        navigation.on('click', 'a', function(event){
            event.preventDefault(); //prevents previous event
            smoothScroll($(this.hash));
        });
        
        //update navigation on scroll...
        $(window).on('scroll', function(){
            updateNavigation();
        })
        //...and when the page starts
        updateNavigation();
        ///try comment
        /////FUNCTIONS
        function updateNavigation(){
            contentSection.each(function(){
                var sectionName = $(this).attr('id');
                var navigationMatch = $('nav a[href="#' + sectionName + '"]');
                if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
                      ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
                    {
                        navigationMatch.addClass('.contactactive-section');
                    }
                else {
                    navigationMatch.removeClass('.conatctactive-section');
                }
            });
        }
        function smoothScroll(target){
            $('body,html').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });


  return(<>
    <nav className="contactnav">
	<ul className="contactul">
		<li className="contactli">
			<a href="#section1">
				<span className="contactrect"></span>
				<span className="contactcircle"></span>
				Events and Competitions
			</a>
		</li>
		<li className="contactli">
			<a href="#section2">
				<span className="contactrect"></span>
				<span className="contactcircle"></span>
				Finance
			</a>
		</li>
		<li className="contactli">
			<a href="#section3">
				<span className="contactrect"></span>
				<span className="contactcircle"></span>
				Marketing
			</a>
		</li>
		<li className="contactli">
			<a href="#section4">
				<span className="contactrect"></span>
				<span className="contactcircle"></span>
				Media and Publicity
			</a>
		</li>
		<li className="contactli">
			<a href="#section5">
				<span className="contactrect"></span>
				<span className="contactcircle"></span>
				Public Relations
			</a>

		</li>
        <li className="contactli">
			<a href="#section6">
				<span className="contactrect"></span>
				<span className="contactcircle"></span>
				Show Management
			</a>
		</li>
        <li className="contactli">
			<a href="#section7">
				<span className="contactrect"></span>
				<span className="contactcircle"></span>
				Design
			</a>
		</li>
        <li className="contactli">
			<a href="#section8">
				<span className="contactrect"></span>
				<span className="contactcircle"></span>
				Wen and App
			</a>
		</li>
        <li className="contactli">
			<a href="#section9">
				<span className="contactrect"></span>
				<span className="contactcircle"></span>
				Festival Coordinator
			</a>
		</li>
        
	</ul>
</nav>
<section id="section1" className="contactcontent-section">
<div className="contactcontainer">
<div className="contactpanel">
  <div className="contactring">
    <div className="contactcard contactcard1"></div>
    <div className="contactborder">
      <p className="contacttitle">Brazil</p>
      <div className="contactslide">
        <h6 className="contactpara">Latest Deals from Heathrow</h6>
        <div className="contactline">
          <h6 className="contactpara">OUT</h6> <i className="fa fa-plane" aria-hidden="true"></i>
          <h6 className="contactpara">£849</h6>
        </div>
        <div className="contactline">
          <h6 className="contactpara">RTN</h6> <i className="fa fa-plane" aria-hidden="true"></i>
          <h6 className="contactpara">£659</h6>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="contactpanel">
  <div className="contactring">
    <div className="contactcard contactcard1"></div>
    <div className="contactborder">
      <p className="contacttitle">Brazil</p>
      <div className="contactslide">
        <h6 className="contactpara">Latest Deals from Heathrow</h6>
        <div className="contactline">
          <h6 className="contactpara">OUT</h6> <i className="fa fa-plane" aria-hidden="true"></i>
          <h6 className="contactpara">£849</h6>
        </div>
        <div className="contactline">
          <h6 className="contactpara">RTN</h6> <i className="fa fa-plane" aria-hidden="true"></i>
          <h6 className="contactpara">£659</h6>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="contactpanel">
  <div className="contactring">
    <div className="contactcard contactcard1"></div>
    <div className="contactborder">
      <p className="contacttitle">Brazil</p>
      <div className="contactslide">
        <h6 className="contactpara">Latest Deals from Heathrow</h6>
        <div className="contactline">
          <h6 className="contactpara">OUT</h6> <i className="fa fa-plane" aria-hidden="true"></i>
          <h6 className="contactpara">£849</h6>
        </div>
        <div className="contactline">
          <h6 className="contactpara">RTN</h6> <i className="fa fa-plane" aria-hidden="true"></i>
          <h6 className="contactpara">£659</h6>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
</section>
<section id="section2" className="contactcontent-section">
	<h1>SECTION TWO</h1>
</section>
<section id="section3" className="contactcontent-section">
	<h1>SECTION THREE</h1>
</section>
<section id="section4" className="contactcontent-section">
	<h1>SECTION FOUR</h1>
</section>
<section id="section5" className="contactcontent-section">
	<h1>SECTION FIVE</h1>
</section>
<section id="section6" className="contactcontent-section">
	<h1>SECTION six</h1>
</section>
<section id="section7" className="contactcontent-section">
	<h1>SECTION 7</h1>
</section>
<section id="section8" className="contactcontent-section">
	<h1>SECTION 8</h1>
</section>
<section id="section9" className="contactcontent-section">
	<h1>SECTION 9</h1>
</section>

	<div className="about"><a href="http://janetmndz.com" target="_blank">♡</a></div>

</> )
  }