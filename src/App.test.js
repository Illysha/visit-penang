import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // For extended assertions
import App from './App';  // Assuming your App is in the App.js file

// Mocking the dynamic content for categories
const mockCategories = {
  "about-us": {
    title: "About Us",
    content: "Welcome to Visit Penang! Our mission is to provide visitors with an unforgettable experience..."
  },
  "food-beverages": {
    title: "Food & Beverages",
    content: "Penang is famous for its vibrant food scene, offering a diverse array of local and international cuisines..."
  },
  "tourist-spots": {
    title: "Tourist Spots",
    content: "Explore the iconic landmarks, beaches, and natural wonders of Penang..."
  },
  "culture-heritage": {
    title: "Culture & Heritage",
    content: "Penang is rich in culture and history, from George Town to traditional festivals..."
  },
  "hotels": {
    title: "Hotels",
    content: "Penang offers a variety of accommodations, from luxurious resorts to budget-friendly hotels..."
  }
};

// Mock loadCategory function to simulate content loading
jest.mock('./App', () => ({
  loadCategory: jest.fn().mockImplementation(categoryId => {
    return mockCategories[categoryId] || { title: 'Not Found', content: 'Category not found' };
  })
}));

test('renders the About Us category by default', () => {
  render(<App />);

  // Check if the default category (About Us) content is displayed
  expect(screen.getByText(/Welcome to Visit Penang/)).toBeInTheDocument();
  expect(screen.getByText(/Our mission is to provide visitors with an unforgettable experience/)).toBeInTheDocument();
});

test('loads the Food & Beverages category when the corresponding link is clicked', () => {
  render(<App />);

  // Simulate a click on the "Food & Beverages" navigation link
  const foodLink = screen.getByText(/Food & Beverages/);
  fireEvent.click(foodLink);

  // Verify that the Food & Beverages content is displayed
  expect(screen.getByText(/Penang is famous for its vibrant food scene/)).toBeInTheDocument();
});

test('shows category not found when invalid category is clicked', () => {
  render(<App />);

  // Simulate a click on an invalid category
  const invalidLink = { getAttribute: jest.fn().mockReturnValue('invalid-category') };  // Simulating an invalid category link
  fireEvent.click(invalidLink);

  // Verify that the "Category not found" message is displayed
  expect(screen.getByText(/Category not found/)).toBeInTheDocument();
});

