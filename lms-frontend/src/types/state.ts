import {store} from '../store/index.js';

export type CourseShortInfo = {
    title: string;
    description: string;
    rating: number;
    difficulty: number;
    id:number;
    modules: string[];
    courseTag: string;
    imageUrl: string;
}

export type SearchResults = {
    results: CourseShortInfo[];
    isResultsLoading:boolean;
    query: string;
}

export type CourseType = {
    courseName:string;
    descriptionList: string[],
    documentList: string [],
    videoList: string [],
    courseId:number,
    isCourseDataLoading: boolean,
    shortInfo: CourseShortInfo,
    courseTag : string
}
export type Recommendation =  {
    title: string,
    imageUrl: string,
    description: string,
    id:number
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
    recommendations:Recommendation[],
    enrolledCourses: number[],
    password:string,
    recommendationTags: string []
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