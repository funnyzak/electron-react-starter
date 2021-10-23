import React from 'react';

const Index: React.FC = () => {
  const [chromeVersion, nodeVersion, electronVersion] = ['chrome', 'node', 'electron'].map((v) => process.versions[v])
  return (
    <div className="hello">
      We are using Node.js
      <span id="node-version">{nodeVersion}</span>
      ,
      Chromium
      <span id="chrome-version">{chromeVersion}</span>
      ,
      and Electron
      <span id="electron-version">{electronVersion}</span>
      .
    </div>
  )
}
export default Index;
