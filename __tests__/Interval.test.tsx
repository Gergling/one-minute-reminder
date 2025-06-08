import RootLayout from '@/app/_layout';
import { render, screen, userEvent, waitFor } from '@testing-library/react-native';

describe('Interval FAB', () => {
  it('should show a modal when clicked', async () => {
    const user = userEvent.setup();
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