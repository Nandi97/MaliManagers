import { Breadcrumbs } from '@/components/custom-ui/breadcrumbs';
import PageContainer from '@/components/layout/PageContainer';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { Heading } from '@/components/custom-ui/Heading';

const breadcrumbItems = [
	{ title: 'Utilities', link: '/' },
	{ title: 'Manage', link: '//utilities' }
];

export default function page() {
	return (
		<PageContainer>
			<div className="space-y-4">
				<Breadcrumbs items={breadcrumbItems} />

				<div className="flex items-start justify-between">
					<Heading
						title="Utilities Manage"
						description="Manage utilities manage (Server side table functionalities.)"
					/>

					<Link
						href={'/utilities/manage/new'}
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
