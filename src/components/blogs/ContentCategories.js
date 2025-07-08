import ContentCard from './ContentCard'; // Import the new ContentCard component
import Image from 'next/image'; // Import Image component for icons

export default function ContentCategories() {
    return (
        <section className="mt-0 md:-mt-16 py-10 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Engineering Card */}
                <ContentCard
                    icon={
                        <Image
                            src="/icons/Engineering-icon.png"
                            alt="Engineering Icon"
                            width={50}
                            height={52}
                            className="text-blue-600"
                        />
                    }
                    title="Engineering"
                    text="Explore the depth of the technology stack, software development, and system architecture."
                />

                {/* Design Card */}
                <ContentCard
                    icon={
                        <Image
                            src="/icons/design-icon.png"
                            alt="Design Icon"
                            width={50}
                            height={52}
                            className="text-blue-600"
                        />
                    }
                    title="Design"
                    text="Dive into UI/UX principles, graphic design, and creative processes that shape digital experiences."
                />

                {/* Progress Card */}
                <ContentCard
                    icon={
                        <Image
                            src="/icons/progress-icon.png"
                            alt="Design Icon"
                            width={50}
                            height={52}
                            className="text-blue-600"
                        />
                    }
                    title="Progress"
                    text="Track industry trends, project management insights, and the evolution of technology."
                />

                {/* Projects Card */}
                <ContentCard
                    icon={
                        <Image
                            src="/icons/projects.png"
                            alt="Design Icon"
                            width={50}
                            height={52}
                            className="text-blue-600"
                        />
                    }
                    title="Projects"
                    text="Dive into UI/UX principles, graphic design, and creative processes that shape digital experiences."
                /> 

                {/* Products Card */}
                <ContentCard
                    icon={
                        <Image
                            src="/icons/products-icon.png"
                            alt="Design Icon"
                            width={50}
                            height={52}
                            className="text-blue-600"
                        />
                    }
                    title="Products"
                    text="Dive into UI/UX principles, graphic design, and creative processes that shape digital experiences."
                />

                {/* Marketing Card */}
                <ContentCard
                    icon={
                        <Image
                            src="/icons/marketing-icon.png"
                            alt="Design Icon"
                            width={50}
                            height={52}
                            className="text-blue-600"
                        />
                    }
                    title="Marketing"
                    text="Dive into UI/UX principles, graphic design, and creative processes that shape digital experiences."
                />
            </div>
        </section>
    );
}
