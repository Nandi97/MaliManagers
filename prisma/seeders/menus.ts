import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export function getNavItems() {
	return [
		{
			title: 'Dashboard',
			href: '/dashboard/overview',
			icon: 'radix-icons:dashboard',
			label: 'Dashboard',
			listOrder: 1,
			items: []
		},
		{
			title: 'Properties',
			href: '/properties',
			icon: 'mdi:home',
			label: 'Properties',
			listOrder: 2,
			items: [
				{
					title: 'All Properties',
					href: '/properties',
					icon: 'mdi:view-list-outline',
					label: 'All Properties',
					listOrder: 1,
					items: []
				},
				{
					title: 'Add New Property',
					href: '/properties/add',
					icon: 'mdi:plus-box-outline',
					label: 'Add New Property',
					listOrder: 2,
					items: []
				},
				{
					title: 'Manage Units',
					href: '/properties/units',
					icon: 'mdi:domain',
					label: 'Manage Units',
					listOrder: 3,
					items: []
				}
			]
		},
		{
			title: 'Tenants',
			href: '/tenants',
			icon: 'mdi:account',
			label: 'Tenants',
			listOrder: 3,
			items: [
				{
					title: 'All Tenants',
					href: '/tenants',
					icon: 'mdi:view-list-outline',
					label: 'All Tenants',
					listOrder: 1,
					items: []
				},
				{
					title: 'Add New Tenant',
					href: '/tenants/add',
					icon: 'mdi:account-plus-outline',
					label: 'Add New Tenant',
					listOrder: 2,
					items: []
				},
				{
					title: 'Tenant Leases',
					href: '/tenants/leases',
					icon: 'mdi:file-document-outline',
					label: 'Tenant Leases',
					listOrder: 3,
					items: []
				},
				{
					title: 'Tenant Bills',
					href: '/tenants/bills',
					icon: 'mdi:receipt-outline',
					label: 'Tenant Bills',
					listOrder: 4,
					items: []
				}
			]
		},
		{
			title: 'Leases',
			href: '/leases',
			icon: 'mdi:receipt',
			label: 'Leases',
			listOrder: 4,
			items: [
				{
					title: 'Active Leases',
					href: '/leases/active',
					icon: 'mdi:file-document-box-check-outline',
					label: 'Active Leases',
					listOrder: 1,
					items: []
				},
				{
					title: 'Terminated Leases',
					href: '/leases/terminated',
					icon: 'mdi:file-document-box-remove-outline',
					label: 'Terminated Leases',
					listOrder: 2,
					items: []
				},
				{
					title: 'Add Lease',
					href: '/leases/add',
					icon: 'mdi:file-document-box-plus-outline',
					label: 'Add Lease',
					listOrder: 3,
					items: []
				}
			]
		},
		{
			title: 'Billing',
			href: '/billing',
			icon: 'mdi:receipt-long',
			label: 'Billing',
			listOrder: 5,
			items: [
				{
					title: 'All Bills',
					href: '/billing',
					icon: 'mdi:receipt-text',
					label: 'All Bills',
					listOrder: 1,
					items: []
				},
				{
					title: 'Generate Bill',
					href: '/billing/generate',
					icon: 'mdi:receipt-text-plus-outline',
					label: 'Generate Bill',
					listOrder: 2,
					items: []
				},
				{
					title: 'Payments',
					href: '/billing/payments',
					icon: 'mdi:credit-card-outline',
					label: 'Payments',
					listOrder: 3,
					items: []
				},
				{
					title: 'Service Charges',
					href: '/billing/service-charges',
					icon: 'mdi:cash-multiple',
					label: 'Service Charges',
					listOrder: 4,
					items: []
				}
			]
		},
		{
			title: 'Utilities',
			href: '/utilities',
			icon: 'mdi:water-pump',
			label: 'Utilities',
			listOrder: 6,
			items: [
				{
					title: 'Manage Utilities',
					href: '/utilities/manage',
					icon: 'mdi:wrench-outline',
					label: 'Manage Utilities',
					listOrder: 1,
					items: []
				},
				{
					title: 'Utility Readings',
					href: '/utilities/readings',
					icon: 'mdi:gauge',
					label: 'Utility Readings',
					listOrder: 2,
					items: []
				},
				{
					title: 'Add Utility',
					href: '/utilities/add',
					icon: 'mdi:water-plus-outline',
					label: 'Add Utility',
					listOrder: 3,
					items: []
				}
			]
		},
		{
			title: 'Reminders',
			href: '/reminders',
			icon: 'mdi:bell-outline',
			label: 'Reminders',
			listOrder: 7,
			items: [
				{
					title: 'All Reminders',
					href: '/reminders',
					icon: 'mdi:bell',
					label: 'All Reminders',
					listOrder: 1,
					items: []
				},
				{
					title: 'Create Reminder',
					href: '/reminders/create',
					icon: 'mdi:bell-plus-outline',
					label: 'Create Reminder',
					listOrder: 2,
					items: []
				}
			]
		},
		{
			title: 'Personnel Management',
			href: '/personnel',
			icon: 'mdi:account-group-outline',
			label: 'Personnel',
			listOrder: 8,
			items: [
				{
					title: 'All Personnel',
					href: '/personnel',
					icon: 'mdi:account-multiple-outline',
					label: 'All Personnel',
					listOrder: 1,
					items: []
				},
				{
					title: 'Add Personnel',
					href: '/personnel/add',
					icon: 'mdi:account-plus-outline',
					label: 'Add Personnel',
					listOrder: 2,
					items: []
				}
			]
		},
		{
			title: 'Settings',
			href: '/settings',
			icon: 'mdi:cog-outline',
			label: 'Settings',
			listOrder: 9,
			items: [
				{
					title: 'Account Settings',
					href: '/settings/account',
					icon: 'mdi:account-cog-outline',
					label: 'Account Settings',
					listOrder: 1,
					items: []
				},
				{
					title: 'System Settings',
					href: '/settings/system',
					icon: 'mdi:cogs',
					label: 'System Settings',
					listOrder: 2,
					items: []
				}
			]
		},
		{
			title: 'Logout',
			href: '/logout',
			icon: 'mdi:logout',
			label: 'Logout',
			listOrder: 10,
			items: []
		}
	];
}
export async function createOrUpdateNavItem(navItem: any) {
	const existingNavItem = await prisma.navItem.findUnique({
		where: { title: navItem.title }
	});

	const data = {
		title: navItem.title,
		href: navItem.href,
		disabled: navItem.disabled,
		external: navItem.external,
		icon: navItem.icon,
		label: navItem.label,
		listOrder: navItem.listOrder,
		description: navItem.description
	};

	let savedNavItem;

	if (!existingNavItem) {
		savedNavItem = await prisma.navItem.create({
			data
		});
		console.log(`Created nav item: ${savedNavItem.title}`);
	} else {
		savedNavItem = await prisma.navItem.update({
			where: { id: existingNavItem.id },
			data
		});
		console.log(`Updated nav item: ${savedNavItem.title}`);
	}

	// Handle nested items (NavSubItem) separately
	if (navItem.items && navItem.items.length > 0) {
		for (const subItem of navItem.items) {
			await createOrUpdateNavSubItem(subItem, savedNavItem.id);
		}
	}

	return savedNavItem;
}

async function createOrUpdateNavSubItem(subItem: any, parentId: string) {
	const existingSubItem = await prisma.navSubItem.findUnique({
		where: { title: subItem.title }
	});

	const data = {
		title: subItem.title,
		href: subItem.href,
		disabled: subItem.disabled,
		external: subItem.external,
		icon: subItem.icon,
		label: subItem.label,
		listOrder: subItem.listOrder,
		description: subItem.description,
		parentId
	};

	if (!existingSubItem) {
		await prisma.navSubItem.create({
			data
		});
		console.log(`Created nav sub-item: ${subItem.title}`);
	} else {
		await prisma.navSubItem.update({
			where: { id: existingSubItem.id },
			data
		});
		console.log(`Updated nav sub-item: ${subItem.title}`);
	}
}
