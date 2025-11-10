import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import DataContext from "../../contexts/DataContext";
import EventList from "../../containers/Events";

// Mock des données
const mockEvents = [
  {
    id: 1,
    title: "Concert de Jazz",
    cover: "concert.jpg",
    date: "2025-11-10",
    type: "Musique",
  },
  {
    id: 2,
    title: "Exposition d'Art",
    cover: "expo.jpg",
    date: "2025-12-01",
    type: "Art",
  },
  {
    id: 3,
    title: "Conférence Tech",
    cover: "conference.jpg",
    date: "2025-12-15",
    type: "Tech",
  },
];

const mockPeople = ["Samira", "Jean-baptiste", "Alice"];

// Wrapper pour rendre avec contexte
const renderWithContext = (ui, contextValue) => {
  return render(
    <DataContext.Provider value={contextValue}>
      {ui}
    </DataContext.Provider>
  );
};

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", { cancelable: true, bubbles: true })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    renderWithContext(<EventList />, { data: { events: mockEvents }, error: null });
    
    mockEvents.forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument();
      expect(screen.getByText(event.type)).toBeInTheDocument();
    });
  });

  it("an event card, with the last event, is displayed", () => {
    renderWithContext(<EventList />, { data: { events: mockEvents }, error: null });
    const lastEvent = mockEvents[mockEvents.length - 1];
    expect(screen.getByText(lastEvent.title)).toBeInTheDocument();
    expect(screen.getByText(lastEvent.type)).toBeInTheDocument();
  });

  it("a list of people is displayed", () => {
    renderWithContext(<Home />, { data: { events: [] }, error: null });
    
    mockPeople.forEach((person) => {
      expect(screen.getByText(person)).toBeInTheDocument();
    });
  });

  it("a footer is displayed", () => {
    renderWithContext(<Home />, { data: { events: [] }, error: null });
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
