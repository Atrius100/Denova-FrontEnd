import NavDash from "@/components/layout/NavDash";
import { Sidebar } from "@/components/layout/Sidebar";


type ReceptionLayoutProps = {
    children: React.ReactNode;
};

export default function ReceptionLayout({
    children,
}: ReceptionLayoutProps) {

    return (
        <div className="flex min-h-screen bg-[#f5f7fb]">

            {/* Sidebar */}
            <Sidebar />

            {/* Main */}
            <div className="flex flex-1 flex-col">

                {/* Navbar */}
                <NavDash
                    fullName="Ahmad Khaled"
                    role="employee"
                />

                {/* Content */}
                <main className="flex-1 p-6">
                    {children}
                </main>

            </div>
        </div>
    );
}