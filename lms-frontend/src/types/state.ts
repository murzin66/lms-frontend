export type CourseShortInfo = {
    title: string;
    description: string;
    rating: number;
    difficulty: number;
}

export type CourseList = {
    courseList: CourseShortInfo[];
};