import React from 'react';
// @ts-ignore
import Film from "@/components/selected-works-comp/Film";
// @ts-ignore
import Music from '@/components/selected-works-comp/Music';
// @ts-ignore
import Photography from "@/components/selected-works-comp/Photography";
import FinestWorksHero from "@/components/selected-works-comp/FinestWorksHero";
import {ThemeManager} from "@/components/ThemeManager";

const SelectedWorks = () => {
    return (
        <>
            <ThemeManager theme="dark"/>
            <div className="lg:mt-10">
                <FinestWorksHero/>
                <Music/>
                <Film/>
                <Photography/>
            </div>
        </>
    );
}

export default SelectedWorks;