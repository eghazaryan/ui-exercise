import { ThemeProvider } from "./ThemeProvider";
import { FishingSpots } from "./pages/fishing-spots";

export default function App() {
  return (
    <ThemeProvider>
      <FishingSpots />
    </ThemeProvider>
  );
}
