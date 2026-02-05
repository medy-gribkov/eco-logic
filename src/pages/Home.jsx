import React from 'react';
import {
    HeroSection,
    AboutSection,
    FeaturesSection,
    FreeResourcesSection,
    ProgramsSection,
    QuizPreview,
    StatsSection,
    CollaborateSection,
    TrustedBrandsSection,
    MerchSection,
    VolunteerSection,

} from '../components/sections';

const Home = () => {
    return (
        <div className="scroll-smooth relative bg-paper">
            {/* Subtle floating background elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] bg-sage/5 rounded-full blur-3xl animate-float" />
                <div className="absolute top-[45%] right-[8%] w-[350px] h-[350px] bg-green/5 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute top-[75%] left-[15%] w-[300px] h-[300px] bg-sand/30 rounded-full blur-3xl animate-float-slow" />
            </div>

            {/* Main content with relative positioning above background */}
            <div className="relative z-10">
                {/* 1. Hero - "Learning from nature, preserving the future" */}
                <HeroSection />

                {/* 2. About - Who we are, mission */}
                <AboutSection />

                {/* 3. Free Resources - Download free materials */}
                <FreeResourcesSection />

                {/* 5. Programs - Tiered offerings (Seed, Sprout, Tree, Forest) */}
                <ProgramsSection />

                {/* 6. Interactive Lesson - Quiz demo */}
                <QuizPreview />

                {/* 7. Stats - Our Impact numbers */}
                <StatsSection variant="engagement" />

                {/* 8. Collaborate - Partner with us */}
                <CollaborateSection />

                {/* 9. Volunteer - Join our mission */}
                <VolunteerSection />

                {/* 10. Trusted By - Schools and organizations */}
                <TrustedBrandsSection />

                {/* 11. Merch - Subtle eco-merchandise (recycled) */}
                <MerchSection />


            </div>
        </div>
    );
};

export default Home;
