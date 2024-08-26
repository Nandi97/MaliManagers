import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/SideBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Basic dashboard with Next.js and Shadcn'
};

export default function DashboardLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex">
			<Sidebar />
			<main className="w-full flex-1 overflow-hidden">
				<Header />
				{children}
			</main>
		</div>
	);
}
