"use client";

export default function NotFoundHeading() {
    return (
        <div className="space-y-6 text-center max-w-2xl mx-auto">
            <h1 className="text-primary text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Lost in the digital silence?
            </h1>
            <p className="text-primary/70 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
                The page you are looking for has vanished. <br className="hidden md:block" />
                Let’s get you back to your outreach.
            </p>
        </div>
    );
}
