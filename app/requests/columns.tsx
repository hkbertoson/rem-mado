'use client';

import {ColumnDef} from '@tanstack/react-table';
import {ArrowUpDown, MoreHorizontal} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RequestData = {
	id: number;
	name: string;
	project_id: string;
	account_name: string;
	status: string;
	request_type: string;
	wbs: string | null;
	legacy_org: string;
	total_hours_spent: number;
	comment: string;
	last_updated: string;
	created_at: string;
};

export const columns: ColumnDef<RequestData>[] = [
	{
		accessorKey: 'project_id',
		header: 'Project ID',
	},
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'account_name',
		header: 'Account Name',
	},
	{
		accessorKey: 'status',
		header: ({column}) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Status
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		id: 'actions',
		cell: ({row}) => {
			const request = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button>
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(request.project_id)}
						>
							Copy Request ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View</DropdownMenuItem>
						<DropdownMenuItem>Edit</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
