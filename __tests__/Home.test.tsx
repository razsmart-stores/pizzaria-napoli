import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock del hook useIsMounted para que siempre retorne 'true' en las pruebas
jest.mock('@/hooks/use-is-mounted', () => ({
  useIsMounted: () => true,
}));

// Mock del módulo next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    resolvedTheme: 'light', // Puedes cambiarlo a 'dark' si quieres probar el tema oscuro
    setTheme: jest.fn(),
  }),
}));

describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Sabor que Inspira/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
