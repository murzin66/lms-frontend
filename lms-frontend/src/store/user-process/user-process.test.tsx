import { userUpdateInfo, userProcess, getUserProgressAction, getUserInfo, checkAuthAction, logoutAction, enrollAction } from './user-process';
import { mockCourseList, mockUser } from '../../mocks/mock-store';
import { emptyShortInfo } from '../../mocks/couses';
import { mockCourseInfo } from '../../mocks/mock-courses';
import { faker } from '@faker-js/faker';

describe('Course slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isAuth : false,
      name : "",
      surname: "",
      middlename: "",
      interests: "",
      email: "",
      photoUrl: "",
      progress: [],
      isUserDataLoading: false,
      userId:0,
      recommendations: [],
      enrolledCourses: [],
      password:"",
      recommendationTags: []
    }
    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isAuth : false,
      name : "",
      surname: "",
      middlename: "",
      interests: "",
      email: "",
      photoUrl: "",
      progress: [],
      isUserDataLoading: false,
      userId:0,
      recommendations: [],
      enrolledCourses: [],
      password:"",
      recommendationTags: []
    }
    const result = userProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });
  it('should change user info with userUpdateInfo action', () => {
    const expectedResult = {
      isAuth : mockUser.isAuth,
      name : mockUser.name,
      surname: mockUser.surname,
      middlename: mockUser.middlename,
      interests: mockUser.interests,
      email: "",
      photoUrl: mockUser.photoUrl,
      progress: mockUser.progress,
      isUserDataLoading: mockUser.isUserDataLoading,
      userId:mockUser.userId,
      recommendations: mockUser.recommendations,
      enrolledCourses: mockUser.enrolledCourses,
      password:"",
      recommendationTags: mockUser.recommendationTags
    }
  const result = userProcess.reducer(
    undefined,
    userUpdateInfo.fulfilled(
      mockUser, '', mockUser)
  );
    expect(result).toEqual(expectedResult);

  });

  it('should change user info with getUserInfo action', () => {
    const expectedResult = {
      isAuth : mockUser.isAuth,
      name : mockUser.name,
      surname: mockUser.surname,
      middlename: mockUser.middlename,
      interests: mockUser.interests,
      email: mockUser.email,
      photoUrl: mockUser.photoUrl,
      progress: mockUser.progress,
      isUserDataLoading: mockUser.isUserDataLoading,
      userId:mockUser.userId,
      recommendations: mockUser.recommendations,
      enrolledCourses: mockUser.enrolledCourses,
      password:"",
      recommendationTags: mockUser.recommendationTags
    }
  const result = userProcess.reducer(
    undefined,
    getUserInfo.fulfilled(
      mockUser, '', faker.string.sample())
  );
    expect(result).toEqual(expectedResult);

  });

  it('should change user auth status with checkAuthAction action', () => {
    const expectedResult = {
      isAuth : true,
      name : "",
      surname: "",
      middlename: "",
      interests: "",
      email: "",
      photoUrl: "",
      progress: [],
      isUserDataLoading: false,
      userId:0,
      recommendations: [],
      enrolledCourses: [],
      password:"",
      recommendationTags: []
    }
  const result = userProcess.reducer(
    undefined,
    checkAuthAction.fulfilled(
      "", '', "")
  );
    expect(result).toEqual(expectedResult);

  });
  it('should change user auth status with logout action', () => {
    const expectedResult = {
      isAuth : false,
      name : "",
      surname: "",
      middlename: "",
      interests: "",
      email: "",
      photoUrl: "",
      progress: [],
      isUserDataLoading: false,
      userId:0,
      recommendations: [],
      enrolledCourses: [],
      password:"",
      recommendationTags: []
    }
  const result = userProcess.reducer(
    undefined,
    logoutAction.fulfilled(
      undefined, '', "")
  );
    expect(result).toEqual(expectedResult);

  });
  it('should change enrolled courses with enroll action', () => {
    const expectedResult = {
      isAuth : false,
      name : "",
      surname: "",
      middlename: "",
      interests: "",
      email: "",
      photoUrl: "",
      progress: [],
      isUserDataLoading: false,
      userId:0,
      recommendations: [],
      enrolledCourses: mockUser.enrolledCourses,
      password:"",
      recommendationTags: []
    }
    const courseInfo = {
      courseId: mockUser.enrolledCourses[0],
      email: "",
      courseTag: "string"
    }
  const result = userProcess.reducer(
    undefined,
    enrollAction.fulfilled(
      mockUser.enrolledCourses, '', courseInfo)
  );
    expect(result).toEqual(expectedResult);

  });
});