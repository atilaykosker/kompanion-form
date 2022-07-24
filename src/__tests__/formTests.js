// /**
//  * @jest-environment jsdom
//  */
/* eslint-disable-next-line */
/* eslint-disable testing-library/no-render-in-setup */

import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { localeTexts } from '../assets/strings';
import App from '../App';
import AppWrapper from '../hoc/AppWrapper';

// eslint-disable-next-line no-undef
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe('Form component', () => {
  let alertMock;
  let inputHeight;
  let inputWeight;
  let nextButton;

  beforeEach(() => {
    render(
      <AppWrapper>
        <App />
      </AppWrapper>
    );
    //Mocks
    alertMock = jest.spyOn(window, 'alert').mockImplementation();
    //Elements
    inputHeight = screen.getByPlaceholderText(localeTexts['EN'].height);
    inputWeight = screen.getByPlaceholderText(localeTexts['EN'].weight);
    nextButton = screen.getByText(localeTexts['EN'].next);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders first step in default language', () => {
    expect(screen.getByText(localeTexts['EN'].step1Title)).toBeInTheDocument();
  });

  it('alerts on all fields are not filled', () => {
    fireEvent.click(nextButton);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  it('changes language on change language button', () => {
    const button = screen.getByText(/🇸🇦/i);
    fireEvent.click(button);
    expect(screen.getByText(localeTexts['AR'].step1Title)).toBeInTheDocument();
  });

  it('pass to next step on filled all inputs', async () => {
    fireEvent.change(inputWeight, { target: { value: '80' } });
    fireEvent.change(inputHeight, { target: { value: '120' } });
    fireEvent.click(nextButton);
    const expectedText = await screen.findByText(localeTexts['EN'].step2Title);

    expect(alertMock).toHaveBeenCalledTimes(0);
    expect(expectedText).toBeInTheDocument();
  });

  it('holds the previous values when return to back step', async () => {
    fireEvent.change(inputWeight, { target: { value: '80' } });
    fireEvent.change(inputHeight, { target: { value: '120' } });

    fireEvent.click(nextButton);
    fireEvent.click(screen.getByText(localeTexts['EN'].back));
    await waitFor(() => {
      const updatedInputWeight = screen.getByPlaceholderText(localeTexts['EN'].weight);

      expect(updatedInputWeight).toHaveValue(80);
    });
    await waitFor(() => {
      const updatedInputHeight = screen.getByPlaceholderText(localeTexts['EN'].height);
      expect(updatedInputHeight).toHaveValue(120);
    });
  });
});
