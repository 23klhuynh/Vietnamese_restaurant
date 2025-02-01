function About() {
  return (
    <div className="about" id="about">
      <div className="about__info px-5">
        <h1 className="about__title text-3xl md:text-3xl lg:text-4xl xl:text-4xl border-black border-b mb-3 pb-2 ">
          Our Story
        </h1>
        <p className="about__description text-md md:text-lg lg:text-xl xl:text-xl">
          Hello everyone! We are a newly opened Vietnamese restaurant in
          Morehead City, proudly known as Pho Viet. As the current only
          Vietnamese restaurant in town, we're dedicated to bringing authentic
          flavors straight from Vietnam to your table. Indulge in our signature
          pho, delicious spring rolls, and more in our cozy, welcoming
          atmosphere. Thank you for choosing Pho Viet—we can't wait to serve
          you!
        </p>
      </div>
      <div className="about__image px-5">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5e9cc867fc1ed61396d372b1/ed4e8462-a7d6-4790-a383-c6e084b592af/ngon_thaninphoto_june2020_0352.jpg"
          className="about__image"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
