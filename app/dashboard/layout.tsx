import SideNav from '@/app/ui/dashboard/sidenav';
<<<<<<< HEAD
 
export default function Layout({ children }: { children: React.ReactNode }) {
=======

export default function Layout({ children }: { children: React.ReactNode; }) {
>>>>>>> fd8cb54 (lalala)
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}