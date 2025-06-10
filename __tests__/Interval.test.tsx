/// <reference types="expo-router/types/expect" />

import RootLayout from '@/app/_layout';
import { userEvent } from '@testing-library/react-native';
import { act, renderRouter, screen } from 'expo-router/testing-library';
import { View } from 'react-native';

describe('Interval FAB', () => {
  it('should show a modal when clicked', async () => {
    const MockComponent = jest.fn(() => <View />);
    const MockComponent2 = jest.fn(() => <RootLayout />);
    const user = userEvent.setup();
    renderRouter({
      index: MockComponent2
    }, { initialUrl: '/' });
    // screen.
    // console.log(screen.)
    // const pathname = window.location.pathname;
    // expect(pathname).toBe('/directory/a');
    // expect(screen).toHavePathName('/directory/a');
    // const renderer = await waitFor(() => render(<RootLayout />));
    // const renderer = render(<RootLayout />);
    // await waitFor(() => {
    //   // renderer = render(<RootLayout />);
    //   // renderer = create(<RootLayout />);
    //   // const view = within(renderer!.root);
    // });
    act(() => {
      const [editButton] = screen.getAllByText('Edit Reminder Interval');
    })

    // const editButton = getAllByTestId('fab');
    // act(() => {
    //   user.press(editButton);
    // });
  });
});