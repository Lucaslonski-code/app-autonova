
interface Props {
    title: string;
    description?: string;
}

export function PageHeader({
    title,
    description,
}: Props) {
    return (
        <header className="mb-10">
            <h1>{title}</h1>

            {description && (
                <p className="text-secondary mt-2">
                    {description}
                </p>
            )}
        </header>
    );
}

