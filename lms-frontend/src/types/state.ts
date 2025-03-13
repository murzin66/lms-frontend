import {store} from '../store/index.js';

export type CourseShortInfo = {
    title: string;
    description: string;
    rating: number;
    difficulty: number;
    id:number;
}

export type CourseType = {
    courseName:string;
    descriptionList: string[],
    documentList: string [],
    videoList: string [],
    courseId:number,
    isCourseDataLoading: boolean,
}

export type User = {
    userId: number;
    isAuth : boolean,
    name : string,
    surname: string,
    middlename: string,
    interests: string,
    email: string,
    photoUrl: string,
    progress: CourseProgress[],
    isUserDataLoading:boolean,
}

export type CourseProgress = {
    CourseName: string,
    moduleProgress: number[];
}
export type CourseList = {
    courseList: CourseShortInfo[];
    isCourseListDataLoading : boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;