import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GameGrid from '../components/GameGrid';

export default {
    title: "GameGrid",
    component: GameGrid,
    argTypes: {
        backgroundColor: {
            control: "color"
        }
    }
} as ComponentMeta<typeof GameGrid>;

const Template: ComponentStory<typeof GameGrid> = (args : any) => 
    <GameGrid {...args} />;

export const Grid = Template.bind({});
Grid.args = {
    height: 4,
    width: 4,
    gameState: [
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }]
    ]
}