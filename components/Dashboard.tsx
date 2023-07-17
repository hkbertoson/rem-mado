'use client';
import {Metadata} from 'next';
import {Button} from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {CalendarDateRangePicker} from '@/components/date-range-picker';
import {MainNav} from '@/components/main-nav';
import {Overview} from '@/components/Overview';
import {RecentSales} from '@/components/recent-sales';
import {Search} from '@/components/search';
import TeamSwitcher from '@/components/team-switcher';

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Example dashboard app using the components.',
};

export default function DashboardPage({data}) {
	const totalCompleted = data.filter(
		(request: {status: string}) => request.status === 'Completed'
	);
	const totalInProgress = data.filter(
		(request: {status: string}) => request.status === 'WIP'
	);
	const totalPending = data.filter(
		(request: {status: string}) =>
			request.status === 'Awaiting Customer confirmation'
	);
	const totalCancelled = data.filter(
		(request: {status: string}) => request.status === 'Cancelled'
	);
	return (
		<>
			<div className="hidden flex-col md:flex">
				<div className="border-b">
					<div className="flex h-16 items-center px-4">
						<TeamSwitcher />
						<MainNav className="mx-6" />
						<div className="ml-auto flex items-center space-x-4">
							<Search />
						</div>
					</div>
				</div>
				<div className="flex-1 space-y-4 p-8 pt-6">
					<div className="flex items-center justify-between space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
						<div className="flex items-center space-x-2">
							<CalendarDateRangePicker />
							<Button>Download</Button>
						</div>
					</div>
					<Tabs defaultValue="overview" className="space-y-4">
						<TabsList>
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="analytics" disabled>
								Analytics
							</TabsTrigger>
							<TabsTrigger value="reports" disabled>
								Reports
							</TabsTrigger>
							<TabsTrigger value="notifications" disabled>
								Notifications
							</TabsTrigger>
						</TabsList>
						<TabsContent value="overview" className="space-y-4">
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Total Completed
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">
											{totalCompleted.length}
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Total In Progress
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">
											{totalInProgress.length}
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Pending Client
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">
											{totalPending.length}
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Cancelled
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">
											{totalCancelled.length}
										</div>
									</CardContent>
								</Card>
							</div>
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
								<Card className="col-span-4">
									<CardHeader>
										<CardTitle>Overview</CardTitle>
									</CardHeader>
									<CardContent className="pl-2">
										<Overview />
									</CardContent>
								</Card>
								<Card className="col-span-3">
									<CardHeader>
										<CardTitle>Recent Sales</CardTitle>
										<CardDescription>
											You made 265 sales this month.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<RecentSales />
									</CardContent>
								</Card>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	);
}
