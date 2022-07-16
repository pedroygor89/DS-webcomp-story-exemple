import { r as registerInstance, h, a as Host } from './index-b21d89aa.js';
import { i as i18n } from './i18n-3725f313.js';
import { g as generateRandomNumber, c as cleanString, d as dispatchEvent } from './utils-42b62acd.js';

const waterGlassSvg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN2Z193YXRlcl9nbGFzc19zdDB7ZmlsbDpjdXJyZW50Q29sb3I7fQ0KPC9zdHlsZT4NCjxwYXRoIGQ9Ik0yMi4xODgxIDE2LjI4NzFMMjAuODc4OSAxNS43OTYyTDI0Ljc3NDcgMi4wOTI1QzI0Ljg0MDggMS43OTQxMSAyNS4wMDQgMS41MjU1NSAyNS4yMzkxIDEuMzI4MTVDMjUuNDc0MyAxLjEzMDc1IDI1Ljc2ODMgMS4wMTU0NSAyNi4wNzU5IDFIMzAuNzc4MVYyLjU4MzMzSDI2LjA3NTlMMjIuMTg4MSAxNi4yODcxWiIgZmlsbD0iIzQyNDk1MyIvPg0KPHBhdGggZD0iTTI2LjE1NTkgMzkuMkgyNi4xNTU5QzI2Ljc5MjYgMzkuMTk5OCAyNy40MDczIDM4Ljk2NzQgMjcuODgyOCAzOC41NDY1QzI4LjM1ODIgMzguMTI1NiAyOC42NjEyIDM3LjU0NTcgMjguNzMzNiAzNi45MTdMMjguNzMzNiAzNi45MTY3TDMxLjk5ODcgOC4xNDc1NUwzMi4wMjQgNy45MjVIMzEuOEg5SDguNzc2MTRMOC44MDEyNiA4LjE0NzQ1TDEyLjA1MDQgMzYuOTE2NkwxMi4wNTA1IDM2LjkxN0MxMi4xMjMxIDM3LjU0ODYgMTIuNDI4NiAzOC4xMzEgMTIuOTA3NyAzOC41NTIzQzEzLjM4NjYgMzguOTczMyAxNC4wMDUxIDM5LjIwMzggMTQuNjQ0NSAzOS4ySDI2LjE1NTlaTTE0LjA3NjQgMzYuNjg5NUwxMS4wNDQxIDkuOTA4MzNIMjkuNzk2TDI2Ljc4NzQgMzYuNjg5N0wyNi43ODc0IDM2LjY4OTlDMjYuNzcxMiAzNi44MzQ4IDI2LjcwMTQgMzYuOTY5IDI2LjU5MTEgMzcuMDY2NEMyNi40ODA2IDM3LjE2MzkgMjYuMzM3NCAzNy4yMTc1IDI2LjE4OSAzNy4yMTY2SDI2LjE4NzhMMTQuNjc2IDM3LjIxNjZMMTQuNjc0OCAzNy4yMTY2QzE0LjUyNjQgMzcuMjE3NSAxNC4zODMyIDM3LjE2MzkgMTQuMjcyOCAzNy4wNjY0QzE0LjE2MjQgMzYuOTY5IDE0LjA5MjcgMzYuODM0OCAxNC4wNzY1IDM2LjY4OTlMMTQuMDc2NCAzNi42ODk1WiIgIGNsYXNzPSJzdmdfd2F0ZXJfZ2xhc3Nfc3QwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwLjQiLz4NCjxwYXRoIGQ9Ik0yMy40NzM1IDI5LjE4MzFWMjguOTgzMUgyMy4yNzM1SDIxLjY3NjlIMjEuNDc2OVYyOS4xODMxVjMwLjc2NjRWMzAuOTY2NEgyMS42NzY5SDIzLjI3MzVIMjMuNDczNVYzMC43NjY0VjI5LjE4MzFaIiAgY2xhc3M9InN2Z193YXRlcl9nbGFzc19zdDAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAuNCIvPg0KPHBhdGggZD0iTTE3LjQwNzEgMjQuNzVWMjQuNTVIMTcuMjA3MUgxNS42MTA1SDE1LjQxMDVWMjQuNzVWMjYuMzMzM1YyNi41MzMzSDE1LjYxMDVIMTcuMjA3MUgxNy40MDcxVjI2LjMzMzNWMjQuNzVaIiAgY2xhc3M9InN2Z193YXRlcl9nbGFzc19zdDAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAuNCIvPg0KPHBhdGggZD0iTTI2LjE4ODUgMjAuNzkzVjIwLjU5M0gyNS45ODg1SDI0LjM5MThIMjQuMTkxOFYyMC43OTNWMjIuMzc2M1YyMi41NzYzSDI0LjM5MThIMjUuOTg4NUgyNi4xODg1VjIyLjM3NjNWMjAuNzkzWiIgIGNsYXNzPSJzdmdfd2F0ZXJfZ2xhc3Nfc3QwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwLjQiLz4NCjxwYXRoIGQ9Ik0xMC43MDAzIDE1LjA1SDEwLjUwMDNWMTUuMjVWMTYuODMzM1YxNy4wMzMzSDEwLjcwMDNIMzAuMDk5NUgzMC4yOTk1VjE2LjgzMzNWMTUuMjVWMTUuMDVIMzAuMDk5NUgxMC43MDAzWiIgIGNsYXNzPSJzdmdfd2F0ZXJfZ2xhc3Nfc3QwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwLjQiLz4NCjwvc3ZnPg0K';

