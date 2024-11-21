import MDEditor from "@uiw/react-md-editor";
import { Send, ThumbsUp } from "lucide-react";

export default function EventComments() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Comments</h2>

      {/* Comment Input */}
      <div className="flex gap-4">
        <img
          src="/images/person.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <MDEditor />
          <div className="mt-2 flex justify-end">
            <button className="flex items-center gap-2 bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Send className="w-4 h-4" />
              Post Comment
            </button>
          </div>
        </div>
      </div>

      {/* Existing Comments */}
      <div className="space-y-6">
        {/* Comment 1 */}
        <div className="flex gap-4">
          <img
            src="/images/person.jpg"
            alt="Commenter Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
                <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">12</span>
                </button>
              </div>
              <p className="text-gray-700">
                This sounds amazing! Will we need to install any specific Python
                libraries beforehand?
              </p>
            </div>
            <button className="text-sm text-gray-500 mt-1 hover:text-blue-600">
              Reply
            </button>
          </div>
        </div>

        {/* Comment 2 */}
        <div className="flex gap-4">
          <img
            src="/images/person.jpg"
            alt="Commenter Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">Emma Wilson</p>
                  <p className="text-sm text-gray-500">5 hours ago</p>
                </div>
                <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">8</span>
                </button>
              </div>
              <p className="text-gray-700">
                Really excited for this workshop! I've been wanting to get into
                ML for a while.
              </p>
            </div>
            <button className="text-sm text-gray-500 mt-1 hover:text-blue-600">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
