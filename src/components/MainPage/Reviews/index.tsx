const Reviews = () => {
  return (
    <section className="container">
      <div className="slider_container">
        <h3>Відгуки</h3>
        <div className="slider">
          <div className="slider_item">
            <div className="slider_item_container">
              <img src="@img/a_reviews.webp" alt="user photo" />
              <div className="user_info">
                <h4 className="user_name">Denis Solomko</h4>
                <p className="user_specialization">QA engineer</p>
              </div>
              <div>
                <p className="user_text">
                  “This is exactly what I needed. It was that company and the
                  very people who helped me develop my skills and feel
                  confident. Thank you”
                </p>
              </div>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_item_container">
              <img src="@img/b_reviews.webp" alt="user photo" />
              <div className="user_info">
                <h4 className="user_name">Iryna Korotchaeva</h4>
                <p className="user_specialization">UI/UX Designer</p>
              </div>
              <div>
                <p className="user_text">
                  “It was very interesting to communicate with new people and
                  share knowledge. Thank you for the experience of working in a
                  team“
                </p>
              </div>
            </div>
          </div>

          <div className="slider_item">
            <div className="slider_item_container">
              <img src="@img/c_reviews.webp" alt="user photo" />
              <div className="user_info">
                <h4 className="user_name">Natalia Shapoval</h4>
                <p className="user_specialization">Full Stack Developer</p>
              </div>
              <div>
                <p className="user_text">
                  “Good project, good people. Grateful for new knowledge,
                  received only positive emotions“
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
