import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import RecommendedCards from './recommended-cards';
import { faker } from '@faker-js/faker';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Component: RecommendedCards', () => {
  const mockNavigateToCourse = vi.fn();

  const mockRecomendation = {
    title: faker.string.sample(),
    imageUrl: faker.string.sample(),
    description: faker.string.sample(),
    id:faker.number.int()
  }
  it ('should render CourseCard correct', ()=>{
    const {withStoreComponent} = withStore(<RecommendedCards recommended={mockRecomendation} handleRecommendedCourseClickFun={mockNavigateToCourse}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const componentText = /Подробнее/;
    const recommendedCardId = "recommended-card";

    const expectedText= screen.getByText(componentText);
    const recommendedCardTest = screen.getByTestId(recommendedCardId);

    expect (expectedText).toBeInTheDocument();
    expect(recommendedCardTest).toBeInTheDocument();

  })

})
