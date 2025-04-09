import { datatype } from 'faker';
import { SliceHeadersNamespace } from '../mocks/sliceHeaders';
import { getUserName, getUserSurname, getUserMiddleName, getUserEmail, getUserInterests, getUserId, getUserProgress, isUserAuth, getRecommendations, getEnrolledCourses, getCourseDescription, getCourseDocuments, getCourseVideos, getCourse, getCourseList, getSearchResults, getQuery, isDataLoading, getUserTag } from './selectors';
import { mockCourseList, mockSearch } from '../mocks/mock-store';
import { emptyShortInfo } from '../mocks/couses';

// Тесты для слайса User
describe('UserProcess selectors', () => {
  it('should return user name', () => {
    const userName = datatype.string();
    const state = {
      [SliceHeadersNamespace.User]: {
        name: userName,
        surname: '',
        middlename: '',
        email: '',
        interests: "",
        userId: 1,
        progress: [],
        isAuth: false,
        recommendations: [],
        enrolledCourses: [],
        recommendationTags: [],
        isUserDataLoading: false,
        photoUrl:"",
        password:""
      }
    };

    const result = getUserName(state);
    expect(result).toBe(userName);
  });

  it('should return user surname', () => {
    const userSurname = datatype.string();
    const state = {
      [SliceHeadersNamespace.User]: {
        name: '',
        surname: userSurname,
        middlename: '',
        email: '',
        interests: "",
        userId: 1,
        progress: [],
        isAuth: false,
        recommendations: [],
        enrolledCourses: [],
        recommendationTags: [],
        isUserDataLoading: false,
        photoUrl:"",
        password:""
      }
    };

    const result = getUserSurname(state);
    expect(result).toBe(userSurname);
  });

  it('should return user middle name', () => {
    const userMiddleName = datatype.string();
    const state = {
      [SliceHeadersNamespace.User]: {
        name: '',
        surname: '',
        middlename: userMiddleName,
        email: '',
        interests: "",
        userId: 1,
        progress: [],
        isAuth: false,
        recommendations: [],
        enrolledCourses: [],
        recommendationTags: [],
        isUserDataLoading: false,
        photoUrl:"",
        password:""
      }
    };

    const result = getUserMiddleName(state);
    expect(result).toBe(userMiddleName);
  });

  it('should return user email', () => {
    const userEmail = datatype.string();
    const state = {
      [SliceHeadersNamespace.User]: {
        name: '',
        surname: '',
        middlename: '',
        email: userEmail,
        interests: "",
        userId: 1,
        progress: [],
        isAuth: false,
        recommendations: [],
        enrolledCourses: [],
        recommendationTags: [],
        isUserDataLoading: false,
        photoUrl:"",
        password:""
      }
    };

    const result = getUserEmail(state);
    expect(result).toBe(userEmail);
  });

  it('should return user interests', () => {
    const userInterests = datatype.string();
    const state = {
      [SliceHeadersNamespace.User]: {
        name: '',
        surname: '',
        middlename: '',
        email: '',
        interests: userInterests,
        userId: 1,
        progress: [],
        isAuth: false,
        recommendations: [],
        enrolledCourses: [],
        recommendationTags: [],
        isUserDataLoading: false,
        photoUrl:"",
        password:""
      }
    };

    const result = getUserInterests(state);
    expect(result).toEqual(userInterests);
  });

  it('should return user ID', () => {
    const userId = datatype.number();
    const state = {
      [SliceHeadersNamespace.User]: {
        name: '',
        surname: '',
        middlename: '',
        email: '',
        interests: "",
        userId: userId,
        progress: [],
        isAuth: false,
        recommendations: [],
        enrolledCourses: [],
        recommendationTags: [],
        isUserDataLoading: false,
        photoUrl:"",
        password:""
      }
    };

    const result = getUserId(state);
    expect(result).toBe(userId);
  });

  it('should return user progress', () => {
    const state = {
      [SliceHeadersNamespace.User]: {
        name: '',
        surname: '',
        middlename: '',
        email: '',
        interests: "",
        userId: 1,
        progress: [],
        isAuth: false,
        recommendations: [],
        enrolledCourses: [],
        recommendationTags: [],
        isUserDataLoading: false,
        photoUrl:"",
        password:""
      }
    };

    const result = getUserProgress(state);
    expect(result).toEqual([]);
  });

  it('should return user recommendations', () => {
    const state = {
      [SliceHeadersNamespace.User]: {
        name: '',
        surname: '',
        middlename: '',
        email: '',
        interests: "",
        userId: 1,
        progress: [],
        isAuth: false,
        recommendations: [],
        enrolledCourses: [],
        recommendationTags: [],
        isUserDataLoading: false,
        photoUrl:"",
        password:""
      }
    };

    const result = getRecommendations(state);
    expect(result).toEqual([]);
  });

  it('should return enrolled courses', () => {
    const state = {
      [SliceHeadersNamespace.User]: {
        name: '',
        surname: '',
        middlename: '',
        email: '',
        interests: "",
        userId: 1,
        progress: [],
        isAuth: false,
        recommendations: [],
        enrolledCourses: [],
        recommendationTags: [],
        isUserDataLoading: false,
        photoUrl:"",
        password:""
      }
    };

    const result = getEnrolledCourses(state);
    expect(result).toEqual([]);
  });
});

describe('CourseSelectors', () => {
  it('should return course description', () => {
    const description = ['Course description'];
    const state = {
      [SliceHeadersNamespace.Course]: {
        descriptionList: description,
        documentList: [],
        videoList: [],
        isCourseDataLoading: false,
        courseName: "",
        courseId: 1,
        courseTag: "",
        shortInfo: emptyShortInfo,
        longDescription:"",
        competences: []
      }
    };

    const result = getCourseDescription(state);
    expect(result).toEqual(description);
  });

  it('should return course documents', () => {
    const documents = ['Course document'];
    const state = {
      [SliceHeadersNamespace.Course]: {
        descriptionList: [],
        documentList: documents,
        videoList: [],
        isCourseDataLoading: false,
        courseName: "",
        courseId: 1,
        courseTag: "",
        shortInfo: emptyShortInfo,
        longDescription:"",
        competences: []
      }
    };

    const result = getCourseDocuments(state);
    expect(result).toEqual(documents);
  });

  it('should return course videos', () => {
    const videos = ['Course video'];
    const state = {
      [SliceHeadersNamespace.Course]: {
        descriptionList: [],
        documentList: [],
        videoList: videos,
        isCourseDataLoading: false,
        courseName: "",
        courseId: 1,
        courseTag: "",
        shortInfo: emptyShortInfo,
        longDescription:"",
        competences: []
      }
    };

    const result = getCourseVideos(state);
    expect(result).toEqual(videos);
  });

  it('should return course list', () => {
    const state = {
      [SliceHeadersNamespace.CourseList]: {
        courseList: [],
        isCourseListDataLoading: false
      }
    };

    const result = getCourseList(state);
    expect(result).toEqual([]);
  });
});

describe('SearchResultsSelectors', () => {
  it('should return search results', () => {
    const state = {
      [SliceHeadersNamespace.SearchResults]: {
        results: [],
        query: '',
        isResultsLoading: false,
      }
    };

    const result = getSearchResults(state);
    expect(result).toEqual([]);
  });

  it('should return search query', () => {
    const query = 'Search query';
    const state = {
      [SliceHeadersNamespace.SearchResults]: {
        results: [],
        query: query,
        isResultsLoading: false,
      }
    };

    const result = getQuery(state);
    expect(result).toBe(query);
  });
});
