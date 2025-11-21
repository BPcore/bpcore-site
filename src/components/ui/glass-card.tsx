import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    noPadding?: boolean;
}

export function GlassCard({
    children,
    className,
    noPadding = false,
    ...props
}: GlassCardProps) {
    return (
        <Card
            className={cn(
                "bg-zinc-900/30 backdrop-blur-xl border-zinc-800 shadow-none transition-all duration-300 hover:border-zinc-700/50",
                className
            )}
            {...props}
        >
            {noPadding ? (
                children
            ) : (
                <CardContent className="p-6">{children}</CardContent>
            )}
        </Card>
    );
}

export function GlassCardHeader({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <CardHeader className={cn("p-6 pb-0", className)} {...props}>
            {children}
        </CardHeader>
    );
}
