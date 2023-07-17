import DashboardPage from '@/components/Dashboard';
import prisma from '@/lib/prisma';

export default async function Home() {
	const data = await prisma.requests.findMany({});

	return <DashboardPage data={data} />;
}
