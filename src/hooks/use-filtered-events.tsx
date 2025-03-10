import { Event, IOTA_TO_EVENT_TYPE } from "@/types/event";
import { useState, useEffect } from "react";

export function useFilteredEvents(events: Event[] | undefined) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events || []);

  useEffect(() => {
    if (!events) {
      if (filteredEvents.length !== 0) setFilteredEvents([]);
      return;
    }

    let updatedEvents = events;

    if (selectedTags.length > 0) {
      updatedEvents = updatedEvents.filter((event) =>
        selectedTags.some((tag) => IOTA_TO_EVENT_TYPE[event.type].includes(tag))
      );
    }

    if (searchQuery !== "") {
      updatedEvents = updatedEvents.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Only update state if filtered events have changed
    setFilteredEvents((prevEvents) =>
      JSON.stringify(prevEvents) === JSON.stringify(updatedEvents)
        ? prevEvents
        : updatedEvents
    );
  }, [events, selectedTags, searchQuery]);

  return {
    filteredEvents,
    selectedTags,
    setSelectedTags,
    searchQuery,
    setSearchQuery,
  };
}
