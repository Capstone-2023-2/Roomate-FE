export function BaseLayout({ children }: React.PropsWithChildren<{}>): React.ReactElement {
    return (
        <main className="min-h-screen max-h-screen h-screen p-12 m-auto flex  justify-center text-primary-bg max-w-[400px]">
             {children} 
        </main>
    )
};


