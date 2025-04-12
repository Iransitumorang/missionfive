import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Data statis untuk contoh
  const courseData = {
    title: 'Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager',
    description: 'Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali kamu dengan keterampilan yang dibutuhkan untuk memulai perjalanan profesional baru di bidang desain pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan pengguna dengan produk seperti situs web, aplikasi seluler, dan objek fisik. Desainer UX membuat desain-desain ini, dapat diprediksi, menyenangkan, dan dapat diakses. Peran seorang desainer UX begitu penting mengingat kemajuan teknologi yang semakin pesat mengharuskan kita untuk dapat menggunakan produk digital dengan mudah. Kursus ini akan membantu kamu memulai perjalanan untuk mendapatkan karier baru.',
    rating: 3.5,
    reviews: '(5.0K)',
    price: 250000,
    instructor: [
      {
        name: 'Gregorius Edrik Lawanto',
        role: 'Senior Talent Acquisition di WingsGroup',
        experience: 'Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.',
        image: 'https://example.com/instructor1.jpg'
      },
      {
        name: 'Gregorius Edrik Lawanto',
        role: 'Senior Talent Acquisition di WingsGroup',
        experience: 'Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.',
        image: 'https://example.com/instructor2.jpg'
      }
    ],
    courseInfo: {
      userCount: '49',
      videoCount: '49 Video',
      documentCount: '7 Dokumen',
      certificateAvailable: true,
      language: 'Bahasa Indonesia'
    },
    curriculum: [
      {
        title: 'Introduction to Course 1: Foundations of User Experience Design',
        lessons: [
          {
            title: 'The basics of user experience design',
            duration: '12 Menit',
            type: 'Video'
          },
          {
            title: 'Jobs in the field of user experience',
            duration: '12 Menit',
            type: 'Video'
          },
          {
            title: 'The product development life cycle',
            duration: '12 Menit',
            type: 'Video'
          }
        ]
      },
      {
        title: 'Universal design, Inclusive design, and equity-focused design',
        lessons: []
      },
      {
        title: 'Introduction to design sprints',
        lessons: []
      },
      {
        title: 'Introduction to UX research',
        lessons: []
      }
    ],
    relatedCourses: [
      {
        id: 1,
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: 'Jenna Ortega',
        rating: 4.6,
        reviews: '(84)',
        price: 300000,
        image: '/path/to/course1.jpg'
      },
      {
        id: 2,
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: 'Jenna Ortega',
        rating: 4.6,
        reviews: '(84)',
        price: 300000,
        image: '/path/to/course2.jpg'
      },
      {
        id: 3,
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: 'Jenna Ortega',
        rating: 4.6,
        reviews: '(84)',
        price: 300000,
        image: '/path/to/course3.jpg'
      }
    ]
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : 'empty'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-detail">
      <Header />
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1>{courseData.title}</h1>
          <p>Belajar bersama tutor profesional di Video Course.</p>
          <p>Kepuasan dijaminkan.</p>
          <div className="rating">
            {renderStars(courseData.rating)}
            <span className="reviews">{courseData.reviews}</span>
          </div>
        </div>
      </div>

      <div className="container main-content">
        <div className="row">
          <div className="col-md-8">
            {/* Deskripsi */}
            <section className="description-section">
              <h2>Deskripsi</h2>
              <p>{courseData.description}</p>
            </section>

            {/* Belajar bersama Tutor Professional */}
            <section className="tutors-section">
              <h2>Belajar bersama Tutor Professional</h2>
              <div className="tutors-grid">
                {courseData.instructor.map((tutor, index) => (
                  <div key={index} className="tutor-card">
                    <div className="tutor-info">
                      <img src={tutor.image} alt={tutor.name} className="tutor-image" />
                      <div className="tutor-details">
                        <h3>{tutor.name}</h3>
                        <p className="role">{tutor.role}</p>
                        <p className="experience">{tutor.experience}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Kamu akan Mempelajari */}
            <section className="curriculum-section">
              <h2>Kamu akan Mempelajari</h2>
              {courseData.curriculum.map((section, index) => (
                <div key={index} className="curriculum-item">
                  <div className="curriculum-header">
                    <h3>{section.title}</h3>
                    <i className="arrow-icon">▼</i>
                  </div>
                  {section.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="lesson-item">
                      <div className="lesson-info">
                        <i className="video-icon">▶</i>
                        <span>{lesson.title}</span>
                      </div>
                      <span className="duration">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              ))}
            </section>
          </div>

          <div className="col-md-4">
            {/* Course Info Card */}
            <div className="course-info-card">
              <h2>Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager</h2>
              <div className="price">Rp {courseData.price.toLocaleString()}</div>
              <p className="promo">Penawaran spesial hanya 2 hari lagi!</p>
              <button 
                className="btn-beli"
                onClick={() => navigate('/metode')}
              >
                Beli Sekarang
              </button>

              <div className="course-stats">
                <h3>Kelas ini Sudah Memenuhi</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <i className="user-icon">👤</i>
                    <span>{courseData.courseInfo.userCount} User Aktif</span>
                  </div>
                  <div className="stat-item">
                    <i className="video-icon">🎥</i>
                    <span>{courseData.courseInfo.videoCount}</span>
                  </div>
                  <div className="stat-item">
                    <i className="doc-icon">📄</i>
                    <span>{courseData.courseInfo.documentCount}</span>
                  </div>
                  <div className="stat-item">
                    <i className="cert-icon">🎓</i>
                    <span>Sertifikat</span>
                  </div>
                </div>

                <div className="language-info">
                  <h3>Bahasa Pengantar</h3>
                  <div className="language">
                    <i className="lang-icon">🌐</i>
                    <span>{courseData.courseInfo.language}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        <section className="related-courses">
          <h2>Video Pembelajaran Terkait Lainnya</h2>
          <div className="row">
            {courseData.relatedCourses.map((course, index) => (
              <div key={index} className="col-md-4">
                <div className="course-card">
                  <img src={course.image} alt={course.title} className="course-image" />
                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="instructor-info">
                      <img src="/path/to/instructor.jpg" alt={course.instructor} />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="course-footer">
                      <div className="rating">
                        {renderStars(course.rating)}
                        <span>{course.reviews}</span>
                      </div>
                      <div className="price">Rp {course.price.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail; 