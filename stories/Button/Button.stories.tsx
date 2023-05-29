import { Button } from './Button';
import type { Meta } from '@storybook/react';
import { FaTwitter, FaDiscord, FaYoutube, FaFacebookF } from 'react-icons/fa'

const iconMap = {
  FaTwitter,
  FaDiscord,
  FaYoutube,
  FaFacebookF,
}

const iconMapping: object = {
  none: null,
  FaTwitter: <FaTwitter/>,
  FaDiscord: <FaDiscord/>,
  FaYoutube: <FaYoutube/>,
  FaFacebookF: <FaFacebookF/>,
}

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { name: 'Label', description: 'Label of the button' },
    type: {
      name: 'Type',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'dark', 'light', 'success', 'danger'],
      description: 'Type of the button',
      defaultValue: 'primary',
    },
    outline: {
      name: 'Outline',
      required: true,
      control: 'boolean',
      description: 'Is this a outlined button?',
      defaultValue: false,
    },
    isDisabled: {
      name: 'Disabled',
      required: true,
      control: 'boolean',
      description: 'Is the button disabled?',
      defaultValue: false,
    },
    isLoading: {
      name: 'Loading',
      required: true,
      control: 'boolean',
      description: 'Loading?',
      defaultValue: false,
    },
    LeftIcon: {
      required: false,
      defaultValue: null,
      control: {
        type: "select",},
        options: [
          'none',
          ...Object.keys(iconMap)
        ],
        mapping: iconMapping,
    },
    RightIcon: {
      required: false,
      defaultValue: null,
      control: {
        type: "select",},
        options: [
          'none',
          ...Object.keys(iconMap)
        ],
        mapping: iconMapping,
    },
  },
}

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    type: 'primary',
    label: 'Button',
    outline: false,
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
    label: 'Button',
    outline: false,
  },
};

export const Accent = {
  args: {
    type: 'accent',
    label: 'Button',
    outline: false,
  },
};

export const Dark = {
  args: {
    type: 'dark',
    label: 'Button',
    outline: false,
  },
};

export const Light = {
  args: {
    type: 'light',
    label: 'Button',
    outline: false,
  },
};

export const Success = {
  args: {
    type: 'success',
    label: 'Button',
    outline: false,
  },
};

export const Danger = {
  args: {
    type: 'danger',
    label: 'Button',
    outline: false,
  },
};