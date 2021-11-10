/* eslint-disable @typescript-eslint/no-var-requires */
const mdContainer = require("markdown-it-container");

module.exports = (md) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";
        const content = tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : "";
        return `<demo-block>
        <!--element-demo: ${content}:element-demo-->
        ${description ? `<div>${md.render(description)}</div>` : ""}
        `;
      } else {
        return "</demo-block>";
      }
    },
  });

  md.use(mdContainer, "tip");
  md.use(mdContainer, "warning");
  md.use(mdContainer, "summary", {
    validate(params) {
      return params.trim().match(/^spoiler\s+(.*)$/);
    },
    render(tokens, idx) {
      var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return "<details><summary>" + md.utils.escapeHtml(m[1]) + "</summary>\n";
      } else {
        return "</details>\n";
      }
    },
  });
};
