import Link from "next/link";
import { SITE_CONFIG } from "@/constants/navigation";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-xl mx-auto px-6 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-3">
                    <div className="bg-primary text-white p-1 rounded">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 -960 960 960"
                            width="20"
                            fill="currentColor"
                        >
                            <path d="M120-120v-520h160v520H120Zm280 0v-720h160v720H400Zm280 0v-360h160v360H680Z" />
                        </svg>
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-primary">
                        {SITE_CONFIG.name}
                    </span>
                </div>
                <p className="text-gray-500 font-bold text-sm mb-6 tracking-tight text-center">
                    {SITE_CONFIG.description}
                </p>
                <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-display">
                    <Link href="/privacy" className="hover:text-primary transition-colors">
                        Privacy
                    </Link>
                    <Link href="/terms" className="hover:text-primary transition-colors">
                        Terms
                    </Link>
                    <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="hover:text-primary transition-colors"
                    >
                        {SITE_CONFIG.email}
                    </a>
                </div>
                <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">
                    © {new Date().getFullYear()} {SITE_CONFIG.name}
                </div>
            </div>
        </footer>
    );
}
