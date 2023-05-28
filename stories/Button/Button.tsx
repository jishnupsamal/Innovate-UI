import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IconType } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import * as style from '../../styles/style.module.scss';

/**
 * Button
*/
type ButtonProps = { type: string, outline: boolean, label: string, LeftIcon: any, RightIcon: any, isLoading: boolean, isDisabled: boolean, props: any };

export const Button: React.FC<ButtonProps> = ({ type, outline, label, LeftIcon, RightIcon, isLoading, isDisabled, ...props }) => {
  let typeClass: string | undefined;

  switch (type) {
    case 'primary':
      typeClass = outline == true ? `${style.button_primary_outline}` : `${style.button_primary}`
      break;
    case 'secondary':
      typeClass = outline == true ? `${style.button_secondary_outline}` : `${style.button_secondary}`
      break;
    case 'accent':
      typeClass = outline == true ? `${style.button_accent_outline}` : `${style.button_accent}`
      break;
    case 'dark':
      typeClass = outline == true ? `${style.button_dark_outline}` : `${style.button_dark}`
      break;
    case 'success':
      typeClass = outline == true ? `${style.button_success_outline}` : `${style.button_success}`
      break;
    case 'danger':
      typeClass = outline == true ? `${style.button_danger_outline}` : `${style.button_danger}`
      break;
    // case 'icon':
    //   typeClass = outline == true ? `${style.button_icon_outline}` : `${style.button_icon}`
      break;
    default:
      typeClass = undefined
      break;
  }
  return (
    <button
      className={`${typeClass}`}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {LeftIcon? (
        <div className={`${style.button_icon_left}`}>
          {!isLoading ? (<span>{LeftIcon} {label}</span> ): 'Loading...'}
        </div>
      ): (
        <div className={`${style.button_icon_reft}`}>
          {!isLoading ? (<span>{label} {RightIcon}</span> ): 'Loading...'}
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'accent', 'dark', 'success', 'danger']),
  outline: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  LeftIcon: PropTypes.object.isRequired,
  RightIcon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'primary',
  outline: false,
  isDisabled: false,
  isLoading: false,
  LeftIcon: null,
  RightIcon: null,
};
