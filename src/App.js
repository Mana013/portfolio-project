import React, { useState, useEffect} from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Modal, Carousel } from 'react-bootstrap';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import profilePic from './assets/profile.jpg';

import project1_img1 from './assets/project1_img1.jpg';
import project1_img2 from './assets/project1_img2.jpg';
import project1_img3 from './assets/project1_img3.jpg';
import project1_img4 from './assets/project1_img4.jpg';

import project2_img1 from './assets/project2_img1.jpg';
import project2_img2 from './assets/project2_img2.jpg';
import project2_img3 from './assets/project2_img3.jpg';

import project3_img1 from './assets/project3_img1.jpg';
import project3_img2 from './assets/project3_img2.jpg';

function App() {
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
 
  // Particle Animation Effect
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js";
    script.async = true;
    script.onload = () => {
      window.particlesJS("particles-container", {
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { speed: 1 }
        }
      });
    };
    document.body.appendChild(script);
  }, []);

  const projects = [
    {
      title: 'การแข่งขัน Cloud Computing ระดับภาคกลาง',
      images: [project1_img1, project1_img2, project1_img3, project1_img4],
      description: 'แข่งขันการจัดการระบบ Cloud Computing ในระดับภาคกลาง.',
      details: (
        <>
          <h5>🏆 การแข่งขัน Cloud Computing ระดับภาคกลาง</h5>
          <p><strong>📌 โจทย์การแข่งขัน</strong><br />
          ออกแบบและติดตั้งระบบ Cloud ให้ทำงานได้อย่างเสถียรและปลอดภัย</p>
          <p><strong>💼 บทบาทของผม</strong></p>
          <ul>
            <li>ติดตั้งและดูแล Web Server และ Database</li>
            <li>ตั้งค่า Load Balancer เพื่อรองรับการใช้งานจำนวนมาก</li>
            <li>ทดสอบและแก้ไขปัญหาระหว่างการแข่งขัน</li>
          </ul>
          <p><strong>⏳ ระยะเวลาเตรียมตัว</strong></p>
          <ul>
            <li>เตรียมตัวก่อนแข่งขัน 1 เดือน</li>
            <li>แข่งขันจริง 1 วัน</li>
          </ul>
          <p><strong>🎯 สิ่งที่ได้รับจากการแข่งขัน</strong></p>
          <ul>
            <li>แก้ไขปัญหาเฉพาะหน้า (กรณีระบบล่ม)</li>
            <li>ทำงานเป็นทีมภายใต้เวลาจำกัด</li>
          </ul>
          <p><strong>🥇 ความสำเร็จ</strong><br />
          ได้รับรางวัลชนะเลิศอันดับ 1 จากผู้เข้าแข่งขันทั้งหมด 12 ทีม</p>
        </>
      ),
    },

    {
      title: 'การแข่งขัน Cloud Computing ระดับประเทศ',
      images: [project2_img1, project2_img2, project2_img3],
      description: 'การแข่งขันวางระบบ Cloud Computing ระดับประเทศ ณ จังหวัดระยอง.',
      details: (
        <>
          <h5>🏆 การแข่งขัน Cloud Computing ระดับประเทศ</h5>
          <p><strong>📌 โจทย์การแข่งขัน</strong><br />
          ออกแบบและติดตั้งระบบ Cloud รองรับผู้ใช้งานจำนวนมาก พร้อมระบบสำรองข้อมูลและความปลอดภัยขั้นสูง</p>
          <p><strong>💼 บทบาทของผม</strong></p>
          <ul>
            <li>ใช้ Log Management ตรวจสอบและแก้ไขปัญหา</li>
            <li>ติดตั้ง Kubernetes Cluster เพื่อบริหารจัดการ Container</li>
            <li>สร้างและดูแล Docker Container สำหรับรันแอปพลิเคชัน</li>
          </ul>
          <p><strong>⏳ ระยะเวลาเตรียมตัว</strong></p>
          <ul>
            <li>เตรียมตัวก่อนแข่งขัน 1 สัปดาห์</li>
            <li>อบรมก่อนแข่งขัน 1 วัน</li>
            <li>แข่งขันจริง 1 วัน</li>
          </ul>
          <p><strong>🎯 สิ่งที่ได้รับจากการแข่งขัน</strong></p>
          <ul>
            <li>ประสบการณ์จากการทำงานกับระบบขนาดใหญ่</li>
            <li>พัฒนาทักษะการใช้ Docker และ Log Management</li>
            <li>ฝึกแก้ปัญหาเฉพาะหน้า แม้ระบบยังไม่ครบถ้วนตามโจทย์</li>
          </ul>
          <p><strong>🏅 ความสำเร็จ</strong><br />
          ได้รับรางวัลอันดับ 7 จากผู้เข้าแข่งขันทั้งหมด 14 ทีม</p>
        </>
      ),
    },
    {
      title: 'เข้าร่วมโครงการ IT Career Camp กับบริษัท โตเกียวมารีนประกันชีวิต (ประเทศไทย) จำกัด (มหาชน)',
      images: [project3_img1, project3_img2],
      description: 'เข้าร่วมอบรมและแข่งขันเพื่อพัฒนาทักษะในองค์กรระดับโลก.',
      details: (
        <>
          <h5>🏆 โครงการ IT Career Camp – Tokio Marine Life Insurance</h5>
          <p><strong>📌 กิจกรรมและการอบรม</strong></p>
          <ul>
            <li>ฝึกปฏิบัติงานในตำแหน่ง Software Tester</li>
            <li>เรียนรู้กระบวนการทำงานด้าน IT ในองค์กร</li>
            <li>ค้นหาสายงานที่เหมาะสมผ่านแบบทดสอบ MBTI</li>
            <li>ร่วม Workshop และแข่งขัน Hackathon สร้างนวัตกรรมใหม่</li>
          </ul>
          <p><strong>🎯 สิ่งที่ได้รับจากโครงการ</strong></p>
          <ul>
            <li>ประสบการณ์ทำงานจริงกับองค์กรประกันชีวิตระดับโลก</li>
            <li>เสริมทักษะสายงาน Software Tester และการทำงานร่วมกับทีม Developer</li>
            <li>พัฒนาทักษะการวางแผน แก้ปัญหา และนำเสนอผลงานใน Hackathon</li>
            <li>เข้าใจภาพรวมการทำงานในองค์กร IT ขนาดใหญ่</li>
          </ul>
          <p><strong>🥇 ความสำเร็จ</strong><br />
          ได้รับรางวัลชนะเลิศอันดับ 1 จาก 7 ทีม และได้โควต้าฝึกงานกับบริษัท โตเกียวมารีนประกันชีวิต (ประเทศไทย) จำกัด (มหาชน)</p>
        </>
      ),
    },

  ];

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="app-bg">
      {/* Navbar */}
      <Navbar expand="lg" variant="dark" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#">MyPortfolio</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero text-center">
        <div id="particles-container"></div>
        <Container>
          <h1 className="glow-text">Hello, I'm Dream</h1>
          
        </Container>
      </section>

      {/* About Me */}
      <section id="about" className="glassmorphism py-5">
        <Container>
          <h2 className="text-center mb-4">About Me</h2>
          <Row className="align-items-center">
            <Col md={5}>
              <img src={profilePic} alt="Profile" className="img-fluid rounded shadow" />
            </Col>
            <Col md={7}>
              <p>สวัสดีครับ ผมชื่อ <strong>มานะ นชุสวาท</strong> หรือ <strong>“ดรีม”</strong> สนใจงานด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์ โดยเฉพาะคอมพิวเตอร์และ Cloud Computing.</p>
              {showMore && (
                <div className="about-more">
                  <p>
                  จบ ปวส. อิเล็กทรอนิกส์ จากวิทยาลัยเทคนิคสุพรรณบุรี และตอนนี้กําลังศึกษาอยู่ที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ ในระดับปริญญาตรี
                    ได้เข้ารวมการอบรมและแข่งขันจากบริษัท โตเกียวมารีนประกันชีวิต (ประเทศไทย) จำกัด มหาชน พร้อมประสบการณ์แข่งขัน Cloud Computing 
                    ทั้งระดับจังหวัด ภูมิภาค และประเทศ .
                  </p>
                  <p>
                    ผมเป็นคนที่ชอบเรียนรู้และพัฒนาตัวเองเสมอ ตั้งใจจะเติบโตในสายงานเทคโนโลยีและพัฒนาเป็นมืออาชีพ.
                  </p>
                </div>
              )}
              <Button variant="primary" onClick={() => setShowMore(!showMore)} className="mt-3">
                {showMore ? 'แสดงน้อยลง' : 'อ่านเพิ่มเติม'}
              </Button>

            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
  <Container>
    <h2 className="text-center mb-5">My Projects</h2>
    {projects.map((project, index) => (
      <Row key={index} className="align-items-center mb-5">
        {/* สลับตำแหน่งรูปภาพกับข้อความโดยเช็ค index */}
        {index % 2 === 0 ? (
          <>
            <Col md={6}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Button variant="primary" onClick={() => handleShowModal(project)}>
                ดูรายละเอียด
              </Button>
            </Col>
            <Col md={6}>
              <img
                src={project.images[0]}
                className="d-block w-100 rounded shadow-sm"
                alt={`${project.title} preview`}
              />
            </Col>
          </>
        ) : (
          <>
            <Col md={6} className="order-md-2">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Button variant="primary" onClick={() => handleShowModal(project)}>
                ดูรายละเอียด
              </Button>
            </Col>
            <Col md={6} className="order-md-1">
              <img
                src={project.images[0]}
                className="d-block w-100 rounded shadow-sm"
                alt={`${project.title} preview`}
              />
            </Col>
          </>
        )}
      </Row>
    ))}
  </Container>
</section>


      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
  {selectedProject && (
    <>
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>{selectedProject.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-glass">
        <Row className="align-items-center">
          <Col md={6}>
            <h5 className="mb-3">{selectedProject.description}</h5>
            <p className="fs-5">{selectedProject.details}</p>
          </Col>
          <Col md={6}>
            <Carousel fade>
              {selectedProject.images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img src={img} className="d-block w-100 rounded shadow-sm" alt={`Slide ${idx + 1}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>ปิด</Button>
      </Modal.Footer>
    </>
  )}
</Modal>


      {/* Contact Section */}
      <section id="contact" className="py-5 text-center">
  <Container>
    <h2>Contact Me</h2>
    <p>Email: manaza17801524@gmail.com</p>
    <p>โทร: 092-498-9005</p>
    <div className="social-icons">
      <a href="https://www.facebook.com/d.dream.mn/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a href="https://github.com/Mana013" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a href="https://www.instagram.com/id.drxam/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram fa-2x"></i>
      </a>
    </div>
  </Container>
</section>


      {/* Footer */}
      <footer className="py-3 text-center">
        <Container>
          <p>&copy; {new Date().getFullYear()} Mana Nutsawat (ดรีม). All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
