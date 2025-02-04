import { DollarSign } from "lucide-react";
import { FaProjectDiagram } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import { MdEvent } from "react-icons/md";

export default function DashboardPage() {
  return (
    <main className="m-4">
      <div className="flex flex-1 flex-col gap-4">
        <div className="grid auto-rows-min gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-sm border border-border p-4">
            <li className="w-full p-2 flex items-center gap-4">
              <span className="p-4 rounded-full bg-blue bg-opacity-10">
                <MdEvent size={30} className="text-blue" />
              </span>

              <span>
                <h1 className="text-lg lg:text-2xl font-semibold text-primary/90">
                  53
                </h1>
                <h2 className="lg:text-lg text-primary/70">Events</h2>
              </span>
            </li>
          </div>
          <div className="flex flex-col items-center justify-center rounded-sm border border-border p-4">
            <li className="w-full p-2 flex items-center gap-4">
              <span className="p-4 rounded-full bg-red bg-opacity-10">
                <IoPeopleCircle size={30} className="text-red" />
              </span>

              <span>
                <h1 className="text-lg lg:text-2xl font-semibold text-primary/90">
                  103
                </h1>
                <h2 className="lg:text-lg text-primary/70">Members</h2>
              </span>
            </li>
          </div>
          <div className="flex flex-col items-center justify-center rounded-sm border border-border p-4">
            <li className="w-full p-2 flex items-center gap-4">
              <span className="p-4 rounded-full bg-yellow bg-opacity-10">
                <FaProjectDiagram size={30} className="text-yellow" />
              </span>

              <span>
                <h1 className="text-lg lg:text-2xl font-semibold text-primary/90">
                  3
                </h1>
                <h2 className="lg:text-lg text-primary/70">Projects</h2>
              </span>
            </li>
          </div>
          <div className="flex flex-col items-center justify-center rounded-sm border border-border p-4">
            <li className="w-full p-2 flex items-center gap-4">
              <span className="p-4 rounded-full bg-green bg-opacity-10">
                <DollarSign size={30} className="text-green" />
              </span>

              <span>
                <h1 className="text-lg lg:text-2xl font-semibold text-primary/90">
                  $10,230
                </h1>
                <h2 className="lg:text-lg text-primary/70">Funding</h2>
              </span>
            </li>
          </div>
        </div>
        <div className="min-h-[800px] flex-1 rounded-sm border border-border" />
      </div>
    </main>
  );
}