const teaCupSvg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FtYWRhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDAgNDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpjdXJyZW50Q29sb3I7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC41O30NCgkuc3Qxe2ZpbGw6IzQyNDk1Mzt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTM0LjksMzQuOHYtMC4xaC0wLjFIMi45SDIuOHYwLjF2MS41djAuMWgwLjFoMzEuOWgwLjF2LTAuMVYzNC44eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjYsMjcuM3YwLjFoMC4xaDIuNmMxLDAsMi0wLjQsMi44LTEuMmMwLjctMC43LDEuMi0xLjcsMS4yLTIuOGMwLTEtMC40LTItMS4yLTIuOGMtMC43LTAuNy0xLjctMS4yLTIuOC0xLjINCgloLTEuN2gtMC4xdjAuMXYxLjV2MC4xaDAuMWgxLjdjMC42LDAsMS4xLDAuMiwxLjUsMC42YzAuNCwwLjQsMC42LDAuOSwwLjYsMS41cy0wLjIsMS4xLTAuNiwxLjVjLTAuNCwwLjQtMC45LDAuNi0xLjUsMC42aC0yLjYNCgloLTAuMXYwLjFWMjcuM3oiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNSwzNi40djAuMWgwLjFjMS4yLDAsMi4zLTAuNywzLjItMS44YzAuOS0xLjIsMS43LTIuOCwyLjMtNC43YzEuMy0zLjksMi05LDEuOS0xNC4xdi0wLjhWMTVoLTAuMUg1LjJINS4xDQoJdjAuMXYwLjhjMCw1LDAuNywxMC4yLDIsMTQuMWMwLjYsMS45LDEuNCwzLjYsMi4zLDQuN2MwLjksMS4yLDIsMS44LDMuMiwxLjhoMC4xdi0wLjF2LTEuNXYtMC4xaC0wLjFjLTAuNiwwLTEuMy0wLjQtMS45LTEuMw0KCWMtMC42LTAuOS0xLjMtMi4yLTEuOC0zLjhDNy43LDI2LjQsNywyMS45LDYuOSwxNi44aDI0Yy0wLjEsNS4yLTAuOSw5LjYtMS45LDEyLjhjLTAuNSwxLjYtMS4yLDIuOS0xLjgsMy44DQoJYy0wLjcsMC45LTEuMywxLjMtMS45LDEuM0gyNXYwLjFWMzYuNHoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNi42LDEzLjZjLTAuNSwwLTEuMS0wLjEtMS41LTAuNGMtMC41LTAuMy0wLjgtMC43LTEuMS0xLjFjLTAuMy0wLjUtMC40LTEtMC40LTEuNWMwLTAuNSwwLjEtMS4xLDAuNC0xLjUNCglsMC45LTEuNWMwLjEtMC4yLDAuMi0wLjUsMC4yLTAuOGMwLTAuNC0wLjItMC44LTAuNC0xLjFjLTAuMy0wLjMtMC43LTAuNC0xLjEtMC40VjMuN2MwLjUsMCwxLjEsMC4xLDEuNSwwLjQNCgljMC41LDAuMywwLjgsMC43LDEuMSwxLjFjMC4zLDAuNSwwLjQsMSwwLjQsMS41YzAsMC41LTAuMSwxLjEtMC40LDEuNWwtMC45LDEuNWMtMC4xLDAuMi0wLjIsMC41LTAuMiwwLjhjMCwwLjQsMC4yLDAuOCwwLjQsMS4xDQoJYzAuMywwLjMsMC43LDAuNCwxLjEsMC40VjEzLjZ6Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjIuNywxMy42Yy0wLjUsMC0xLjEtMC4xLTEuNS0wLjRjLTAuNS0wLjMtMC44LTAuNy0xLjEtMS4xYy0wLjMtMC41LTAuNC0xLTAuNC0xLjVjMC0wLjUsMC4xLTEuMSwwLjQtMS41DQoJbDAuOS0xLjVjMC4xLTAuMiwwLjItMC41LDAuMi0wLjhjMC0wLjQtMC4yLTAuOC0wLjQtMS4xYy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNFYzLjdjMC41LDAsMS4xLDAuMSwxLjUsMC40DQoJYzAuNSwwLjMsMC44LDAuNywxLjEsMS4xYzAuMywwLjUsMC40LDEsMC40LDEuNWMwLDAuNS0wLjEsMS4xLTAuNCwxLjVsLTAuOSwxLjVjLTAuMSwwLjItMC4yLDAuNS0wLjIsMC44YzAsMC40LDAuMiwwLjgsMC40LDEuMQ0KCXMwLjcsMC40LDEuMSwwLjRWMTMuNnoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOC4xLDI5LjdoMC4xdi0wLjF2LTYuMXYtMC4xbDAsMGwtMy44LTMuNmwtMC4xLTAuMWwtMC4xLDAuMWwtMy44LDMuNmwwLDB2MC4xdjYuMXYwLjFoMC4xSDE4LjF6IE0xNi40LDI0LjENCgl2My43aC00LjN2LTMuN2wyLjEtMkwxNi40LDI0LjF6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTUuMiwxNS45di0wLjFoLTAuMWgtMS41aC0wLjF2MC4xdjV2MC4xaDAuMWgxLjVoMC4xdi0wLjFWMTUuOXoiLz4NCjwvc3ZnPg0K';

