import Head from 'next/head'

const colors = {
  dark: '#444',
  light: 'white'
}

export default ({
  children
}) => (
  <main>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    { children }
    <style jsx global>{`
html {
  font-size: 18px;
	font-size: calc(112.5% + 2 * (100vw - 600px) / 400);
}
body {
  line-height: 1.333333333rem;
	font-family: system, "-apple-system", "-webkit-system-font", BlinkMacSystemFont, "Helvetica Neue", "Helvetica", "Segoe UI", "Roboto", "Arial", "freesans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

* {
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
}
pre {
  font-family: monospace;
}
h1 {
  font-size: 2rem;
}
input {
  border: 1px solid ${colors.dark};
}
button {
  padding: 0 0.5em;
  border: none;
  color: ${colors.light};
  background: ${colors.dark};
}

main > * {
  max-width: 30rem;
  margin-left: auto;
	margin-right: auto;
}
`}</style>
  </main>
)