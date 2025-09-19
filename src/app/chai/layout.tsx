
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h2>inner layout.tsx inside chai for testing purpose</h2>
            {children}
        </>


    );
}