const flagSvg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FtYWRhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3ZnX2ZsYWdfc3Qwe2ZpbGw6Y3VycmVudENvbG9yO30NCgkuc3ZnX2ZsYWdfc3Qxe2ZpbGw6IzJDMTEwMzt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN2Z19mbGFnX3N0MCIgZD0iTTgyLjIsODMuM0w1Mi43LDMzTDM2LjcsNjAuNWwwLDBsMCwwTDIzLjUsODMuM0g4Mi4yeiBNMjcuMyw4MS4xbDExLjEtMTkuMmw2LjMtNS4ybDYuMSw2LjhsMTAtNS43bDYuNSw0LjUNCglsMTEuMSwxOC44SDI3LjN6IE01Mi43LDM3LjRsMTIsMjAuNEw2MSw1NS4ybC05LjYsNS41bC02LjQtN2wtMy40LDIuOEw1Mi43LDM3LjRMNTIuNywzNy40eiIvPg0KPHBhdGggY2xhc3M9InN2Z19mbGFnX3N0MCIgZD0iTTc2LjIsNTkuNGwxMi41LDIxLjJoLTYuMmwxLDEuNmwwLjMsMC42aDguOEw3Ni4yLDU1bC00LjQsNy41bDEuMywyLjJMNzYuMiw1OS40eiIvPg0KPHBhdGggY2xhc3M9InN2Z19mbGFnX3N0MCIgZD0iTTIzLjcsODAuNUgxMS4zbDkuMi0xNS45bDIuNSwyLjdsOS4xLTcuNmwxLjgsMy4xbDEuMy0yLjJsLTcuNS0xMi44TDcuNSw4Mi43aDE0LjlsMC4zLTAuNkwyMy43LDgwLjV6DQoJIE0yNy43LDUyLjNsMy4zLDUuNmwtNy44LDYuNWwtMS41LTEuN0wyNy43LDUyLjNMMjcuNyw1Mi4zeiIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTM2LjYsMTZsMy40LDYuOGwtMy40LDYuOGgxNS4ydjQuOEg1NFYxNkgzNi42eiBNNDAuMiwyNy4zbDIuMy00LjZsLTIuMy00LjZoMTEuNnY5LjFINDAuMnoiLz4NCjwvc3ZnPg0K';

const thumbUpSvg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FtYWRhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzEgMzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxIDMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdmdfdGh1bWJfc3Qwe2ZpbGw6Y3VycmVudENvbG9yO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3ZnX3RodW1iX3N0MCIgZD0iTTMuMDM3MzUgMjUuMTA4OEg1LjU0NTMyQzYuMjM1IDI1LjEwODggNi43OTkzIDI0LjU0NDUgNi43OTkzIDIzLjg1NDhWMTIuNTY5QzYuNzk5MyAxMS44NzkzIDYuMjM1IDExLjMxNSA1LjU0NTMyIDExLjMxNUgzLjAzNzM1TDMuMDM3MzUgMjUuMTA4OFpNMjcuOTAzOCAxNi4xODA0QzI4LjA0MTcgMTUuODY2OSAyOC4xMTcgMTUuNTI4NCAyOC4xMTcgMTUuMTc3MlYxMy44MjI5QzI4LjExNyAxMi40NDM2IDI2Ljk4ODQgMTEuMzE1IDI1LjYwOSAxMS4zMTVIMTguNzEyMUwxOS44NjU4IDUuNDgzOTZDMTkuOTI4NSA1LjIwODA5IDE5Ljg5MDkgNC45MDcxMyAxOS43NjU1IDQuNjU2MzRDMTkuNDc3IDQuMDkyMDUgMTkuMTEzNCAzLjU3NzkxIDE4LjY2MiAzLjEyNjQ4TDE4LjA4NTEgMi41MzcxMUwxMC4wNDcxIDEwLjU3NTFDOS41NzA1OSAxMS4wNTE2IDkuMzA3MjYgMTEuNjkxMiA5LjMwNzI2IDEyLjM1NThWMjIuMTg3QzkuMzA3MjYgMjMuNzkyMSAxMC42MjM5IDI1LjEwODggMTIuMjQxNiAyNS4xMDg4SDIyLjQxMTRDMjMuMjg5MSAyNS4xMDg4IDI0LjExNjggMjQuNjQ0OCAyNC41NjgyIDIzLjg5MjRMMjcuOTAzOCAxNi4xODA0VjE2LjE4MDRaIiAvPg0KPC9zdmc+DQo=';

