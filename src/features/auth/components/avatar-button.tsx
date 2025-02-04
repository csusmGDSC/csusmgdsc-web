import { useSignOut, useUser } from "@/api/auth-api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown, Key, LogOut, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function AvatarButton() {
  const user = useUser();
  const signOut = useSignOut();

  console.log("HEADER USER: ", user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="[&[data-state=open]>svg]:rotate-180"
      >
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            {user?.image ? (
              <AvatarImage src={user.image} alt="Profile image" />
            ) : (
              <AvatarFallback>{"👤"}</AvatarFallback>
            )}
          </Avatar>
          <ChevronDown
            size={16}
            strokeWidth={2}
            className="ms-2 opacity-60 transition-transform duration-200"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium text-foreground">
            {user?.full_name === undefined ? "Unknown user" : user.full_name}
          </span>
          <span className="truncate text-xs font-normal text-muted-foreground">
            {user?.email === undefined ? "Unknown email" : user.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to="/settings">
            <DropdownMenuItem>
              <Settings
                size={16}
                strokeWidth={2}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
          <Link to="/admin/dashboard">
            <DropdownMenuItem>
              <Key
                size={16}
                strokeWidth={2}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Admin</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          <LogOut
            size={16}
            strokeWidth={2}
            className="opacity-60"
            aria-hidden="true"
          />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
