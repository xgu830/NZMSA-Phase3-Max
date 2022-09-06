import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GameGridRow from "../components/GameGridRow"; 

export default {
    title: 'Game Grid Row',
    component: GameGridRow,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof GameGridRow>;

const Template: ComponentStory<typeof GameGridRow> = (args : any) => 
    <GameGridRow {...args} />;

export const GridRow = Template.bind({});
GridRow.args = {
    height: 4,
    width: 4,
    tiles: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }]
}