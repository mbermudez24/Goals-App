function Principal({ children }) {
    return (
        <>
            <sidenav>
                <a href="/list">List</a>
                <a href="/create">Create</a>
            </sidenav>
            <main>
                {children}
            </main>

        </>
    );
}

export default Principal;
