/* eslint-disable */
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@relay/ui/components/ui/sidebar'

import { History } from '../icons/animated/History'
import { HomeIcon } from '../icons/animated/Home'
import RelayLogo from '../icons/animated/RelayLogo'
import { NavUser } from '../Root-user'

import { ProfileSection } from './ProfileSection'
import SideBarItem from './SideBarItem'

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: <HomeIcon />,
  },
  {
    title: 'History',
    url: '/history',
    icon: <History />,
  },
]

export function AppSidebar() {
  return (
    <Sidebar
      variant="inset"
      className="border-neutral-200/50 bg-[#FBFBFA] shadow-sm"
    >
      <SidebarContent className="ju flex flex-col">
        <SidebarHeader className="flex flex-row items-center justify-between max-md:p-4">
          <RelayLogo />
        </SidebarHeader>
        <SidebarGroup className="mt-10 flex-1">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <SideBarItem
                      icon={item.icon}
                      title={item.title}
                      url={item.url}
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter className="border-t border-neutral-200/50">
          <ProfileSection />
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}
