export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section >
			<div >
				{children}
			</div>
		</section>
	);
}
