import RootLayout from '@/app/_layout';
import { render, userEvent, waitFor } from '@testing-library/react-native';
import { renderRouter, screen } from 'expo-router/testing-library';
import { View } from 'react-native';

describe('Interval FAB', () => {
  it('should show a modal when clicked', async () => {
    const MockComponent = jest.fn(() => <View />);
    const user = userEvent.setup();
    renderRouter({
      index: MockComponent
    }, { initialUrl: '/' });
    // expect(screen).toHavePathName('/directory/a');
    const renderer = await waitFor(() => render(<RootLayout />));
    // const renderer = render(<RootLayout />);
    // await waitFor(() => {
    //   // renderer = render(<RootLayout />);
    //   // renderer = create(<RootLayout />);
    //   // const view = within(renderer!.root);
    // });
    const [editButton] = screen.getAllByText('Edit Reminder Interval');

    // const editButton = getAllByTestId('fab');
    // act(() => {
    //   user.press(editButton);
    // });
  });
});