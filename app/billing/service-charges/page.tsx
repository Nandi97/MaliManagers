import { Breadcrumbs } from '@/components/custom-ui/breadcrumbs';
import PageContainer from '@/components/layout/PageContainer';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { Heading } from '@/components/custom-ui/Heading';

const breadcrumbItems = [
	{ title: 'Billing', link: '/' },
	{ title: 'Service-charges', link: '//billing' }
];

export default function page() {
	return (
		<PageContainer>
			<div className="space-y-4">
				<Breadcrumbs items={breadcrumbItems} />

				<div className="flex items-start justify-between">
					<Heading
						title="Billing Service-charges"
						description="Manage billing service-charges (Server side table functionalities.)"
					/>

					<Link
						href={'/billing/service-charges/new'}
						className={cn(buttonVariants({ variant: 'default' }))}
					>
						<Plus className="mr-2 h-4 w-4" /> Add New
					</Link>
				</div>
				<Separator />
			</div>
		</PageContainer>
	);
}
