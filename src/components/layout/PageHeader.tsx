
interface Props {
    title: string;
    subtitle?: string;
}

export function PageHeader({
    title,
    subtitle,
}: Props) {
    return (
        <header className="mb-10">
            <h1>{title}</h1>

            {subtitle && (
                <p className="text-secondary mt-2">
                    {subtitle}
                </p>
            )}
        </header>
    );
}

