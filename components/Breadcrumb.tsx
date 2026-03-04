import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "./Schema";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaItems = [
    { name: "Home", url: "https://atlasaircons.com" },
    ...items.map((item) => ({
      name: item.label,
      url: `https://atlasaircons.com${item.href}`,
    })),
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav
        aria-label="Breadcrumb"
        className="bg-gray-50 border-b border-gray-200"
      >
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-1.5 py-3 text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            {items.map((item, i) => (
              <li key={item.href} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                {i === items.length - 1 ? (
                  <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition truncate max-w-[150px] sm:max-w-none"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
