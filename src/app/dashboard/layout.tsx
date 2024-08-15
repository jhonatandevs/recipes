import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
        <div className="flex ">
          <Sidebar />
          <div className=" w-full text-slate-900">
            {children}
            <div className="fixed bottom-0 w-full bg-slate-600 h-16">
              <div className="grid grid-cols-2 gap-4 text-white">
                <div className="w-full h-32 p-5">
                  <p><strong>Autor:</strong> Jhonatan D. Zuniga</p>
                </div>
                <div className="w-full h-32 p-5">ImpreSystem</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}