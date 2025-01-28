export default async function Root({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<MiniKitProvider>
				<body className={inter.className}>{children}</body>
			</MiniKitProvider>
		</html>
	)
}