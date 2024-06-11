import React from 'react';
import { SplitScreen } from '../../components/layoutcomponents/SplitScreen';

const LeftSideComp = ({ title }) => {
    return <h1 style={{ backgroundColor: "red" }}> {title}</h1>;
};

const RightSideComp = ({ title }) => {
    return <h1 style={{ backgroundColor: "blue" }}> {title}</h1>;
};

const SplitScreenLayout = () => {
    return (

        <SplitScreen leftWidth={1} rightWidth={3}>
            <LeftSideComp title="Layout 1 Left" />
            <RightSideComp title="Layout 1 Right" />
        </SplitScreen>
    );
};

export default SplitScreenLayout;