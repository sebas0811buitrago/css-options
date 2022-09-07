import { useContext, useState } from 'react';
import { Button as ButtonCssModules } from './components/atomsCssModules/Button';
import { Button as ButtonMui } from './components/atomsMuiTailwind/Button';
import { Button as ButtonMUIBase } from './components/atomsMUIBase/Button';
import { Button as ButtonTailWind } from './components/atomsTailwind/Button';
import { SizeButton } from './components/_types/size';
import { VariantButton } from './components/_types/variant';
import css from './utilities/css';
import { StyledEngineProvider } from '@mui/material/styles';

import Slider from './components/atomsMuiTailwind/Slider/Slider';
import { CustomThemeContext } from './Context/Theme';
import ButtonEmotion from './components/atomsEmotion/Button/Button';

import ButtonMUILib from '@mui/material/Button';

function App() {
  const [theme, setTheme] = useState('');

  const { setTheme: setThemeEmotion } = useContext(CustomThemeContext);

  return (
    <StyledEngineProvider injectFirst>
      <div className={css(theme, 'App  flex flex-col gap-5 m-3')}>
        <div>
          <ButtonTailWind
            onClick={() =>
              setTheme((theme) => (!theme ? 'theme-reseller' : ''))
            }
          >
            Toggle Theme CSS variables
          </ButtonTailWind>
          <br />
          <br />

          <ButtonTailWind
            onClick={() => {
              if (setThemeEmotion)
                setThemeEmotion((theme) =>
                  theme === 'themeMUI' ? 'themeReseller' : 'themeMUI'
                );
            }}
          >
            Toggle Theme MUI
          </ButtonTailWind>
        </div>

        <div className="flex w-full m-3 gap-10 justify-evenly flex-wrap">
          <div className="flex flex-col gap-3 ">
            <div className="text-primary text-2xl ">Tailwind </div>

            <div className=" flex flex-col gap-3">
              {Object.keys(VariantButton).map((variant) => {
                return (
                  <div className="flex gap-3 items-center">
                    {Object.keys(SizeButton).map((size) => (
                      <ButtonTailWind
                        size={size as SizeButton}
                        variant={variant as VariantButton}
                      >
                        Click me
                      </ButtonTailWind>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-primary text-2xl ">Css Modules </div>

            <div className=" flex flex-col gap-3">
              {Object.keys(VariantButton).map((variant) => {
                return (
                  <div className="flex gap-3 items-center">
                    {Object.keys(SizeButton).map((size) => (
                      <ButtonCssModules
                        size={size as SizeButton}
                        variant={variant as VariantButton}
                      >
                        Click me
                      </ButtonCssModules>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-primary text-2xl ">MUI base </div>

            <div className=" flex flex-col gap-3">
              {Object.keys(VariantButton).map((variant) => {
                return (
                  <div className="flex gap-3 items-center">
                    {Object.keys(SizeButton).map((size) => (
                      <ButtonMUIBase
                        size={size as SizeButton}
                        variant={variant as VariantButton}
                      >
                        Click me
                      </ButtonMUIBase>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-primary text-2xl ">
              Material UI + TAILWIND{' '}
            </div>

            <div className=" flex flex-col gap-3">
              {Object.keys(VariantButton).map((variant) => {
                return (
                  <div className="flex gap-3 items-center">
                    {Object.keys(SizeButton).map((size) => (
                      <ButtonMui
                        size={size as SizeButton}
                        variant={variant as VariantButton}
                      >
                        Click me
                      </ButtonMui>
                    ))}
                  </div>
                );
              })}

              <Slider />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-primary text-2xl ">Emotion</div>

            <div className=" flex flex-col gap-3">
              {Object.keys(VariantButton).map((variant) => {
                return (
                  <div className="flex gap-3 items-center">
                    {Object.keys(SizeButton).map((size) => (
                      <ButtonEmotion
                        size={size as SizeButton}
                        variant={variant as VariantButton}
                      >
                        Click me
                      </ButtonEmotion>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          <div className=" flex flex-col gap-3">
            <div className="text-primary text-2xl ">MUI + Theme</div>
            <div className="flex gap-3 items-center">
              <ButtonMUILib variant="contained" color="primary" size="small">
                Click me
              </ButtonMUILib>
              <ButtonMUILib variant="contained" color="primary" size="medium">
                Click me
              </ButtonMUILib>
              <ButtonMUILib variant="contained" color="primary" size="large">
                Click me
              </ButtonMUILib>
            </div>

            <div className="flex gap-3 items-center">
              <ButtonMUILib variant="contained" color="secondary" size="small">
                Click me
              </ButtonMUILib>
              <ButtonMUILib variant="contained" color="secondary" size="medium">
                Click me
              </ButtonMUILib>
              <ButtonMUILib variant="contained" color="secondary" size="large">
                Click me
              </ButtonMUILib>
            </div>

            <div className="flex gap-3 items-center">
              <ButtonMUILib variant="outlined" color="primary" size="small">
                Click me
              </ButtonMUILib>
              <ButtonMUILib variant="outlined" color="primary" size="medium">
                Click me
              </ButtonMUILib>
              <ButtonMUILib variant="outlined" color="primary" size="large">
                Click me
              </ButtonMUILib>
            </div>

            <div className="flex gap-3 items-center">
              <ButtonMUILib variant="outlined" color="secondary" size="small">
                Click me
              </ButtonMUILib>
              <ButtonMUILib variant="outlined" color="secondary" size="medium">
                Click me
              </ButtonMUILib>
              <ButtonMUILib variant="outlined" color="secondary" size="large">
                Click me
              </ButtonMUILib>
            </div>
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
