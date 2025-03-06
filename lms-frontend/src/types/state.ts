import {store} from '../store/index.js';

export type CourseShortInfo = {
    title: string;
    description: string;
    rating: number;
    difficulty: number;
}

export type Course = {
    descriptionList: string[],
    documentList: string [],
    videoList: string [],
}

export type User = {
    isAuth : boolean,
    name : string,
    surname: string,
    middlename: string,
    interests: string,
    email: string,
    photoUrl: string,
}
export type CourseList = {
    courseList: CourseShortInfo[];
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;