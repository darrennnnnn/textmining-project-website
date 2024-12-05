import Hero from "@/components/Hero";
import Resources from "@/components/Resources";

export default function Home() {
    return (
        <div className="w-full">
            <Hero />
            <div id="resource-section">
                <Resources />
            </div>
            <Hero />
        </div>
    );
}
