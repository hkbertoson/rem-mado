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
import {DataTableColumnHeader} from '@/components/ui/data-table-column-header';

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
	comment: string | null;
	last_updated: Date;
	created_at: Date;
};

export const columns: ColumnDef<RequestData>[] = [
	{
		accessorKey: 'project_id',
		header: ({column}) => (
			<DataTableColumnHeader column={column} title="Project ID" />
		),
	},
	{
		accessorKey: 'name',
		header: ({column}) => (
			<DataTableColumnHeader column={column} title="Name" />
		),
	},
	{
		accessorKey: 'account_name',
		header: ({column}) => (
			<DataTableColumnHeader column={column} title="Account Name" />
		),
	},
	{
		accessorKey: 'status',
		header: ({column}) => (
			<DataTableColumnHeader column={column} title="Status" />
		),
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
