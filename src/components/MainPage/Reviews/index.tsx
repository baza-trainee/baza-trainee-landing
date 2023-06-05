import styles from './styles.module.scss';

const Reviews = () => {
  const reviewsData = [
    {
      name: 'Denis Solomko',
      specialization: 'QA engineer',
      text: '“This is exactly what I needed. It was that company and the very people who helped me develop my skills and feel confident. Thank you”',
      image: 'a_reviews.jpg',
    },
    {
      name: 'Iryna Korotchaeva',
      specialization: 'UI/UX Designer',
      text: '“It was very interesting to communicate with new people and share knowledge. Thank you for the experience of working in a team“',
      image: 'b_reviews.jpg',
    },
    {
      name: 'Natalia Shapoval',
      specialization: 'Full Stack Developer',
      text: '“Good project, good people. Grateful for new knowledge, received only positive emotions“',
      image: 'c_reviews.jpg',
    },
  ];

  return (
    <section className="container">
      <div className={styles.slider_container}>
        <h3>Відгуки</h3>
        <div className={styles.slider}>
          {reviewsData.map((review, index) => (
            <div className={styles.slider_item} key={index}>
              <div className={styles.slider_item_container}>
                <img src={`/img/${review.image}`} alt="user photo" />
                <div className={styles.user_info}>
                  <h4 className={styles.user_name}>{review.name}</h4>
                  <p className={styles.user_specialization}>
                    {review.specialization}
                  </p>
                </div>
                <div>
                  <p className={styles.user_text}>{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
