import $ from 'jquery';

const Gallery = () => {
    

  //Count nr. of square classes
  var countSquare = $('.square').length;

  //For each Square found add BG image
  for (let i = 0; i < countSquare; i++) {
    var firstImage = $('.square').eq([i]);
    var secondImage = $('.square2').eq([i]);

    var getImage = firstImage.attr('data-image');
    var getImage2 = secondImage.attr('data-image');

    firstImage.css('background-image', 'url(' + getImage + ')');
    secondImage.css('background-image', 'url(' + getImage2 + ')');
  }

;
    return <div class="centerflipcards">
	<div class="square-flip">
		<div class='square' data-image="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb">
			<div class="square-container">
				<div class="align-center"><img src="http://titanicthemes.com/files/flipbox/kallyas2.png" class="boxshadow" alt=""/></div>
				<h2 class="textshadow">Kallyas Wp Theme</h2>
				<h3 class="textshadow">The #1 Selling Most Enjoyable and Creative Multipurpose WordPress theme.</h3>
			</div>
			<div class="flip-overlay"></div>
		</div>
		<div class='square2' data-image="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb">
			<div class="square-container2">
				<div class="align-center"></div>
				<h2>#1 Front-end Visual Website Builder in 2016</h2>
			</div>
			<div class="flip-overlay"></div>
		</div>
	</div>

	<div class="square-flip">
		<div class='square' data-image="http://titanicthemes.com/files/flipbox/kallyas-bundle.png">
			<div class="square-container">
				<div class="align-center"><img src="http://titanicthemes.com/files/flipbox/kallyas.png" class="boxshadow" alt=""/></div>
				<h2 class="textshadow">Kallyas WordPress Theme</h2>
				<h3 class="textshadow">The #1 Selling Most Enjoyable and Creative Multipurpose WordPress theme.</h3>
			</div>
			<div class="flip-overlay"></div>
		</div>
		<div class='square2' data-image="http://titanicthemes.com/files/flipbox/kallyas-bundle.png">
			<div class="square-container2">
				<div class="align-center"></div>
				<a href="http://kallyas.net" target="_blank" class="boxshadow kallyas-button">View Demos</a>
			</div>
			<div class="flip-overlay"></div>
		</div>
	</div>

	<div class="square-flip">
		<div class='square' data-image="https://instagram.fotp3-2.fna.fbcdn.net/t51.2885-15/e35/14712096_386502691740262_2357154798815412224_n.jpg?ig_cache_key=MTM2NzU2MzUwNjQ3OTUzOTgxNQ%3D%3D.2">
			<div class="square-container">
				<div class="align-center"><img src="http://titanicthemes.com/files/flipbox/kallyas2.png" class="boxshadow" alt=""/></div>
				<h2 class="textshadow">Kallyas WordPress Theme</h2>
				<h3 class="textshadow">The #1 Selling Most Enjoyable and Creative Multipurpose WordPress theme.</h3>
			</div>
			<div class="flip-overlay"></div>
		</div>
		<div class='square2' data-image="http://titanicthemes.com/files/flipbox/kallyas-wedding.jpg">
			<div class="square-container2">
				<div class="align-center"></div>
				<h2>The only theme you'll ever need. No codding skills needed.</h2>
			</div>
			<div class="flip-overlay"></div>
		</div>
	</div>
  
  <div class="clearfix"></div>
  <p>Made with ??? by Nicola Mihaita</p>
  <a href="http://hogash.com" target="_blank">@Hogash.com</a>
  <br/>
  <br/>
  <br/>
  
</div>







  };
  
  export default Gallery;