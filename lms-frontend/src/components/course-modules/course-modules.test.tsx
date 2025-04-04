import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import CourseModule from './course-modules';
import { faker } from '@faker-js/faker';

describe('Component: course-modules', () => {
  it ('should render correct', ()=>{
    const {withStoreComponent} = withStore(<CourseModule title={faker.string.sample()} videoUrl={faker.string.sample()} documentUrl={faker.string.sample()}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const componentText = /Скачать материалы лекции/;
    const videoTestId = "video-container";
    const documentTestId = "document";

    const expectedText= screen.getByText(componentText);
    const videoTest = screen.getByTestId(videoTestId);
    const document = screen.getByTestId(documentTestId);
    expect (expectedText).toBeInTheDocument();
    expect(videoTest).toBeInTheDocument();
    expect(document).toBeInTheDocument();

  })
})
