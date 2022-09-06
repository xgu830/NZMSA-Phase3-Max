import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LogicGameGrid from './components/LogicGameGrid';
import { Provider } from 'react-redux';
import store from './store/rootStore';



test('display GameGrid', () => {
  render(<Provider store={store}>
    <LogicGameGrid width={4} height={4} />
    </Provider>);

  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.4;
  global.Math = mockMath;

  const gameDiv = screen.getByRole("gameDiv");
  let score = screen.getByRole("score");
  let tile = screen.getAllByRole("tile");
  expect(score).toHaveTextContent("Score: 0");
  expect(tile).toHaveLength(2);

  fireEvent.keyDown(gameDiv, {key:"ArrowLeft", keyCode:37});
  fireEvent.keyUp(gameDiv, {key:"ArrowLeft", keyCode:37});
  expect(score).toHaveTextContent("Score: 6");
});
