import Link from "next/link";

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 border-black w-full border-b-4 h-20 bg-white">
            <div className="max-w-screen-2xl mx-auto p-4 lg:p-8 h-full flex justify-between items-center">
                <h1 className="text-2xl font-extrabold">EmotionClassifier</h1>

                <div className="md:flex font-bold text-lg gap-4 lg:gap-8 h-20 items-center hidden">
                    <div className="cursor-pointer">Try It</div>
                    <div className="cursor-pointer">About</div>
                    <Link href="/#resource-section">
                        <button className="cursor-pointer">Resources</button>
                    </Link>

                    <div className="cursor-pointer">About</div>
                </div>
            </div>
        </div>
    );
}
