import { faker } from '@faker-js/faker';
import { CourseList, CourseType, SearchResults, User } from '../types/state';
import { emptyShortInfo } from './couses';

export const mockUser:User = {
  isAuth : false,
  name : faker.string.sample(),
  surname: faker.string.sample(),
  middlename: faker.string.sample(),
  interests: faker.string.sample(),
  email: faker.string.sample(),
  photoUrl: faker.string.sample(),
  progress: [],
  isUserDataLoading: false,
  userId: faker.number.int(),
  recommendations: [],
  enrolledCourses: [],
  password: faker.string.sample(),
  recommendationTags: []
}

export const mockCourse:CourseType = {
    courseName: faker.string.sample(),
    descriptionList : [faker.string.sample()],
    documentList : [faker.string.sample()],
    videoList: [faker.string.sample()],
    courseId: faker.number.int(),
    isCourseDataLoading: false,
    shortInfo: emptyShortInfo,
    courseTag: faker.string.sample(),
    competences:[faker.string.sample()],
    longDescription: faker.string.sample()
}

export const mockCourseList: CourseList = {
  courseList: [],
  isCourseListDataLoading: false
}

export const mockSearch: SearchResults = {
  results: [],
  isResultsLoading: false,
  query:faker.string.sample()
}