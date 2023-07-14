import {RequestData, columns} from './columns';
import {DataTable} from './data-table';
import prisma from '@/lib/prisma';
async function getData(): Promise<RequestData[]> {
	return await prisma.requests.findMany({});
}

export default async function DemoPage() {
	const data = await getData();

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