const YduqsMotivationalMessages = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = false;
    this.active = false;
    // TODO Remover countdown
    this.countdown = {
      break: 0,
      forward: 0,
    };
    this.configOpen = false;
    // Remover até aqui
    this.forwardKey = 'yduqs-mm-start-count';
    this.icons = {
      water_glass: waterGlassSvg,
      tea_cup: teaCupSvg,
      flag: flagSvg,
      thumb_up: thumbUpSvg,
    };
  }
  handleCloseAlert() {
    this._hideMessage();
    this._generateIntervals();
  }
  handleCloseConfirm() {
    this._hideMessage();
    this._generateIntervals();
  }
  handleCloseInfo() {
    this._hideMessage();
    this._generateIntervals();
  }
  handleCloseToast() {
    this._hideMessage();
    this._generateForwardIntervals();
  }
  isMobile() {
    return window.innerWidth <= 578;
  }
  _generateForwardIntervals() {
    // Sortenaod um valor entre 3 e 4 minutos
    this.forwardInterval = new Date().getTime() + (3 * 60 + generateRandomNumber(1, 60)) * 1000;
  }
  /*
  private _generateBreakIntervals() {
    // Sortenaod um valor entre 23 e 25 minutos
    this.breakInterval = new Date().getTime() + (23 * 60 + generateRandomNumber(1, 120)) * 1000;
  }
  */
  _generateIntervals() {
    this._generateForwardIntervals();
    // this._generateBreakIntervals();
  }
  handleVisibility() {
    if (document.hidden) {
      // Aba Inativa
      this._stopCount();
    }
    else {
      // Aba ativa
      this._startCount();
    }
  }
  handleOpen() {
    this.open = Boolean(this.message);
  }
  _setMessage(message) {
    this.message = message;
  }
  _getIcon(type) {
    switch (type) {
      case 'toast':
        return 'thumb_up';
      case 'confirm':
      case 'info':
        return 'flag';
      default:
        return undefined;
    }
  }
  _showMessage(type) {
    let randomVector;
    let prefix;
    this.forwardInterval = null;
    if (type === 'toast') {
      randomVector = 8;
      prefix = 'forward';
    }
    else if (type === 'alert') {
      randomVector = 5;
      prefix = 'break';
      this.breakInterval = null;
    }
    else if (type === 'confirm' || type === 'info') {
      randomVector = 0;
      prefix = 'conclusion';
    }
    const index = generateRandomNumber(0, randomVector);
    this._setMessage({
      type: type,
      disclaimer: i18n(`motivationalMsg.${prefix}.${index}.disclaimer`) || undefined,
      icon: this.icons[i18n(`motivationalMsg.${prefix}.${index}.icon`)] || this.icons[this._getIcon(type)],
      title: i18n(`motivationalMsg.${prefix}.${index}.title`) || undefined,
      message: i18n(`motivationalMsg.${prefix}.${index}.message`),
    });
  }
  _hideMessage() {
    this.open = false;
    window.setTimeout(() => {
      this._setMessage(null);
    }, 1000);
  }
  _setActivateTime() {
    window.localStorage.setItem(this.forwardKey, String(new Date().getTime()));
  }
  _setInactivateTime() {
    window.localStorage.removeItem(this.forwardKey);
  }
  _triggerMessages() {
    if (!document.hidden && !this.open) {
      // Abrir mensagem de apoio
      if (Boolean(this.forwardInterval) && this.forwardInterval <= new Date().getTime()) {
        // Mensagens de Apoio
        this._showMessage('toast');
      }
      else if (Boolean(this.breakInterval) && this.breakInterval <= new Date().getTime()) ;
    }
  }
  _startCount() {
    this._generateIntervals(); // Cria um novo Intervalo
    this._setActivateTime(); // Grava um novo Start time no Storage
    if (this.looper) {
      clearInterval(this.looper);
    }
    this.looper = setInterval(() => {
      this.countdown = {
        break: ((this.breakInterval - new Date().getTime()) / 1000).toFixed(),
        forward: ((this.forwardInterval - new Date().getTime()) / 1000).toFixed(),
      };
      this._triggerMessages();
    }, 1000); // TODO mudar intervalo para um ciclo maior
  }
  _stopCount() {
    this._setInactivateTime(); // Grava um novo Start time no Storage
    this.forwardInterval = null;
    if (this.looper) {
      clearInterval(this.looper);
    }
  }
  componentDidLoad() {
    document.addEventListener('visibilitychange', () => {
      this.handleVisibility();
    });
    this._startCount();
    /**
     * Gambiarra para mostrar a mSG de Conclusão do Módulo
     */
    $('body').on('click', 'yduqs-questions[question_id] button[question-reference]', (event) => {
      const btn = $(event.target);
      const parent = $(btn.closest(`div.question-block[question-reference="${btn.attr('question-reference')}"]`)[0]);
      const question = $(parent.closest('yduqs-questions')[0]);
      const module = $(question.closest('module')[0]);
      const answerFeedback = $(parent).find('div.question-negative-feedback');
      // Qual o tema?
      const theme = cleanString(document.title).replace(/ +/g, '');
      // Qual o Módulo?
      const moduleId = module.attr('id');
      // Quantas questões?
      const total = [];
      question
        .find('yduqs-questions-body')
        .children('div.question-block')
        .each(function () {
        total.push($(this).attr('question-reference'));
      });
      // Qual a questão respondida?
      const answered = btn.attr('question-reference');
      // Chave do localStorage
      const storageKey = `${theme}-${moduleId}`;
      const localData = localStorage.getItem(storageKey)
        ? JSON.parse(localStorage.getItem(storageKey))
        : {
          questions: total.map(item => {
            return { reference: item, answered: false };
          }),
        };
      if (parent.is('.answered')) {
        if (answerFeedback.is('.d-none') && localData.questions.filter((item) => !item.answered).length > 0) {
          const questionIndex = localData.questions.findIndex((item) => item.reference === answered);
          localData.questions[questionIndex].answered = true;
          // Todas foram respondidas?
          if (localData.questions.filter((item) => !item.answered).length === 0) {
            if (this.isMobile()) {
              // setTimeout(() => {
              // Compensar o Feedback da resposta
              this._showMessage('confirm');
              // }, 3000);
            }
            else {
              this._showMessage('info');
            }
          }
        }
      }
      localStorage.setItem(storageKey, JSON.stringify(localData));
    });
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    return (h(Host, null, h("yduqs-alert", { usematerial: !Boolean((_a = this.message) === null || _a === void 0 ? void 0 : _a.icon), icon: ((_b = this.message) === null || _b === void 0 ? void 0 : _b.icon) || 'info', title: ((_c = this.message) === null || _c === void 0 ? void 0 : _c.disclaimer) || undefined, subtitle: ((_d = this.message) === null || _d === void 0 ? void 0 : _d.title) || undefined, message: (_e = this.message) === null || _e === void 0 ? void 0 : _e.message, btntext: i18n('globals.continuar'), open: this.open && Boolean(((_f = this.message) === null || _f === void 0 ? void 0 : _f.type) === 'alert') }), h("yduqs-confirm", { usematerial: !Boolean((_g = this.message) === null || _g === void 0 ? void 0 : _g.icon), icon: ((_h = this.message) === null || _h === void 0 ? void 0 : _h.icon) || 'info', title: i18n(`motivationalMsg.conclusion.disclaimer`), subtitle: ((_j = this.message) === null || _j === void 0 ? void 0 : _j.title) || undefined, message: (_k = this.message) === null || _k === void 0 ? void 0 : _k.message, btntext: i18n('motivationalMsg.conclusion.action'), open: this.open && Boolean(((_l = this.message) === null || _l === void 0 ? void 0 : _l.type) === 'confirm') }), h("yduqs-info", { usematerial: !Boolean((_m = this.message) === null || _m === void 0 ? void 0 : _m.icon), icon: ((_o = this.message) === null || _o === void 0 ? void 0 : _o.icon) || 'info', title: i18n(`motivationalMsg.conclusion.disclaimer`), subtitle: ((_p = this.message) === null || _p === void 0 ? void 0 : _p.title) || undefined, message: (_q = this.message) === null || _q === void 0 ? void 0 : _q.message, open: this.open && Boolean(((_r = this.message) === null || _r === void 0 ? void 0 : _r.type) === 'info') }), h("yduqs-toast", { usematerial: !Boolean((_s = this.message) === null || _s === void 0 ? void 0 : _s.icon), icon: ((_t = this.message) === null || _t === void 0 ? void 0 : _t.icon) || 'info', message: (_u = this.message) === null || _u === void 0 ? void 0 : _u.message, tit: (_v = this.message) === null || _v === void 0 ? void 0 : _v.title, open: this.open && Boolean(((_w = this.message) === null || _w === void 0 ? void 0 : _w.type) === 'toast') })));
  }
  static get watchers() { return {
    "message": ["handleOpen"]
  }; }
};

