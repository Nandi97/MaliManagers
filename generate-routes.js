const fs = require('fs');
const path = require('path');

// Define the base directory for your app (e.g., pages or src/pages for Next.js)
const baseDir = path.join(__dirname, 'app'); // Adjust as needed for your project structure

// Define the routes structure
const routes = [
	'/dashboard/overview',
	'/properties',
	'/properties/add',
	'/properties/units',
	'/tenants',
	'/tenants/add',
	'/tenants/leases',
	'/tenants/bills',
	'/leases',
	'/leases/active',
	'/leases/terminated',
	'/leases/add',
	'/billing',
	'/billing/generate',
	'/billing/payments',
	'/billing/service-charges',
	'/utilities',
	'/utilities/manage',
	'/utilities/readings',
	'/utilities/add',
	'/reminders',
	'/reminders/create',
	'/personnel',
	'/personnel/add',
	'/settings/account',
	'/settings/system',
	'/logout'
];

// Function to create the route files
function createRouteFiles() {
	routes.forEach((route) => {
		const routePath = path.join(baseDir, route);

		// Create the directory structure if it doesn't exist
		fs.mkdirSync(routePath, { recursive: true });

		// Create the page.tsx file inside the directory
		const filePath = path.join(routePath, 'page.tsx');
		if (!fs.existsSync(filePath)) {
			fs.writeFileSync(filePath, generatePageContent(route));
			console.log(`Created: ${filePath}`);
		}
	});
}

// Helper function to get a component name from a route
function getComponentName(route) {
	return route
		.split('/')
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

// Helper function to generate the content of the page.tsx file
function generatePageContent(route) {
	const componentName = getComponentName(route);
	const title = componentName.replace(/([A-Z])/g, ' $1').trim(); // Converts "BillingGenerate" to "Billing Generate"
	const breadcrumbItems = route
		.split('/')
		.filter(Boolean)
		.map((part, index) => {
			return `{ title: '${part.charAt(0).toUpperCase() + part.slice(1)}', link: '${
				'/' +
				route
					.split('/')
					.slice(0, index + 1)
					.join('/')
			}' }`;
		})
		.join(', ');

	return `import { Breadcrumbs } from '@/components/custom-ui/breadcrumbs';
import PageContainer from '@/components/layout/PageContainer';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { Heading } from '@/components/custom-ui/Heading';

const breadcrumbItems = [
    ${breadcrumbItems}
];

export default function page() {
    return (
        <PageContainer>
            <div className="space-y-4">
                <Breadcrumbs items={breadcrumbItems} />

                <div className="flex items-start justify-between">
                    <Heading
                        title="${title}"
                        description="Manage ${title.toLowerCase()} (Server side table functionalities.)"
                    />

                    <Link
                        href={'${route}/new'}
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
`;
}

// Run the script
createRouteFiles();
