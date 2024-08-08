import Search from "@/components/search/Search";

export default function ContentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <nav className="relative select-none bg-gray-900 lg:flex lg:items-stretch w-full flex flex-col">
                <div className="flex flex-wrap lg:flex-nowrap lg:items-stretch w-full">
                    <div className="flex items-center ml-auto w-full lg:w-auto">
                        <a
                            href="#"
                            className="py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700"
                        >
                            Iniciar sesion
                        </a>
                        <div className="w-full lg:w-auto pr-5">
                            <Search />
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
}
