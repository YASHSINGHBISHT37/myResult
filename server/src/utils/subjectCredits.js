// Official credit mapping — GGSIPU BCA Scheme & Syllabus (w.e.f. AS 2024-25)
// Source: http://www.ipu.ac.in/usict/syll4yrBCA240124.pdf
// Covers Semesters I - VIII. Extend this object as new codes are confirmed
// for other programs (MCA, BBA, etc.) using the same pattern.

const subjectCredits = {
  // ---------- Semester I ----------
  BCA101T: 4, // Programming for Problem Solving using C
  BCA103T: 4, // Fundamental of Information Technology
  BCA105T: 4, // Web Technologies
  BCA107T: 4, // Mathematical Foundation for Computer Science
  BCA101P: 2, // Programming for Problem Solving using C Lab
  BCA103P: 2, // Fundamental of Information Technology Lab
  BCA141T: 3, // Writing Skills
  BCA105P: 1, // Web Technologies Lab
  BCA191T: 2, // Understanding India (NUES)
  BCA181T: 0, // Bridge Course in Mathematics (non-credit, mandatory pass)

  // ---------- Semester II ----------
  BCA102T: 4, // Database Management System (DBMS)
  BCA104T: 4, // Object Oriented Programming using Java
  BCA106T: 4, // Data Structures and Algorithms
  BCA108T: 4, // Software Engineering
  BCA102P: 1, // DBMS Lab
  BCA104P: 2, // Object Oriented Programming using Java Lab
  BCA106P: 1, // Data Structures and Algorithms Lab
  BCA108P: 1, // Software Engineering Lab
  BCA142T: 3, // Soft Skills
  BCA192T: 2, // Environment Studies

  // ---------- Semester III ----------
  BCA201T: 4, // Python Programming
  BCA203T: 4, // Dynamic Web Designing
  BCA205T: 4, // Computer Organization and Architecture
  BCA207T: 4, // Discrete Mathematics
  BCA201P: 2, // Python Programming Lab
  BCA203P: 1, // Dynamic Web Designing Lab
  BCA205P: 1, // Computer Organization and Architecture Lab
  BCA261: 4,  // Vocational Course (SEC)
  BCA221T: 3, // Principles of Management & Organizational Behavior (GE-1)
  BCA223T: 3, // Open Elective (GE-1)
  BCA291T: 2, // Human Values and Ethics (NUES)

  // ---------- Semester IV ----------
  BCA202T: 4, // Operating Systems
  BCA204T: 4, // Software Testing
  BCA202P: 1, // Operating Systems Lab
  BCA204P: 1, // Software Testing Lab
  BCA232: 2,  // Introduction to Logic & Critical Thinking
  BCA234: 2,  // Health & Wellness, Yoga Education and Sports & Fitness
  BCA212T: 4, BCA212P: 2, // Introduction to Data Science + Lab
  BCA216T: 4, BCA216P: 2, // Intro to Security, Acts and Cyber Laws + Lab
  BCA218T: 4, BCA218P: 2, // Web Development Using Python + Lab
  BCA220T: 4, BCA220P: 2, // Information Security + Lab
  BCA222T: 3, // Digital Marketing (GE-2)
  BCA224T: 3, // Principles of Accounting (GE-2)
  BCA226T: 3, // Open Elective (GE-2)

  // ---------- Semester V ----------
  BCA301T: 4, // Computer Networks
  BCA303T: 4, // Artificial Intelligence
  BCA301P: 1, // Computer Networks Lab
  BCA303P: 2, // Artificial Intelligence Lab
  BCA305T: 4, BCA305P: 2, // Natural Language Processing + Lab
  BCA307T: 4, BCA307P: 2, // Network Security + Lab
  BCA309T: 4, BCA309P: 2, // Full Stack Development using Java + Lab
  BCA311: 4,  // Summer Training
  BCA313T: 3, // Intro to Management & Entrepreneurship Development (GE-3)
  BCA315T: 3, // MOOC Course (GE-3)

  // ---------- Semester VI ----------
  BCA302T: 4, // Distributed Systems and Cloud Computing
  BCA304T: 4, // Machine Learning
  BCA306T: 4, // Software Project Management
  BCA302P: 1, // Distributed Systems and Cloud Computing Lab
  BCA306P: 1, // Software Project Management Lab
  BCA312T: 4, BCA312P: 2, // Data Visualization & Analytics + Lab
  BCA314T: 4, BCA314P: 2, // Deep Learning with Python + Lab
  BCA316T: 4, BCA316P: 2, // Web Security + Lab
  BCA318T: 4, BCA318P: 2, // Mobile Application Development + Lab
  BCA320: 6,  // Minor Project
  BCA304P: 1, // Machine Learning Lab (SEC)
  BCA374: 2,  // NSS/NCC/Cultural Clubs/Technical Society/Technical Clubs

  // ---------- Semester VII ----------
  BCA401T: 4, // E-Commerce
  BCA403T: 4, // Internet Of Things (IOT)
  BCA401P: 1, // E-Commerce Lab
  BCA403P: 1, // Internet Of Things (IOT) Lab
  BCA405: 6,  // Major Project-1
  BCA461: 2,  // Vocational Course

  // ---------- Semester VIII ----------
  BCA402: 10, // Major Project-2
  BCA404: 10, // Industry Internship Report
};

function getCredits(code) {
  const trimmed = (code || '').trim();

  if (subjectCredits[trimmed] !== undefined) {
    return subjectCredits[trimmed];
  }

  // Fallback guess for any unmapped code (e.g. other programs not yet added)
  if (trimmed.endsWith('P')) return 2;
  if (trimmed.endsWith('T')) return 4;
  return 4;
}

module.exports = { getCredits };