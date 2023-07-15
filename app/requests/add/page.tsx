'use client';

import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button} from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';

const statusValues = [
	'Select a Status',
	'To be Started',
	'Completed',
	'Awaiting customer confirmation',
	'Work in Progress',
	'Cancelled',
] as const;

const requestValues = ['rem', 'addon', 'migration', 'Logo'] as const;

const FormDataSchema = z.object({
	id: z.string(),
	name: z.string(),
	projectID: z.string(),
	accountName: z.string(),
	status: z.enum(statusValues),
	requestType: z.enum(requestValues),
	billingCode: z.string(),
	legacyOrg: z.string(),
	comments: z.string(),
	totalHours: z.number(),
});

export default function RequestForm() {
	const form = useForm<z.infer<typeof FormDataSchema>>({
		resolver: zodResolver(FormDataSchema),
		defaultValues: {
			name: '',
			projectID: '',
			accountName: '',
			status: 'Select a Status',
			requestType: 'rem',
			billingCode: '',
			legacyOrg: '',
			comments: '',
			totalHours: 0,
		},
	});

	function onSubmit(data: z.infer<typeof FormDataSchema>) {
		console.log(data);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="name"
					render={({field}) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="projectID"
					render={({field}) => (
						<FormItem>
							<FormLabel>Project ID</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="accountName"
					render={({field}) => (
						<FormItem>
							<FormLabel>Account Name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="status"
					render={({field}) => (
						<FormItem>
							<FormLabel>Status</FormLabel>
							<FormControl>
								<select
									{...field}
									className="block w-full p-2 border rounded-md"
								>
									{statusValues.map((status) => (
										<option key={status} value={status}>
											{status}
										</option>
									))}
								</select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="requestType"
					render={({field}) => (
						<FormItem>
							<FormLabel>Request Type</FormLabel>
							<FormControl>
								<select
									{...field}
									className="block w-full p-2 border rounded-md"
								>
									{requestValues.map((request) => (
										<option key={request} value={request}>
											{request}
										</option>
									))}
								</select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="billingCode"
					render={({field}) => (
						<FormItem>
							<FormLabel>Billing Code</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="legacyOrg"
					render={({field}) => (
						<FormItem>
							<FormLabel>Legacy Org</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="comments"
					render={({field}) => (
						<FormItem>
							<FormLabel>Comments</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="totalHours"
					render={({field}) => (
						<FormItem>
							<FormLabel>Total Hours</FormLabel>
							<FormControl>
								<Input type="number" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
