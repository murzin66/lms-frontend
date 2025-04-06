import { faker } from "@faker-js/faker";
import { CourseType } from "../types/state";
export const mockCourseInfo:CourseType = {
  courseName: faker.string.sample(),
  descriptionList: [],
  documentList: [],
  videoList: [],
  courseId:faker.number.int(),
  isCourseDataLoading: faker.datatype.boolean(),
  shortInfo: {
    title: faker.string.sample(),
    description: faker.string.sample(),
    rating: faker.number.int(),
    difficulty: faker.number.int(),
    id: faker.number.int(),
    modules: [],
    courseTag:faker.string.sample(),
    imageUrl: faker.string.sample()
  },
  courseTag : faker.string.sample(),
  longDescription: faker.string.sample(),
  competences: []
}