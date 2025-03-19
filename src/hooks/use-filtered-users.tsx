import { GDSC_BRANCHES, IOTA_TO_GDSC_BRANCH, User } from "@/types/user";
import { useEffect, useState } from "react";

export function useFilteredUsers(users: User[] | undefined) {
  const [filteredUsers, setFilteredUsers] = useState(users || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<
    (typeof GDSC_BRANCHES)[number][]
  >([]);

  useEffect(() => {
    if (!users) {
      setFilteredUsers([]);
      return;
    }
    if (searchQuery === "") {
      setFilteredUsers(users);
      return;
    }
    setFilteredUsers(
      users.filter((user) =>
        (user.full_name || "").toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  useEffect(() => {
    if (!users) {
      setFilteredUsers([]);
      return;
    }
    if (selectedTags.length === 0 || users.length === 0) {
      setFilteredUsers(users);
      return;
    }
    setFilteredUsers(
      users.filter((user) =>
        selectedTags.some(
          (tag) => tag === IOTA_TO_GDSC_BRANCH[user?.branch as number]
        )
      )
    );
  }, [selectedTags]);

  return {
    filteredUsers,
    setFilteredUsers,
    searchQuery,
    setSearchQuery,
    selectedTags,
    setSelectedTags,
  };
}
