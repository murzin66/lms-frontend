import { CourseType } from "../types/state";
const mockCourses: CourseType[] = [
  {
    courseId: 1,
    isCourseDataLoading: false,
    documentList: ["syllabus.pdf", "lecture-notes.docx"],
    videoList: ["intro.mp4", "getting-started.mp4"],
    shortInfo: {
      id: 101,
      title: "Web Development Basics",
      description: "Fundamentals of modern web development",
      rating: 4.7,
      difficulty: 2,
      modules: [
        "HTML Essentials",
        "CSS Fundamentals",
        "JavaScript Basics"
      ],
      courseTag: "Web"
    },
    courseTag:"Web",
    courseName: "",
    descriptionList: []
  },
  {
    courseId: 2,
    isCourseDataLoading: true,
    documentList: ["advanced-js.pdf"],
    videoList: [],
    shortInfo: {
      id: 102,
      title: "Advanced JavaScript",
      description: "Deep dive into modern JavaScript",
      rating: 4.9,
      difficulty: 4,
      modules: [
        "ES6 Features",
        "Functional Programming",
        "Performance Optimization"
      ],
      courseTag: "Web"
    },
    courseName: "",
    descriptionList: [],
    courseTag: "Web"
  }
];