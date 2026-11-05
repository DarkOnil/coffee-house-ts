import type { ReactNode } from "react";
import { cn } from "../utils/cn";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    className?: string;
    onClick?: () => void;
};

const Button = ({
    children,
    variant = "primary",
    size = "medium",
    className = "",
    onClick
}: ButtonProps) => {

    const styles = {
        primary: "bg-amber-800 text-white hover:bg-amber-900",
        secondary: "border border-amber-800 text-amber-900 hover:bg-amber-100"
    };

    const sizes = {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg"
    };

    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-full font-semibold transition",
                styles[variant],
                sizes[size],
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;