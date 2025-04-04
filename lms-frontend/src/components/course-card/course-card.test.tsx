import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import CourseCard from './course-card';
import { faker } from '@faker-js/faker';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Component: CourseCard', () => {
  const mockNavigateToCourse = vi.fn();

  it ('should render CourseCard correct', ()=>{
    const {withStoreComponent} = withStore(<CourseCard title={faker.string.sample()} description={faker.string.sample()} stars = {faker.number.int()} difficulty={faker.number.int()} id = {faker.number.int()} navigateToCourseFun={mockNavigateToCourse}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const componentText = /Трудоемкость/;
    const starsTestId = "stars";
    const hoursTestId = "hours";

    const expectedText= screen.getByText(componentText);
    const videoTest = screen.getByTestId(starsTestId);
    const document = screen.getByTestId(hoursTestId);
    expect (expectedText).toBeInTheDocument();
    expect(videoTest).toBeInTheDocument();
    expect(document).toBeInTheDocument();

  })
  it ('should handle click on course card', async ()=>{
    const {withStoreComponent} = withStore(<CourseCard title={faker.string.sample()} description={faker.string.sample()} stars = {faker.number.int()} difficulty={faker.number.int()} id = {faker.number.int()} navigateToCourseFun={mockNavigateToCourse}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const courseTitleTestId = "course-title";
    const courseTitle = screen.getByTestId(courseTitleTestId);

    await userEvent.click(courseTitle);
    expect(mockNavigateToCourse).toHaveBeenCalledTimes(1);

  })
})
