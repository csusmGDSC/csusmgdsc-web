import * as React from "react";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { PAGE_ROUTES } from "@/config/routes";
import { useLocation } from "react-router-dom";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Platform",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: PAGE_ROUTES.ADMIN.DASHBOARD,
        },
        {
          title: "Events",
          url: PAGE_ROUTES.ADMIN.EVENTS,
        },
        {
          title: "Users",
          url: PAGE_ROUTES.ADMIN.USERS,
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Website Guidelines",
          url: "#",
        },
      ],
    },
  ],
};

export default function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = useLocation().pathname;

  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title} className="px-0">
            <SidebarGroupLabel className="text-base">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0">
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      className="data-[active=true]:bg-blue/20 border-l-4 rounded-none border-sidebar-primary-foreground data-[active=true]:border-blue data-[active=true]:text-blue/90 data-[active=true]:font-normal"
                    >
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
