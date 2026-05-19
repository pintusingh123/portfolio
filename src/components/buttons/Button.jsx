import React from "react";
import styled from "styled-components";

const Button = ({ title }) => {
  return (
    <StyledWrapper>
      <button className="cta flex items-center">
        <span>{title}</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 10px 25px;
 
    border-radius: 50px;
    background: none;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(6px);

    /* Gradient border using background-clip trick */
    border-image: linear-gradient(90deg, #facc15, #3b82f6) 1;
  }

  .cta span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    background: linear-gradient(90deg, #facc15, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 2;
  }

  .cta svg {
    position: relative;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #fff;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
    z-index: 2;
  }

  /* Hover effect with dark blur gradient */
  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    width: 45px;
    height: 45px;
    filter: blur(2px);
    transition: all 0.4s ease;
    z-index: 1;
  }

  .cta:hover:before {
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 1) 50%,
      #00d4ff 100%
    );
    filter: blur(8px) brightness(0.8);
    backdrop-filter: blur(1px);
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active {
    transform: scale(1.05);
  }
`;

export default Button;
