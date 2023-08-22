import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		padding:0;
		margin: 0;
		overflow-x: hidden;
	}

	:root {
	  font-family: 'Quicksand', sans-serif;
	  line-height: 1.5;
	  font-weight: 400;

	  color-scheme: light dark;
	  color: #ffffffde;
background: radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%);

	  font-synthesis: none;
	  text-rendering: optimizeLegibility;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  -webkit-text-size-adjust: 100%;
	}

	a {
	  font-weight: 500;
	  color: #646cff;
	  text-decoration: inherit;
	}
	a:hover {
	  color: #535bf2;
	}

	body {
	  min-width: 320px;
	  min-height: 100vh;
	}

	h1 {
	  font-size: 3.2em;
	  line-height: 1.1;
	}

	button {
	  border-radius: 8px;
	  border: 1px solid transparent;
	  padding: 0.6em 1.2em;
	  font-size: 1em;
	  font-weight: 500;
	  font-family: inherit;
	  background-color: #1a1a1a;
	  cursor: pointer;
	  transition: border-color 0.25s;
	}
	button:hover {
	  border-color: #646cff;
	}
	button:focus,
	button:focus-visible {
	  outline: 4px auto -webkit-focus-ring-color;
	}

	@media (prefers-color-scheme: light) {
	  :root {
	    color: #213547;
	    background-color: #ffffff;
	  }
	  a:hover {
	    color: #747bff;
	  }
	  button {
	    background-color: #f9f9f9;
	  }
	}

`