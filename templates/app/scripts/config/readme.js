import { marked } from 'marked';
import readme from '@/assets/readme.md';
import { isMP } from '@/config';

const preReg = /<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gm;
const tokenReg = /<span class="token[^>]*>.*?<\/span>/g;
const addTokenReg = /<span class="token[^>]*>add<\/span>/g;

function getReadme() {
  const html = marked(readme);

  return html.replace(preReg, function ($0, $1) {
    let result = `<pre class="language-bash"><code class="language-bash">${Prism.highlight(
      $1,
      Prism.languages.bash,
      'bash'
    )}</code></pre>`;

    if (isMP) {
      result = result
        .replace(tokenReg, ($0) => `${$0}<span>&nbsp;</span>`)
        .replace(addTokenReg, ($0) => `<span>&nbsp;</span>${$0}`)
        .replace(/\n/g, '<div></div>');
    }

    return result;
  });
}

export default getReadme;
