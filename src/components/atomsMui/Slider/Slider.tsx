/** @jsxImportSource @emotion/react */

import * as React from 'react';
import SliderMUI from '@mui/material/Slider';
import { css } from '@emotion/react';

const Slider = () => {
  return (
    <div>
      <SliderMUI defaultValue={30} />
      <SliderMUI
        defaultValue={30}
        componentsProps={{ thumb: { className: 'rounded-sm' } }}
        // css={css`
        //   color: #20b2aa;

        //   :hover {
        //     color: #2e8b57;
        //   }
        // `}
      />
    </div>
  );
};

export default Slider;
