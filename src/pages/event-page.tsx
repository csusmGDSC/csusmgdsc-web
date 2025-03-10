import { PageContent, PageHeader } from "@/features/base";

import {
  EventComments,
  EventDescription,
  EventOrganizers,
  EventResources,
  EventSummary,
} from "@/features/event";
import EventMarkdown from "@/features/event/components/event-markdown";

const markdownString = `
Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.  

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.  

You can return the answer in any order.  

## Example  
\`\`\`plaintext
Input: nums = [2,7,11,15], target = 9  
Output: [0,1]  
Explanation: nums[0] + nums[1] = 2 + 7 = 9  
\`\`\`

## Solution  

### 💡 Approach 1: Brute Force (O(n²))  
Loop through each pair and check if they sum to the target.  

\`\`\`python
def twoSum(nums: list[int], target: int) -> list[int]:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
\`\`\`

### ⚡ Approach 2: Hash Map (O(n))  
Use a dictionary to store seen numbers and find the complement in one pass.  

\`\`\`python
def twoSum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
\`\`\`

## Complexity Analysis  
- **Brute Force:** O(n²) time, O(1) space  
- **Hash Map:** O(n) time, O(n) space  

✅ **Optimal Approach:** Hash Map solution.  
`;

const mockEvent = {
  id: "event-002",
  title: "Hackathon Kickoff",
  room: null, // Virtual event
  tags: ["hackathon", "teamwork", "innovation"],
  startTime: new Date("2024-10-01T14:00:00"),
  endTime: new Date("2024-10-01T16:00:00"),
  type: 2,
  location: "Online",
  date: new Date("2024-10-01"),
  githubRepo: "https://github.com/gdsc/hackathon",
  slidesURL: "",
  imageSrc: "https://picsum.photos/1920/1080",
  virtualURL: "https://gdsc.zoom.us/j/987654321",
  description:
    "Kick off our annual hackathon with project ideas and team formation!",
  about: markdownString,
  attendeeIds: ["user-201", "user-202", "user-203"],
  organizerIds: ["user-002"],
  usersAttendedIds: [],
  createdAt: new Date(),
  updatedAt: new Date(),
  createdBy: "user-002",
};

const EventPage = () => {
  return (
    <section>
      <PageHeader
        title=""
        backgroundImageSrc={
          mockEvent.imageSrc || "/images/placeholder/homeBackground-2.jpg"
        }
      />
      <PageContent>
        {mockEvent.imageSrc && (
          <img
            src={mockEvent.imageSrc}
            alt="Event Banner"
            className="w-full h-[450px] opacity-90 -mt-40 z-20 object-cover rounded-lg"
          />
        )}
        <EventSummary {...mockEvent} />
        <EventDescription description={mockEvent.description} />
        <EventResources />
        <EventOrganizers organizerIds={mockEvent.organizerIds} />
        <EventMarkdown markdown={mockEvent.about} />
        <EventComments />
      </PageContent>
    </section>
  );
};

export default EventPage;
