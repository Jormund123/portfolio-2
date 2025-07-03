import React from 'react';
import Film from "@/components/selected-works-comp/film";
import Music from "@/components/selected-works-comp/music";
import Photography from "@/components/selected-works-comp/photography";
import {ThemeManager} from "@/components/ThemeManager";

const SelectedWorks = (props) => {
    return (
        <>
            <ThemeManager theme="dark"/>
            <div className="lg:mt-10">
                <Film/>
                <Music/>
                <Photography/>
            </div>
        </>
    );
}

export default SelectedWorks;