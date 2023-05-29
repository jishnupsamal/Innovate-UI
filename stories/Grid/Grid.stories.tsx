import Grid from './Grid';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Grids are useful in designing the page layout and giving structure to the page.
 * 
 */

const meta: Meta<typeof Grid> = {
    /**
     * Grid Layout
     */
    title: 'Layout/Grid',
    component: Grid,
    tags: ['autodocs'],

    argTypes: {
        text: {
            name: 'Text',
            defaultValue: 'Hello',
        },
        templateRows: {
            name: 'Grid Template Rows',
        },
        templateColumns: {
            name: 'Grid Template Columns',
        },
        gap: {
            
        },
        children: {
            
        },
        
    },
}

export default meta;

type grid = StoryObj<typeof Grid>;
export const grid: grid = {
    args: {
        text: 'Hello',
        templateRows: '',
        templateColumns: '',
        templateAreas: '',
        gap: '',
        children: '',
    }
}