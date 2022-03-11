const React = require("react");

exports.onRenderBody = function ({ setHeadComponents }, pluginOptions) {
  const optimizelyId = pluginOptions.optimizelyId;

  if (optimizelyId){
    const script = <script key="optimizely-snippet" src={`https://cdn.optimizely.com/js/${optimizelyId}.js`} />;
    setHeadComponents([script]);
  }else{
    console.error(`gatsby-plugin-optimizely-js plugin is unable to add the Optimizely snippet! "optimizelyId" option is required.`);
  }
};