const YduqsPager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hideCssClass = 'c-pager-hide';
    this.attrSelectorPage = 'data-page';
    this.attrSelectorModule = 'data-module';
    this.attrSelectorLabel = 'data-label';
    this.starterPageIndex = 1;
    this.theme = cleanString(document.title).replace(/ +/g, '');
    this.localStorageKey = `${this.theme}-last-viewed-page`;
    this.total = 0;
    this.current = 0;
  }
  isActive() {
    return window.innerWidth <= 578;
  }
  getTexts(key) {
    return i18n(`pager.${key}`);
  }
  _getModulePagination(module, page, label) {
    let indexes = [];
    const hasLabel = Boolean(label === null || label === void 0 ? void 0 : label.length);
    const selector = hasLabel
      ? `[${this.attrSelectorModule}="${module}"][${this.attrSelectorLabel}="${label}"]`
      : `[${this.attrSelectorModule}="${module}"]:not([${this.attrSelectorLabel}])`;
    const elements = document.querySelectorAll(selector);
    elements === null || elements === void 0 ? void 0 : elements.forEach(elem => {
      const elemPage = elem.getAttribute(this.attrSelectorPage);
      if (!indexes.includes(elemPage)) {
        indexes.push(Number(elemPage));
      }
    });
    indexes.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
    // A capa dos modulos é page=0 e não deve ser considerada no total de Páginas.
    return {
      total: indexes.length - (hasLabel ? 0 : 1),
      atual: indexes.findIndex(item => item === page) + (hasLabel ? 1 : 0),
    };
  }
  _getLabelModule(module, count) {
    return (h("div", { class: "c-pager-label-module", "data-cy": `${module}-${count}` }, h("span", { class: "c-pager-label-module-text", "data-cy": module }, module), Boolean(count === null || count === void 0 ? void 0 : count.length) && (h("span", { class: "c-pager-label-module-count", "data-cy": count }, count))));
  }
  _getLabel() {
    const pageElem = $(`[${this.attrSelectorPage}="${this.current}"]`);
    const moduleCount = pageElem.attr(this.attrSelectorModule);
    const label = pageElem.attr(this.attrSelectorLabel);
    let result;
    if (isNaN(Number(moduleCount))) {
      result = (h("div", { class: "c-pager-label-container", "data-cy": moduleCount }, this._getLabelModule(this.getTexts(moduleCount))));
    }
    else {
      const config = this._getModulePagination(Number(moduleCount), this.current, label);
      if (pageElem.get(0).tagName === 'YDUQS-MODULE-COVER') {
        // POG para quando for a Capa do Módulo
        result = (h("div", { class: "c-pager-label-container", "data-cy": moduleCount }, this._getLabelModule(this.getTexts('modulo'), moduleCount)));
      }
      else {
        result = (h("div", { class: "c-pager-label-container", "data-cy": label }, h("div", { class: "c-pager-label-page" }, h("span", { class: "c-pager-label-page-text", "data-cy": `label ${label}` }, this.getTexts(label || 'conceito')), h("span", { class: "c-pager-label-page-count" }, h("strong", { "data-cy": "count-atual" }, config.atual), " / ", h("strong", { "data-cy": "count-total" }, config.total))), h("div", { class: "c-pager-label-separator" }, "|"), this._getLabelModule(this.getTexts('modulo'), moduleCount)));
      }
    }
    return result;
  }
  /**
   * Procura pelos videos e faz backup do SRC
   */
  _prepareVideoPlayers() {
    $('yduqs-video-player iframe').each(function () {
      $(this).attr('set-src', $(this).attr('src'));
    });
  }
  /**
   * Seta o src nos videos da pagina atual, ou todos os videos se a paginação não estiver ativa
   */
  _setCurrentVideosSrc() {
    let players;
    if (this.isActive()) {
      const currents = $(`[${this.attrSelectorPage}="${this._getCurrentPage()}"]`);
      players = currents.find('yduqs-video-player iframe');
    }
    else {
      players = $('yduqs-video-player iframe');
    }
    players.each(function () {
      if (!Boolean($(this).attr('src'))) {
        $(this).attr('src', $(this).attr('set-src'));
      }
    });
  }
  /**
   * Procura pelos videos nas paginas não correntes e muda seu SRC
   */
  _stopUncurrentVideos() {
    if (this.isActive()) {
      const uncurrents = $(`[${this.attrSelectorPage}]:not([${this.attrSelectorPage}="${this._getCurrentPage()}"])`);
      const players = uncurrents.find('yduqs-video-player iframe');
      players.each(function () {
        $(this).removeAttr('src');
      });
    }
  }
  _handleVideoPlayers() {
    this._stopUncurrentVideos();
    this._setCurrentVideosSrc();
  }
  handleWindowResize() {
    this._handleVideoPlayers();
  }
  _goToPage() {
    // reseta o Hash da url
    this._resetHash();
    // Esconde as páginas
    $(`[${this.attrSelectorPage}]`).addClass(this.hideCssClass);
    // Mostra a página atual
    $(`[${this.attrSelectorPage}="${this._getCurrentPage()}"]`).removeClass(this.hideCssClass);
    // Valida Btn Prev
    if (this._getCurrentPage() <= this.starterPageIndex) {
      this.btnPrev.disabled = true;
    }
    else {
      this.btnPrev.removeAttribute('disabled');
    }
    // Valida Btn Next
    if (this._getCurrentPage() >= this.total) {
      this.btnNext.disabled = true;
    }
    else {
      this.btnNext.removeAttribute('disabled');
    }
    // Gambiarra pra parar os videos que não estão na pagina atual
    this._handleVideoPlayers();
    // Gravação dos dados de Ultimo página visualizada
    window.localStorage.setItem(this.localStorageKey, `${this.current}`);
  }
  _setCurrentPage(value) {
    const next = value < this.starterPageIndex ? this.starterPageIndex : value > this.total ? this.total : value;
    // Disparo do Evento de Troca de páginas
    dispatchEvent('yduqs-pager-before-change', { from: this.current, to: next, total: this.total });
    this.current = next;
  }
  _getCurrentPage() {
    return this.current;
  }
  _init() {
    // Gambiarra para resolver problema no audio dos videos players
    this._prepareVideoPlayers();
    const elements = document.querySelectorAll(`[${this.attrSelectorPage}]`);
    let total = 0;
    elements === null || elements === void 0 ? void 0 : elements.forEach(page => {
      const pageNum = Number(page.getAttribute(this.attrSelectorPage));
      total = total < pageNum ? pageNum : total;
    });
    this.total = total;
    const last = window.localStorage.getItem(this.localStorageKey);
    if (last && !isNaN(Number(last))) {
      this._setCurrentPage(Number(last));
    }
    else {
      this._setCurrentPage(this.starterPageIndex);
    }
  }
  /**
   * Vai para a página anterior
   */
  _goToPrev() {
    // Scrolla para o inicio da página
    window.scrollTo(0, 0);
    this._setCurrentPage(this._getCurrentPage() - 1);
  }
  /**
   * Vai para a próxima página
   */
  _goToNext() {
    // Scrolla para o inicio da página
    window.scrollTo(0, 0);
    this._setCurrentPage(this._getCurrentPage() + 1);
  }
  /**
   * Retorna a pagina onde está o elemento informado
   * @param elem jQuery Element
   */
  _getPageFromElement(selector) {
    var _a, _b, _c, _d, _e;
    const elem = (selector === null || selector === void 0 ? void 0 : selector.length) > 1 && $(selector);
    let pos;
    if (elem.attr(this.attrSelectorPage)) {
      pos = elem.attr(this.attrSelectorPage);
    }
    else if (((_a = elem.children(`[${this.attrSelectorPage}]`)) === null || _a === void 0 ? void 0 : _a.length) > 0 && elem.children(`[${this.attrSelectorPage}]`).eq(0)) {
      pos = (_c = (_b = elem.children(`[${this.attrSelectorPage}]`)) === null || _b === void 0 ? void 0 : _b.eq(0)) === null || _c === void 0 ? void 0 : _c.attr(this.attrSelectorPage);
    }
    else if (elem.closest(`[${this.attrSelectorPage}]`)) {
      pos = (_d = elem.closest(`[${this.attrSelectorPage}]`)) === null || _d === void 0 ? void 0 : _d.attr(this.attrSelectorPage);
    }
    else if (elem.next(`[${this.attrSelectorPage}]`).length > 0) {
      pos = (_e = elem.next(`[${this.attrSelectorPage}]`)) === null || _e === void 0 ? void 0 : _e.attr(this.attrSelectorPage);
    }
    return pos;
  }
  /**
   * Reseta o hash, se houver necessidade
   */
  _resetHash() {
    const hash = window.location.hash;
    if ((hash === null || hash === void 0 ? void 0 : hash.length) > 1) {
      const page = this._getPageFromElement(hash);
      const atual = this._getCurrentPage();
      if (Number(page) !== atual) {
        window.location.hash = '';
      }
    }
  }
  clickMenuTitleHandler(event) {
    var _a;
    // Scrolla para o inicio da página
    window.scrollTo(0, 0);
    const element = event.detail;
    this._setCurrentPage(parseInt((_a = element.closest(`[${this.attrSelectorPage}]`)) === null || _a === void 0 ? void 0 : _a.getAttribute(this.attrSelectorPage)));
  }
  componentWillLoad() {
    // Numerador de páginas
    let p = $('.auto-pager');
    p.each(function (i) {
      let m = $(this).closest('module').attr('id');
      if (m == 'apresentacao') {
        $(this).attr('data-module', 'introducao');
      }
      else if (m == 'modulo1') {
        $(this).attr('data-module', '1');
      }
      else if (m == 'modulo2') {
        $(this).attr('data-module', '2');
      }
      else if (m == 'modulo3') {
        $(this).attr('data-module', '3');
      }
      else if (m == 'modulo4') {
        $(this).attr('data-module', '4');
      }
      // Numera páginas comuns
      $(this).attr('data-page', i);
      // Numera a capa
      $(this).find('c-cover').length > 0 && ($(this).attr('data-module', 'introducao'), $(this).attr('data-page', '0'));
      // Label para intro e pagina 1
      $(this).closest('header').find('yduqs-cover').length > 0 && ($(this).attr('data-module', 'introducao'), $(this).attr('data-page', 1));
      // Label para apresentacao
      $(this).find('module#apresentacao').length > 0 && $(this).attr('data-module', 'apresentacao');
      // Label para vem que eu te explico
      $(this).find('yduqs-module-video[title_gallery*="Vem que eu te explico"]').length > 0 && $(this).attr('data-label', 'teexplico');
      // Label para atividades
      $(this).find('yduqs-questions').length > 0 && $(this).attr('data-label', 'atividade');
      $(this).find('yduqs-title[topic_title="Atividade discursiva"]').length > 0 && $(this).attr('data-label', 'atividade');
      $(this).find('yduqs-teoria').length > 0 && $(this).attr('data-label', 'atividade');
      // Numera a conclusão
      $(this).closest('module#conclusao').length > 0 && $(this).attr('data-module', 'conclusao');
      $(this).find('module#conclusao').length > 0 && $(this).attr('data-module', 'conclusao');
      // Numera o footer
      $(this).closest('footer').length > 0 && $(this).attr('data-page', i - 1);
      // Renumera e agrupa itens extras do footer
      if ($(this).closest('footer').find('yduqs-footer').length > 0) {
        let t = $('[data-module=conclusao').attr('data-page');
        $(this).attr('data-page', t);
        $(this).attr('data-module', 'conclusao');
      }
    });
  }
  componentDidLoad() {
    /**
     * Evento disparado pela busca, antes de direcionar para um dos resultados
     */
    window.addEventListener('yduqs-search-before-navigate', event => {
      var _a;
      this._setCurrentPage(Number(((_a = event.detail) === null || _a === void 0 ? void 0 : _a.page) || this.starterPageIndex));
    });
    /**
     * Evento disparado na mudança do Hash da url
     * Esse recurso foi utilizado em vários temas como ancoragem para pontos do conteudo
     */
    window.addEventListener('hashchange', () => {
      var _a;
      const hash = ((_a = window.location.hash) === null || _a === void 0 ? void 0 : _a.length) > 1 ? window.location.hash : false;
      if (hash) {
        let pos = this._getPageFromElement(hash);
        if (pos) {
          this._setCurrentPage(parseInt(pos));
        }
      }
    });
    /**
     * Marretando um evento nos links com href hashed
     */
    $('body').on('click', 'a[href^="#"]', event => {
      var _a;
      event.preventDefault();
      const hash = (_a = event.currentTarget.href) === null || _a === void 0 ? void 0 : _a.substring(event.currentTarget.href.indexOf('#'), event.currentTarget.href.length);
      if (hash) {
        let pos = this._getPageFromElement(hash);
        if (pos) {
          this._setCurrentPage(parseInt(pos));
        }
      }
      if (window.location.hash == hash) {
        window.scrollTo(0, $(window.location.hash).offset().top);
      }
      else {
        window.location.hash = hash;
      }
    });
    this._init();
  }
  render() {
    return (h(Host, null, h("div", { class: `c-pager ${this.total <= 1 ? 'c-pager-none' : ''}`, id: "btnPaginator" }, h("button", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "paginacao:conteudo-clique-botao", "data-gtm-event-label": "voltar", disabled: true, type: "button", class: "c-button c-button__icon-container c-button__icon-square", "data-cy": "btn-prev", ref: el => (this.btnPrev = el), onClick: () => this._goToPrev() }, h("span", { class: "c-button__icon material-icons" }, "arrow_back")), this._getLabel(), h("button", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "paginacao:conteudo-clique-botao", "data-gtm-event-label": "avancar", type: "button", class: "c-button c-button__icon-container c-button__icon-square", "data-cy": "btn-next", ref: el => (this.btnNext = el), onClick: () => this._goToNext() }, h("span", { class: "c-button__icon material-icons" }, "arrow_forward")))));
  }
  static get watchers() { return {
    "current": ["_goToPage"]
  }; }
};

export { YduqsMotivationalMessages as yduqs_motivational_messages, YduqsPager as yduqs_pager };
