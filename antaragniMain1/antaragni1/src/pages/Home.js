const Home = () => {
    return <div>
<section className="aboutus">

<h3 className="headingM">About Us</h3>
<div className="profile__inner profile_grid">
<div className="profile__img"><img src="https://mir-s3-cdn-cf.behance.net/projects/404/03436d24577467.55090e64d6daf.jpg" alt=""/></div>
<div className="profile__text">
    <p>Antaragni - the annual cultural festival of IIT Kanpur - is one of the largest and most anticipated festivals throughout Asia. Translated literally
     to 'The Fire Within', everyone associated will feel inside. Continuing its rich legacy of 55 years, Antaragni combines the zeal and desire of the students 
     of IIT Kanpur and across India to showcase and celebrate their amazing cultural talent as it has evolved to be a platform for global cultural interaction 
     over the years. It has been the touchstone of India's college cultural heritage.</p>
    
    <ul className="snslist flex">
      <li className="snslist__item twitter"><a href=""><i className="lab la-twitter"></i></a></li>
      <li className="snslist__item instagram"><a href=""><i className="lab la-instagram"></i></a></li>
      <li className="snslist__item facebook"><a href=""><i className="lab la-facebook-square"></i></a></li>
      <li className="snslist__item youtube"><a href=""><i className="lab la-youtube"></i></a></li>
    </ul>
  </div>
  </div>
</section>

<section className="cardstats">
<div className="slider">
<div className="container">
<div className="slide x"></div>
<div className="slide y"></div>
<div className="slide z"></div>
</div>
<div className="shadow"></div>
</div>


</section>
 </div> };
  
  export default Home;