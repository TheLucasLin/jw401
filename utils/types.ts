export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface EventCard {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  type: "north" | "central" | "south";
}

export interface QuarterlyEvent {
  id: string;
  title: string;
  titleSecond?: string;
  dateRange: string;
  image: string;
  description?: string;
  buttonLabel?: string;
  expanded?: boolean;
}

export interface QuarterSection {
  id: string;
  label: string;
  isOpen: boolean;
  events: QuarterlyEvent[];
}
