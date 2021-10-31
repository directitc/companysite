import React from 'react';
import { css } from '@emotion/css';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

const Arrow = ({ direction, handleClick }) => {
    return (
        <div
            onClick={handleClick}
            className={css`
                display: flex;
                position: absolute;
                top: 40%;
                ${direction === 'right' ? `right: 25px` : `left: 25px`};
                height: 50px;
                width: 50px;
                justify-content: center;
                font-size: 30px;
                color: lightgray;
                border-radius: 50%;
                cursor: pointer;
                align-items: center;
                transition: transform ease-in 0.1s;
                &:hover {
                    transform: scale(1.1);
                }
                img {
                    transform: translateX(
                        ${direction === 'left' ? '-2' : '2'}px
                    );
                    &:focus {
                        outline: 0;
                    }
                }
            `}
        >
            {direction === 'right' ? <FaChevronRight /> : <FaChevronLeft />}
        </div>
    );
};

export default React.memo(Arrow);
