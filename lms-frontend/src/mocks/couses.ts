import { CourseShortInfo } from "../types/state";

export type Cource = {
    title: string;
    description: string;
    stars: number;
    difficulty: number;
    id: number;
}
const MockCources = [
    {
        title:"Основы Python",
        description: "Изучите основы программирования на Python.",
        stars: 4,
        difficulty: 20,
        id:1
    },
    {
        title:"Машинное обучение",
        description: "Погрузитесь в мир машинного обучения и нейронных сетей.",
        stars: 5,
        difficulty: 40,
        id:2
    },
    {
        title:"Веб-разработка",
        description: "Создавайте современные веб-приложения с использованием React и Django.",
        stars: 3,
        difficulty: 30,
        id:3
    },
    {
        title:"Базы данных",
        description: "Изучите основы работы с реляционными и NoSQL базами данных.",
        stars: 4,
        difficulty: 25,
        id:4
    },
    {
        title:"DevOps",
        description: "Освойте инструменты для автоматизации разработки и развертывания.",
        stars: 5,
        difficulty: 35,
        id:5
    },
    {
        title:"Алгоритмы и структуры данных",
        description: "Изучите основные алгоритмы и структуры данных для эффективного программирования.",
        stars: 5,
        difficulty: 50,
        id:6
    }
];
export default MockCources;

export const MockProgress = [
    {
      CourseName: "Основы Python",
      moduleProgress: [80, 60, 90, 40],
    },
    {
        CourseName: "Машинное обучение",
        moduleProgress: [50, 30, 70, 20],
    },
    {
        CourseName: "Веб-разработка",
        moduleProgress: [90, 70, 80, 60],
    },
  ];

export const emptyShortInfo:CourseShortInfo = {
    title: "",
    description:"",
    id:0,
    rating:0,
    difficulty:0,
    modules:[]
}

