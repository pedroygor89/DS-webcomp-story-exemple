import { format, dispatchEvent, removeDoubleSpacesAndBreaks, cleanString, generateRandomNumber, generateSvgFromBase64Data } from './utils';
describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });
  it('formats just first names', () => {
    expect(format('Joseph', undefined, undefined)).toEqual('Joseph');
  });
  it('formats first and last names', () => {
    expect(format('Joseph', undefined, 'Publique')).toEqual('Joseph Publique');
  });
  it('formats first, middle and last names', () => {
    expect(format('Joseph', 'Quincy', 'Publique')).toEqual('Joseph Quincy Publique');
  });
});
describe('dispatchEvent', () => {
  it('Event has triggered', () => {
    const handler = jest.fn();
    window.addEventListener('event_started', handler);
    dispatchEvent('event_started', {});
    expect(handler).toBeCalledTimes(1);
  });
  it('Event detail has value', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
    const handler = jest.fn();
    window.addEventListener('event_started', event => {
      var _a;
      expect((_a = event.detail) === null || _a === void 0 ? void 0 : _a.param).toEqual(1);
      handler(event.detail);
    });
    dispatchEvent('event_started', { param: 1 });
    expect(handler).toBeCalledTimes(1);
    expect(handler).toBeCalledWith({ param: 1 });
  });
});
describe('removeDoubleSpacesAndBreaks', () => {
  it('returns only one blank space', () => {
    expect(removeDoubleSpacesAndBreaks('    \r\n   ')).toEqual(' ');
  });
  it('returns entyre frase on single line', () => {
    expect(removeDoubleSpacesAndBreaks(`primeira frase
    segunda     frase
    terceira       frase`)).toEqual('primeira frase segunda frase terceira frase');
  });
});
describe('cleanString', () => {
  it('returns only one blank space', () => {
    expect(cleanString('    \r\n   ')).toEqual(' ');
  });
  it('returns entyre frase on single line', () => {
    expect(cleanString(`primeira frase
    segunda     frase
    terceira       frase`)).toEqual('primeira frase segunda frase terceira frase');
  });
  it('returns lowercase without accents, special caracters and double spaces', () => {
    expect(cleanString(`PRIMEIRA   FRASE   MAIÚSCULA
    sEgUnDá   CaPiTaLiZadA`)).toEqual('primeira frase maiuscula segunda capitalizada');
  });
});
describe('generateRandomNumber', () => {
  it('returns a number between 0 and 100', () => {
    expect(generateRandomNumber(0, 100)).toBeGreaterThanOrEqual(0);
    expect(generateRandomNumber(0, 100)).toBeLessThanOrEqual(100);
  });
});
describe('generateSvgFromBase64Data', () => {
  it('returns a SVG string', () => {
    const svgBase64Data = 'data:image/svg+xml;base64,Cjw/eG1sIHZlcnNpb249IjEuMCIgZW5jb2Rpbmc9Imlzby04ODU5LTEiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMS45NTUgMzEuOTU1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMS45NTUgMzEuOTU1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMDMwMTA0OyIgZD0iTTI3LjI1LDQuNjU1QzIwLjk5Ni0xLjU3MSwxMC44OC0xLjU0Niw0LjY1Niw0LjcwNkMtMS41NzEsMTAuOTYtMS41NDgsMjEuMDc2LDQuNzA1LDI3LjMKCQljNi4yNTYsNi4yMjYsMTYuMzc0LDYuMjAzLDIyLjU5Ny0wLjA1MUMzMy41MjYsMjAuOTk1LDMzLjUwNSwxMC44NzgsMjcuMjUsNC42NTV6Ii8+CgkKPC9zdmc+';
    expect(generateSvgFromBase64Data(svgBase64Data)).toEqual(`
    <?xml version="1.0" encoding="iso-8859-1"?>
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 31.955 31.955" style="enable-background:new 0 0 31.955 31.955;" xml:space="preserve">
        <path style="fill:#030104;" d="M27.25,4.655C20.996-1.571,10.88-1.546,4.656,4.706C-1.571,10.96-1.548,21.076,4.705,27.3
          c6.256,6.226,16.374,6.203,22.597-0.051C33.526,20.995,33.505,10.878,27.25,4.655z"/>
      </svg>`);
  });
});
