function App() {
    const st1 = { color: 'white', backgroundColor: '#23272F', height: '100vh', width: '100vw', padding: '20px' }
    const pad = { padding: '4px'}
    return (
        <div style={st1}>
            <h1 style={{margin: '16px 16px 0px 16px', padding : '16px'}}>Quick Start</h1>
            <p style={{margin: '16px', padding : '16px'}}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on daily basis.</p>
            <div style={{ backgroundColor: '#343A46', margin: '20px', padding : '40px', borderRadius: '20px' }}>
                <label style={{fontSize: '26px'}}>You will learn</label>
                <ul style={{padding: '20px', gap: '8px'}}>
                    <li style={pad}>How to create and nest components</li>
                    <li style={pad}>How to add markup and styles</li>
                    <li style={pad}>How to display data</li>
                    <li style={pad}>How to render conditions and lists</li>
                    <li style={pad}>How to respond to events and update the screen</li>
                    <li style={pad}>How to share data between components</li>
                </ul>
            </div>
        </div>
    )
}




ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)