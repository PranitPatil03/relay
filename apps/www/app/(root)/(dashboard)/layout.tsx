import { SidebarInset, SidebarProvider } from '@relay/ui/components/ui/sidebar'

import { AppSidebar } from '@/components/shared/app-sidebar'
import { TopBar } from '@/components/shared/TopBar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[#FBFBFA]" data-theme="light">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="relative rounded-none rounded-tl-2xl pt-px shadow-sm md:border md:border-b-0 md:border-r-0 md:border-neutral-200/50 md:bg-[#FEFFFE]">
          <TopBar />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
